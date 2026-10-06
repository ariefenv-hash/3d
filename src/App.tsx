import { useCallback, useEffect, useRef, useState } from 'react';
import { Game } from './game/engine';
import type { Stats, TipDir, WinInfo } from './game/engine';
import { YawDial } from './YawDial';
import { GravDial } from './GravDial';
import { LEVELS } from './game/levels';
import { buildShareText, loadDailyState, pickDailyLevels, registerDailyComplete, todayKey } from './game/daily';
import type { DailyRating, DailyState } from './game/daily';

const SAVE_KEY = 'gt3d.progress.v2';
const MUTE_KEY = 'gt3d.muted.v1';

/** 每日挑战运行态：三关队列 + 当前进度 + 已获评级（内存态，完成/退出即释放） */
interface DailyRun { dateKey: string; levels: number[]; pos: number; ratings: DailyRating[] }

function fallbackCopy(text: string): void {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;top:-999px;left:-999px;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch { /* ignore */ }
  document.body.removeChild(ta);
}

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
  /** 每日挑战运行中：当前是第几关（0 起）——结算按钮切每日语义 */
  dailyPos?: number;
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
  const [dailyRun, setDailyRunRaw] = useState<DailyRun | null>(null);
  const dailyRunRef = useRef<DailyRun | null>(null);
  const [dailyOpen, setDailyOpen] = useState(false);
  const [dailyReport, setDailyReport] = useState<{ dateKey: string; ratings: DailyRating[]; streak: number } | null>(null);
  const [dailySave, setDailySave] = useState<DailyState>(() => loadDailyState());

  /** ref 与 state 同步更新：onWin 闭包只认 ref，UI 渲染读 state */
  const applyDaily = useCallback((r: DailyRun | null) => {
    dailyRunRef.current = r;
    setDailyRunRaw(r);
  }, []);

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
          // 每日挑战运行中：不写战役存档（unlocked/best 冻结），评级记入每日战绩后进下一关
          const dr = dailyRunRef.current;
          if (dr) {
            const rating = ratingOf(w.deaths, w.stars);
            const ratings = dr.ratings.slice(0, dr.pos);
            ratings.push(rating);
            const next: DailyRun = { ...dr, ratings };
            dailyRunRef.current = next;
            setDailyRunRaw(next);
            setWin({ ...w, rating, newRecord: false, level: dr.levels[dr.pos], dailyPos: dr.pos });
            return;
          }
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
    applyDaily(null); // 进入战役关卡即退出每日运行
    levelIdxRef.current = i;
    setLevelIdx(i);
    setWin(null);
    setPaused(false);
    setSelectOpen(false);
    setScreen('playing');
    g.startLevel(i);
    showHint(LEVELS[i].hint);
  }, [showHint, applyDaily]);

  // ---------------- 每日挑战 ----------------

  /** 进入每日队列的某一关（不走 startLevel，避免清掉每日运行态） */
  const beginDailyPos = useCallback((run: DailyRun) => {
    const g = gameRef.current;
    if (!g) return;
    const li = run.levels[run.pos];
    levelIdxRef.current = li;
    setLevelIdx(li);
    setWin(null);
    setPaused(false);
    setSelectOpen(false);
    setScreen('playing');
    g.startLevel(li);
    showHint(LEVELS[li].hint);
  }, [showHint]);

  const startDailyRun = useCallback(() => {
    const dateKey = todayKey();
    const run: DailyRun = { dateKey, levels: pickDailyLevels(dateKey), pos: 0, ratings: [] };
    applyDaily(run);
    setDailyOpen(false);
    setDailyReport(null);
    beginDailyPos(run);
  }, [applyDaily, beginDailyPos]);

  /** 结算面板「下一关/完成挑战」：推进每日队列；末关完成则登记连胜并弹战报 */
  const advanceDaily = useCallback(() => {
    const run = dailyRunRef.current;
    if (!run) return;
    if (run.pos + 1 < run.levels.length) {
      const next: DailyRun = { ...run, pos: run.pos + 1 };
      applyDaily(next);
      beginDailyPos(next);
      return;
    }
    const st = registerDailyComplete(run.dateKey, run.ratings);
    applyDaily(null);
    setWin(null);
    setDailySave(st);
    setDailyReport({ dateKey: run.dateKey, ratings: run.ratings, streak: st.streak });
    setScreen('title');
    gameRef.current?.toAttract();
  }, [applyDaily, beginDailyPos]);

  /** 中途退出每日运行（已完成的各关评级不保留——当日从头再来） */
  const exitDaily = useCallback(() => {
    applyDaily(null);
    setWin(null);
    setPaused(false);
    setSelectOpen(false);
    setScreen('title');
    gameRef.current?.toAttract();
  }, [applyDaily]);

  const copyDailyReport = useCallback(() => {
    const rep = dailyReport;
    if (!rep) return;
    const text = buildShareText(rep.dateKey, rep.ratings, rep.streak);
    const done = () => showToast('战报已复制，去分享吧');
    const nav = navigator as Navigator & { clipboard?: { writeText?: (t: string) => Promise<void> } };
    if (nav.clipboard?.writeText) nav.clipboard.writeText(text).then(done, () => { fallbackCopy(text); done(); });
    else { fallbackCopy(text); done(); }
  }, [dailyReport, showToast]);

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
    applyDaily(null); // 回到标题 = 放弃当日运行
    setPaused(false);
    setWin(null);
    setSelectOpen(false);
    setScreen('title');
    g.toAttract();
  }, [applyDaily]);

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
          <p className="title-desc">六向重力解谜：倾倒重力让球滚动、平飞、坠落；空格随时回正向下，地面罗盘永不迷路。弹射板、反重力井、压力闸门、检查信标、时序闸门、悬浮平台、引力转换球——七种机关，十六关引力矩阵等你贯穿。连按两次 ←/→ 可反转重力。</p>
          <div className="title-actions">
            <button className="btn btn-primary" onClick={() => startLevel(Math.min(progress.unlocked, LEVELS.length) - 1)}>
              {progress.unlocked > 1 ? '继续游戏' : '开始游戏'}
            </button>
            <button className="btn" onClick={() => setSelectOpen(true)}>选择关卡</button>
            <button className="btn btn-daily" onClick={() => { setDailySave(loadDailyState()); setDailyOpen(true); }}>
              每日挑战{dailySave.streak > 0 ? ` · 连胜 ${dailySave.streak}` : ''}{dailySave.lastCompleted === todayKey() ? ' · 今日已完成' : ''}
            </button>
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
          {dailyRun && (
            <div className="daily-banner">
              <span className="db-label">每日</span>
              <span className="db-dots">
                {dailyRun.levels.map((li, i) => {
                  const r = dailyRun.ratings[i];
                  return <i key={i} className={'db-dot' + (r ? ' r-' + r : i === dailyRun.pos ? ' cur' : '')}>{r ?? (i === dailyRun.pos ? '▶' : '·')}</i>;
                })}
              </span>
              <span className="db-pos">{dailyRun.pos + 1} / {dailyRun.levels.length}</span>
              <button className="db-exit" onClick={exitDaily}>退出</button>
            </div>
          )}
          {hint && <div className="hint-banner" onClick={() => setHint('')}>{hint}</div>}
          {!isTouch && <div className="key-hints">↑ ↓ ← → 倾倒重力 · 空格 回正向下 · 右下重力罗盘 拖拽倾倒 · Q/E 90°旋转 · 拖拽 / 转盘 平滑环视 · 滚轮缩放 · R 重开 · Esc 暂停/恢复</div>}
          {isTouch && TouchPads}
          <YawDial gameRef={gameRef} isTouch={isTouch} />
          <GravDial gameRef={gameRef} isTouch={isTouch} />
        </>
      )}

      {dailyOpen && (
        <div className="overlay modal-overlay" onClick={() => setDailyOpen(false)}>
          <div className="modal daily-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">每日挑战</div>
            <div className="daily-date">{todayKey()} · 三关连续挑战</div>
            <div className="daily-stats">
              <div><i>当前连胜</i><b>{dailySave.streak}</b></div>
              <div><i>最佳连胜</i><b>{dailySave.bestStreak}</b></div>
              <div><i>累计完成</i><b>{dailySave.totalCompletes}</b></div>
            </div>
            <div className="daily-levels">
              {pickDailyLevels(todayKey()).map((li, i) => {
                const r = dailySave.history[todayKey()]?.[i];
                return (
                  <div key={li} className="daily-level-row">
                    <span className="dl-idx">{i + 1}</span>
                    <span className="dl-name">第 {li + 1} 关 · {LEVELS[li].name}</span>
                    <span className={'dl-rating' + (r ? ' got r-' + r : '')}>{r ?? '待挑战'}</span>
                  </div>
                );
              })}
            </div>
            <div className="daily-note">每日 0 点刷新 · 全设备同一关卡 · 战役进度不受影响</div>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={startDailyRun}>
                {dailySave.lastCompleted === todayKey() ? '再刷一遍' : '开始挑战'}
              </button>
              <button className="btn" onClick={() => setDailyOpen(false)}>返回</button>
            </div>
          </div>
        </div>
      )}

      {dailyReport && (
        <div className="overlay modal-overlay">
          {Array.from({ length: 18 }).map((_, i) => (
            <i key={i} className={'confetti c' + (i % 6)} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 9) * 0.12}s` }} />
          ))}
          <div className="modal win-modal daily-report-modal">
            <div className="modal-title">每日挑战完成</div>
            <div className="report-chips">
              {dailyReport.ratings.map((r, i) => <span key={i} className={'report-chip r-' + r}>{r}</span>)}
            </div>
            <div className="report-streak">连胜 {dailyReport.streak} 天{dailyReport.streak >= 3 ? ' · 势不可挡' : ''}</div>
            <div className="report-note">战报已生成——复制后发给好友，对照同一组关卡与评级</div>
            <div className="modal-actions">
              <button className="btn" onClick={copyDailyReport}>复制战报</button>
              <button className="btn btn-primary" onClick={() => setDailyReport(null)}>收下</button>
            </div>
          </div>
        </div>
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
                <li><b>右下重力罗盘：</b>琥珀色箭头实时显示重力在当前视角下的立体方向（箭头收缩=指向屏幕深处/近处，青色=反重力场内）；按住往四向拖出并松手=向该方向倾倒 90°，拖回中心取消，点中心=回正</li>
                <li>顶栏<b>地面罗盘</b>箭头始终指向世界地面在屏幕上的方位——镜头翻滚后一眼找到「下」在哪</li>
                <li>Q / E：90° 旋转视角；<b>在画面上按住拖拽可自由环视</b>（上下拖动=俯视 / 仰视）；<b>右下旋转转盘</b>实时显示旋转角度，按住拖动 / 滚轮可平滑环视微调；滚轮或双指捏合缩放</li>
                <li><b>穿墙透视：</b>墙壁挡住小球与镜头时会自动变半透明，任何角度都不会丢失视野</li>
                <li>R 重开；Esc 暂停 / 再按恢复</li>
              </ul>
              <p><b>机关图鉴：</b></p>
              <ul>
                <li><b>弹射板</b>（青色箭头圆盘）：触到即沿箭头方向强力弹射，可飞越断崖</li>
                <li><b>反重力井</b>（青色半透明区）：场内重力强制变为场的方向；<b>方向键在场内是推进脉冲</b>，可微调航向与升力</li>
                <li><b>压力板 + 闸门</b>（琥珀圆盘 / 紫色能量墙）：滚过压力板即永久点亮，集齐后闸门溶解</li>
                <li><b>时序闸门</b>（红紫⇌青色能量墙）：按周期自动开合，青色=通行、红光闪烁=即将关闭；球在门内时绝不会夹伤你</li>
                <li><b>悬浮平台</b>（深色棱线平台）：沿轴线往复巡航，站上去会被载着走——看准它靠岸的时机</li>
                <li><b>引力转换球</b>（品红球+光环）：触碰即把当前重力 180° 反转——弹射板腾空后穿过它可被直送穹顶，迎面撞上它会被原路弹回</li>
                <li><b>检查信标</b>（立环）：穿过即激活，此后坠落或触刺都会回到信标处（连重力姿态一起还原）</li>
              </ul>
              <p><b>移动端：</b>左下方向垫 = 倾倒重力（可长按连发），右下 ↺/↻ = 90° 旋转视角、回 = 重力回正；右下<b>重力罗盘</b>按住往四向拖出松手即可倾倒重力（点中心回正），<b>旋转转盘</b>按住拖动可平滑环视；在画面上<b>拖拽可自由环视（含俯仰）</b>，双指捏合缩放。</p>
              <p><b>陀螺仪（实验）：</b>点击顶栏「陀」开启权限后，倾斜手机即可在当前重力基础上连续偏转方向；竖屏横屏自动适配，重新开关可校准基准角。</p>
              <p><b>评价：</b>零死亡且至少 2 星 = 棱镜 S；死亡 ≤ 4 = A；通关 = B。转向数与最短用时单独保存为纪录，破纪录会在结算时庆祝。</p>
              <p><b>每日挑战：</b>标题页入口——每天 0 点全设备刷新同一组 3 关，连续闯关累计连胜，完成后可复制 Wordle 式战报分享；挑战不影响战役进度与评级存档。</p>
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
              <button className="btn" onClick={() => { setPaused(false); applyDaily(null); setSelectOpen(true); }}>选择关卡</button>
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
            <div className="win-title">
              {win.dailyPos != null
                ? `每日挑战 ${win.dailyPos + 1} / ${dailyRun?.levels.length ?? 3}`
                : win.level === LEVELS.length - 1 ? '全部通关！' : '关卡完成'}
            </div>
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
              {win.dailyPos != null && dailyRun ? (
                <>
                  <button className="btn" onClick={() => beginDailyPos(dailyRun)}>重玩</button>
                  <button className="btn btn-primary" onClick={advanceDaily}>
                    {dailyRun.pos + 1 < dailyRun.levels.length ? '下一关' : '完成挑战'}
                  </button>
                </>
              ) : (
                <>
                  <button className="btn" onClick={() => startLevel(win.level)}>重玩</button>
                  {win.level < LEVELS.length - 1 ? (
                    <button className="btn btn-primary" onClick={() => startLevel(win.level + 1)}>下一关</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => { setWin(null); setSelectOpen(true); }}>选关</button>
                  )}
                </>
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
