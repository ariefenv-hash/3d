import { useCallback, useEffect, useRef, useState } from 'react';
import { Game } from './game/engine';
import type { Stats, TipDir, WinInfo } from './game/engine';
import { LEVELS } from './game/levels';

const SAVE_KEY = 'gt3d.progress.v2';
const MUTE_KEY = 'gt3d.muted.v1';

interface Best { stars: number; rotations: number; time: number; deaths?: number }
interface Progress { unlocked: number; best: Record<number, Best> }

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Progress;
      if (p && typeof p.unlocked === 'number') {
        return { unlocked: Math.min(Math.max(1, p.unlocked), LEVELS.length), best: p.best || {} };
      }
    }
  } catch { /* ignore */ }
  return { unlocked: 1, best: {} };
}

function fmtTime(t: number) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** 评级以稳健与探索为准：零死亡且 ≥2 星 = S；死亡 ≤4 = A；其余 = B（转向数是独立的纪录挑战） */
function ratingOf(deaths: number, stars: number): 'S' | 'A' | 'B' {
  if (deaths === 0 && stars >= 2) return 'S';
  return deaths <= 4 ? 'A' : 'B';
}

// 触屏设备 / 窄屏（含手机横屏）均显示方向垫；方向垫同样支持鼠标点按
const isTouch = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || Math.min(window.innerWidth, window.innerHeight) < 500);

interface WinData extends WinInfo {
  rating: 'S' | 'A' | 'B';
  newRecord: boolean;
  level: number;
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const levelIdxRef = useRef(0);
  const progressRef = useRef<Progress>(loadProgress());
  const hintTimer = useRef(0);

  const [screen, setScreen] = useState<'title' | 'playing'>('title');
  const [levelIdx, setLevelIdx] = useState(0);
  const [stats, setStats] = useState<Stats>({ time: 0, rotations: 0, stars: 0, starsTotal: 3, deaths: 0, gAngle: 90 });
  const [win, setWin] = useState<WinData | null>(null);
  const [progress, setProgress] = useState<Progress>(progressRef.current);
  const [paused, setPaused] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [deathKey, setDeathKey] = useState(0);
  const [hint, setHint] = useState('');
  const [muted, setMuted] = useState(() => localStorage.getItem(MUTE_KEY) === '1');
  const [gyroOn, setGyroOn] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 2600);
  }, []);

  const showHint = useCallback((text: string) => {
    setHint(text);
    window.clearTimeout(hintTimer.current);
    hintTimer.current = window.setTimeout(() => setHint(''), 7000);
  }, []);

  // 引擎初始化
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let game: Game;
    try {
      game = new Game(canvas, {
        onStats: setStats,
        onDeath: (reason) => {
          setDeathKey((k) => k + 1);
          showToast(reason === 'fall' ? '坠出边界 — 空格回正可防迷路，R 键立刻重试' : '撞上危险晶体 — 记住它的位置，R 键重试');
        },
        onPauseRequest: () => setPaused((p) => !p),
        onWin: (w) => {
          const li = levelIdxRef.current;
          const prev = progressRef.current;
          const prevBest = prev.best[li];
          const newRecord = !prevBest || w.stars > prevBest.stars || w.rotations < prevBest.rotations || w.time < prevBest.time;
          const merged: Best = prevBest
            ? {
                stars: Math.max(prevBest.stars, w.stars),
                rotations: Math.min(prevBest.rotations, w.rotations),
                time: Math.min(prevBest.time, w.time),
                deaths: Math.min(prevBest.deaths ?? w.deaths, w.deaths),
              }
            : { stars: w.stars, rotations: w.rotations, time: w.time, deaths: w.deaths };
          const next: Progress = {
            unlocked: Math.max(prev.unlocked, Math.min(li + 2, LEVELS.length)),
            best: { ...prev.best, [li]: merged },
          };
          progressRef.current = next;
          setProgress(next);
          try { localStorage.setItem(SAVE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
          setWin({ ...w, rating: ratingOf(w.deaths, w.stars), newRecord, level: li });
        },
      });
    } catch {
      setWebglFailed(true);
      return;
    }
    gameRef.current = game;
    game.sfx.muted = localStorage.getItem(MUTE_KEY) === '1';
    game.toAttract();
    const unlock = () => game.sfx.unlock();
    window.addEventListener('pointerdown', unlock, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      game.dispose();
      gameRef.current = null;
    };
  }, []);

  // 暂停 / 结算时冻结引擎输入
  useEffect(() => {
    const g = gameRef.current;
    if (!g || screen !== 'playing') return;
    g.setEnabled(!paused && !win);
  }, [paused, win, screen]);

  const startLevel = useCallback((i: number) => {
    const g = gameRef.current;
    if (!g) return;
    levelIdxRef.current = i;
    setLevelIdx(i);
    setWin(null);
    setPaused(false);
    setSelectOpen(false);
    setScreen('playing');
    g.startLevel(i);
    showHint(LEVELS[i].hint);
  }, [showHint]);

  const restartLevel = useCallback(() => {
    gameRef.current?.restart();
    showHint(LEVELS[levelIdxRef.current].hint);
  }, [showHint]);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const nv = !m;
      localStorage.setItem(MUTE_KEY, nv ? '1' : '0');
      if (gameRef.current) gameRef.current.sfx.muted = nv;
      return nv;
    });
  }, []);

  const toggleGyro = useCallback(async () => {
    const g = gameRef.current;
    if (!g) return;
    if (gyroOn) {
      g.enableGyro(false);
      setGyroOn(false);
      showToast('陀螺仪已关闭');
      return;
    }
    try {
      const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
      if (typeof DOE.requestPermission === 'function') {
        const res = await DOE.requestPermission();
        if (res !== 'granted') {
          showToast('陀螺仪权限被拒绝，无法开启');
          return;
        }
      }
      const ok = g.enableGyro(true);
      setGyroOn(ok);
      if (!ok) {
        showToast('当前设备不支持陀螺仪');
        return;
      }
      window.setTimeout(() => {
        if (gameRef.current && !gameRef.current.gyroIsActive()) showToast('未检测到陀螺仪数据（需要真实移动设备）');
        else showToast('陀螺仪已开启：倾斜手机即可偏转重力');
      }, 900);
    } catch {
      showToast('陀螺仪不可用');
    }
  }, [gyroOn, showToast]);

  const goTitle = useCallback(() => {
    const g = gameRef.current;
    if (!g) return;
    setPaused(false);
    setWin(null);
    setSelectOpen(false);
    setScreen('title');
    g.toAttract();
  }, []);

  // ---------------- 子组件 ----------------

  const padRepeat = (fn: () => void) => ({
    onPointerDown: (e: React.PointerEvent) => {
      e.preventDefault();
      fn();
      const id = window.setInterval(fn, 300);
      const el = e.currentTarget as Element;
      const stop = () => window.clearInterval(id);
      el.addEventListener('pointerup', stop, { once: true });
      el.addEventListener('pointercancel', stop, { once: true });
      el.addEventListener('pointerleave', stop, { once: true });
    },
  });

  const TouchPads = (
    <div className="touch-layer">
      <div className="pad pad-move">
        <button className="pad-btn pad-u" {...padRepeat(() => gameRef.current?.tip('U' as TipDir))}>↑</button>
        <button className="pad-btn pad-l" {...padRepeat(() => gameRef.current?.tip('L' as TipDir))}>←</button>
        <button className="pad-btn pad-r" {...padRepeat(() => gameRef.current?.tip('R' as TipDir))}>→</button>
        <button className="pad-btn pad-d" {...padRepeat(() => gameRef.current?.tip('D' as TipDir))}>↓</button>
        <div className="pad-center" />
      </div>
      <div className="pad pad-yaw">
        <button className="pad-btn" {...padRepeat(() => gameRef.current?.yaw(1))}>↺</button>
        <button className="pad-btn" {...padRepeat(() => gameRef.current?.yaw(-1))}>↻</button>
        <button className="pad-btn pad-restore" onClick={() => gameRef.current?.restoreDown()} title="重力回正">回</button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <canvas ref={canvasRef} className="game-canvas" />
      {deathKey > 0 && <div key={deathKey} className="death-flash" />}

      {screen === 'title' && (
        <div className="overlay title-screen">
          <div className="title-badge">3D</div>
          <h1 className="title-main">几何贯穿</h1>
          <div className="title-sub">引力矩阵 · GRAVITY MATRIX</div>
          <p className="title-desc">六向重力解谜：倾倒重力让球滚动、平飞、坠落；空格随时回正向下，地面罗盘永不迷路。借助弹射板、反重力井、压力闸门与检查信标，抵达传送门。连按两次 ←/→ 可反转重力。</p>
          <div className="title-actions">
            <button className="btn btn-primary" onClick={() => startLevel(Math.min(progress.unlocked, LEVELS.length) - 1)}>
              {progress.unlocked > 1 ? '继续游戏' : '开始游戏'}
            </button>
            <button className="btn" onClick={() => setSelectOpen(true)}>选择关卡</button>
            <button className="btn" onClick={() => setHelpOpen(true)}>玩法说明</button>
          </div>
          <div className="title-progress">已解锁 {progress.unlocked} / {LEVELS.length} 关</div>
          <div className="title-foot">
            <span>2D 原版：<a href="https://ariefenv-hash.github.io/geometric-traverse/" target="_blank" rel="noreferrer">几何贯穿 · 视界重力</a></span>
          </div>
        </div>
      )}

      {screen === 'playing' && (
        <>
          <div className="hud">
            <div className="hud-left">
              <span className="hud-level">第 {levelIdx + 1} 关 · {LEVELS[levelIdx].name}</span>
              <span className="hud-stars">
                {'★'.repeat(stats.stars)}{'☆'.repeat(Math.max(0, stats.starsTotal - stats.stars))}
              </span>
            </div>
            <div className="hud-right">
              <span className="grav-compass" title="地面罗盘：箭头指向世界地面在屏幕上的方位">
                <svg viewBox="0 0 36 36" style={{ transform: `rotate(${stats.gAngle}deg)` }}>
                  <circle cx="18" cy="18" r="16" className="gc-ring" />
                  <path d="M 18 6 L 24 20 L 18 16.5 L 12 20 Z" className="gc-arrow" />
                </svg>
              </span>
              <span className="hud-stat">转向 {stats.rotations}</span>
              <span className="hud-stat">坠落 {stats.deaths}</span>
              <span className="hud-stat">{fmtTime(stats.time)}</span>
              <button className="icon-btn" onClick={restartLevel} title="重开 (R)">↺</button>
              <button className={'icon-btn' + (gyroOn ? ' on' : '')} onClick={toggleGyro} title="陀螺仪重力">陀</button>
              <button className={'icon-btn' + (muted ? '' : ' on')} onClick={toggleMute} title="音效">{muted ? '静' : '音'}</button>
              <button className="icon-btn" onClick={() => setPaused(true)} title="暂停 (Esc)">‖</button>
            </div>
          </div>
          {hint && <div className="hint-banner" onClick={() => setHint('')}>{hint}</div>}
          {!isTouch && <div className="key-hints">↑ ↓ ← → 倾倒重力 · 空格 回正向下 · Q/E 90°旋转 · 拖拽自由环视（可俯仰） · 滚轮缩放 · R 重开 · Esc 暂停</div>}
          {isTouch && TouchPads}
        </>
      )}

      {selectOpen && (
        <div className="overlay modal-overlay" onClick={() => setSelectOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">选择关卡</div>
            <div className="level-grid">
              {LEVELS.map((lv, i) => {
                const locked = i + 1 > progress.unlocked;
                const best = progress.best[i];
                return (
                  <button
                    key={i}
                    className={'level-cell' + (locked ? ' locked' : '')}
                    disabled={locked}
                    onClick={() => startLevel(i)}
                  >
                    <span className="lv-num">{i + 1}</span>
                    <span className="lv-name">{locked ? '未解锁' : lv.name}</span>
                    <span className="lv-best">{locked ? '···' : best ? `★${best.stars} · ${best.deaths != null ? ratingOf(best.deaths, best.stars) : '—'}` : '未通关'}</span>
                  </button>
                );
              })}
            </div>
            <div className="modal-actions">
              <button className="btn" onClick={() => setSelectOpen(false)}>返回</button>
            </div>
          </div>
        </div>
      )}

      {helpOpen && (
        <div className="overlay modal-overlay" onClick={() => setHelpOpen(false)}>
          <div className="modal help-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">玩法说明</div>
            <div className="help-body">
              <p><b>目标：</b>操控重力方向，让小球抵达发光传送门。途中的金色八面体是星星（每关 3 颗），红色晶簇碰到即重生。</p>
              <p><b>核心操作（重力只会倾倒 90°）：</b></p>
              <ul>
                <li>← / →：重力向屏幕左 / 右倾倒，球贴地滚动</li>
                <li>↑：重力倒向屏幕深处；↓：倒向屏幕近处</li>
                <li><b>连按两次 ←（或 →）：重力反转</b>，球飞向天花板；连按四次可完成「升空→行军→垂直下坠」</li>
                <li><b>空格：重力瞬间回正世界向下</b> —— 倒悬迷路时的万能保险，随时可按</li>
                <li>顶栏<b>地面罗盘</b>箭头始终指向世界地面在屏幕上的方位——镜头翻滚后一眼找到「下」在哪</li>
                <li>Q / E：90° 旋转视角；<b>在画面上按住拖拽可自由环视</b>（上下拖动=俯视 / 仰视）；滚轮或双指捏合缩放</li>
                <li><b>穿墙透视：</b>墙壁挡住小球与镜头时会自动变半透明，任何角度都不会丢失视野</li>
                <li>R 重开；Esc 暂停</li>
              </ul>
              <p><b>机关图鉴：</b></p>
              <ul>
                <li><b>弹射板</b>（青色箭头圆盘）：触到即沿箭头方向强力弹射，可飞越断崖</li>
                <li><b>反重力井</b>（青色半透明区）：场内重力强制变为场的方向；<b>方向键在场内是推进脉冲</b>，可微调航向与升力</li>
                <li><b>压力板 + 闸门</b>（琥珀圆盘 / 紫色能量墙）：滚过压力板即永久点亮，集齐后闸门溶解</li>
                <li><b>检查信标</b>（立环）：穿过即激活，此后坠落或触刺都会回到信标处（连重力姿态一起还原）</li>
              </ul>
              <p><b>移动端：</b>左下方向垫 = 倾倒重力（可长按连发），右下 ↺/↻ = 90° 旋转视角、回 = 重力回正；在画面上<b>拖拽可自由环视（含俯仰）</b>，双指捏合缩放。</p>
              <p><b>陀螺仪（实验）：</b>点击顶栏「陀」开启权限后，倾斜手机即可在当前重力基础上连续偏转方向；竖屏横屏自动适配，重新开关可校准基准角。</p>
              <p><b>评价：</b>零死亡且至少 2 星 = 棱镜 S；死亡 ≤ 4 = A；通关 = B。转向数与最短用时单独保存为纪录，破纪录会在结算时庆祝。</p>
            </div>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={() => setHelpOpen(false)}>明白了</button>
            </div>
          </div>
        </div>
      )}

      {paused && !win && screen === 'playing' && (
        <div className="overlay modal-overlay">
          <div className="modal pause-modal">
            <div className="modal-title">已暂停</div>
            <div className="modal-actions column">
              <button className="btn btn-primary" onClick={() => setPaused(false)}>继续</button>
              <button className="btn" onClick={restartLevel}>重开本关</button>
              <button className="btn" onClick={() => { setPaused(false); setSelectOpen(true); }}>选择关卡</button>
              <button className="btn" onClick={goTitle}>回到标题</button>
            </div>
          </div>
        </div>
      )}

      {win && (
        <div className="overlay modal-overlay">
          {Array.from({ length: 18 }).map((_, i) => (
            <i key={i} className={'confetti c' + (i % 6)} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 9) * 0.12}s` }} />
          ))}
          <div className="modal win-modal">
            {win.newRecord && <div className="record-badge">新纪录！</div>}
            <div className={'rating rating-' + win.rating}>{win.rating}</div>
            <div className="win-title">{win.level === LEVELS.length - 1 ? '全部通关！' : '关卡完成'}</div>
            <div className="win-stars">
              {[0, 1, 2].map((i) => (
                <span key={i} className={i < win.stars ? 'got' : ''}>★</span>
              ))}
            </div>
            <div className="win-stats">
              <div><i>转向</i><b>{win.rotations}</b></div>
              <div><i>用时</i><b>{fmtTime(win.time)}</b></div>
              <div><i>坠落</i><b>{win.deaths}</b></div>
            </div>
            <div className="win-tip">零死亡 + 2 星 = S · 坠落 ≤ 4 = A</div>
            <div className="modal-actions">
              <button className="btn" onClick={() => startLevel(win.level)}>重玩</button>
              {win.level < LEVELS.length - 1 ? (
                <button className="btn btn-primary" onClick={() => startLevel(win.level + 1)}>下一关</button>
              ) : (
                <button className="btn btn-primary" onClick={() => { setWin(null); setSelectOpen(true); }}>选关</button>
              )}
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}

      {webglFailed && (
        <div className="overlay modal-overlay">
          <div className="modal">
            <div className="modal-title">无法启动</div>
            <p className="help-body">当前浏览器不支持 WebGL，请更换较新的浏览器（Chrome / Edge / Safari / Firefox 均可）。</p>
          </div>
        </div>
      )}
    </div>
  );
}
