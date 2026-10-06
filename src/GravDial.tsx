import { useEffect, useRef } from 'react';
import type { Game, TipDir } from './game/engine';

/**
 * 重力罗盘（对标 2D 版罗盘「可视化 + 可操控」理念，立体化升级）：
 *  - 显示：当前实际重力（含陀螺仪偏转 / 反重力场）在当前视角下的立体方向——
 *    箭头方位 = 屏幕方位，箭头长短 = 纵深分量（指向屏幕深处收缩成点、朝镜头放大），
 *    纵深环亮度 = |z|；反重力场内箭头变青 + 「场」角标；绿色刻度 = 世界地面方位（与顶栏地面罗盘同源）。
 *  - 操作（放射式 radial jog，比四向连点更防误触）：
 *    按住拖出 → 四象限幽灵箭头实时预览 → 松手提交 = 向该方向倾倒 90°（与方向键同管线，场内自动变推进脉冲）；
 *    拖回中心范围取消；点中心 = 重力回正（等同空格 / 回）。一次手势至多提交一次。
 * 显示走 rAF 直刷 DOM（ref），零 React 重渲染。
 */

const DRAG_COMMIT = 20; // 拖出该距离（px）进入提交预览
const CENTER_R = 15; // 中心回正区半径（px，     widget 内部坐标）

export function GravDial({ gameRef, isTouch }: { gameRef: React.MutableRefObject<Game | null>; isTouch: boolean }) {
  const dialRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const depthRef = useRef<SVGCircleElement>(null);
  const nearRef = useRef<SVGTextElement>(null);
  const farRef = useRef<SVGTextElement>(null);
  const groundRef = useRef<SVGGElement>(null);
  const ghostRef = useRef<SVGGElement>(null);
  const sectorRef = useRef<SVGRectElement>(null);
  const fieldTagRef = useRef<SVGTextElement>(null);
  const startPt = useRef<{ x: number; y: number; cx: number; cy: number } | null>(null);
  const liveSector = useRef<TipDir | null>(null);
  const everArmed = useRef(false); // 本次手势是否拖出过阈值（拖出后回中心 = 取消，而非中心回正）

  // 读数直刷：30fps + 值缓存（全部读数不变时零 DOM 写入——显示件静止时近乎零开销，
  // 避免每帧 setAttribute/字符串分配挤占无头/低端设备的帧预算，导致 dt 钳制仿真时间膨胀）
  useEffect(() => {
    let raf = 0;
    let frame = 0;
    let last = '';
    const tick = () => {
      frame++;
      const g = gameRef.current;
      if (g && arrowRef.current && depthRef.current && groundRef.current && frame % 2 === 0) {
        const r = g.gravReadout();
        // 屏幕方位角（SVG y 向下）：箭头默认朝下，θ = atan2(-sx, -sy)；0° = 朝屏幕正下方（重力日常状态）
        const deg = (Math.atan2(-r.sx, -r.sy) * 180) / Math.PI;
        // 纵深：水平分量占比决定箭头长度/透明度（指向屏幕深处/近处时收缩向中心，立体透视感）
        const horiz = Math.min(1, Math.hypot(r.sx, r.sy));
        const len = 0.3 + 0.7 * horiz;
        const arrowTf = `translate(38 38) rotate(${deg.toFixed(1)}) scale(${len.toFixed(3)}) translate(-38 -38)`;
        const arrowOp = (0.35 + 0.65 * horiz).toFixed(2);
        const depthOp = Math.min(1, Math.abs(r.sz) * 1.4).toFixed(2);
        const deep = Math.abs(r.sz) > 0.55;
        const nearOp = deep && r.sz > 0 ? '1' : '0';
        const farOp = deep && r.sz < 0 ? '1' : '0';
        const key = `${arrowTf}|${arrowOp}|${depthOp}|${r.sz > 0}|${nearOp}|${farOp}|${r.ground}|${r.field}`;
        if (key !== last) {
          last = key;
          arrowRef.current.setAttribute('transform', arrowTf);
          arrowRef.current.setAttribute('opacity', arrowOp);
          // 纵深环：|z| 越大越亮；朝镜头暖色 / 离镜头青色
          depthRef.current.setAttribute('opacity', depthOp);
          depthRef.current.style.stroke = r.sz > 0 ? '#ffb300' : '#3fc1ff';
          // 深 / 近 字符（纵深大时出现）
          if (nearRef.current) nearRef.current.setAttribute('opacity', nearOp);
          if (farRef.current) farRef.current.setAttribute('opacity', farOp);
          // 世界地面刻度（0° = 朝上）
          groundRef.current.setAttribute('transform', `rotate(${r.ground} 38 38)`);
          // 场内态
          if (fieldTagRef.current) fieldTagRef.current.setAttribute('opacity', r.field ? '1' : '0');
          const dial = dialRef.current;
          if (dial) dial.classList.toggle('in-field', r.field);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [gameRef]);

  const sectorOf = (dx: number, dy: number): TipDir => {
    // 屏幕坐标（y 向下）：拖右 → R、拖下 → D、拖左 → L、拖上 → U（与方向键语义一致）
    const a = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (a >= -45 && a < 45) return 'R';
    if (a >= 45 && a < 135) return 'D';
    if (a >= -135 && a < -45) return 'U';
    return 'L';
  };

  const showGhost = (dx: number, dy: number) => {
    // 幽灵箭头跟随拖拽方向（SVG y 向下）：θ = atan2(-dx, dy)
    const deg = (Math.atan2(-dx, dy) * 180) / Math.PI;
    if (ghostRef.current) {
      ghostRef.current.setAttribute('transform', `rotate(${deg.toFixed(1)} 38 38)`);
      ghostRef.current.setAttribute('opacity', '0.9');
    }
    const s = sectorOf(dx, dy);
    liveSector.current = s;
    if (sectorRef.current) {
      sectorRef.current.setAttribute('opacity', s === 'R' ? '1' : '0');
      sectorRef.current.setAttribute('transform', `rotate(${s === 'R' ? 0 : s === 'D' ? 90 : s === 'L' ? 180 : 270} 38 38)`);
    }
  };
  const hideGhost = () => {
    if (ghostRef.current) ghostRef.current.setAttribute('opacity', '0');
    if (sectorRef.current) sectorRef.current.setAttribute('opacity', '0');
    liveSector.current = null;
  };

  const onDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const r = dialRef.current!.getBoundingClientRect();
    startPt.current = { x: e.clientX, y: e.clientY, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
    everArmed.current = false;
    // 合成事件/异常场景下 pointerId 无活动指针会抛错——捕获后仍按无捕获模式拖拽
    try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const onMove = (e: React.PointerEvent) => {
    const s = startPt.current;
    if (!s) return;
    e.preventDefault();
    e.stopPropagation();
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.hypot(dx, dy) >= DRAG_COMMIT) {
      everArmed.current = true;
      showGhost(dx, dy);
    } else hideGhost();
  };
  const onUp = (e: React.PointerEvent) => {
    const s = startPt.current;
    startPt.current = null;
    const sector = liveSector.current; // hideGhost 会清空 liveSector，先取出
    hideGhost();
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch { /* ignore */ }
    const g = gameRef.current;
    if (!g) return;
    if (Math.hypot(dx, dy) >= DRAG_COMMIT && sector) {
      g.tip(sector); // 与方向键同一条管线（场内自动变推进）
      return;
    }
    if (everArmed.current) return; // 拖出过又拖回 = 取消本次倾倒（防误触），不触发回正
    // 未拖出：起止都在中心 → 回正
    const endInCenter = Math.hypot(e.clientX - s.cx, e.clientY - s.cy) <= CENTER_R + 4;
    const startInCenter = Math.hypot(s.x - s.cx, s.y - s.cy) <= CENTER_R + 4;
    if (startInCenter && endInCenter) g.restoreDown();
  };

  return (
    <div
      ref={dialRef}
      className={'grav-dial' + (isTouch ? ' on-touch' : '')}
      title="重力罗盘：实时显示重力立体方向 · 按住往四向拖出并松手=倾倒 90°（拖回中心取消）· 点中心=回正"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <svg viewBox="0 0 76 76">
        <circle cx="38" cy="38" r="34.5" className="gd-ring" />
        {/* 四向扇区提示：拖出方向的提交预览（高亮块，默认隐藏；rect 画在右侧，rotate 复用） */}
        <rect ref={sectorRef} className="gd-sector" x="58" y="30" width="12" height="16" rx="3" opacity="0" />
        {/* 世界地面刻度（绿） */}
        <g ref={groundRef}>
          <line className="gd-ground" x1="38" y1="5.5" x2="38" y2="11.5" />
        </g>
        {/* 纵深环 */}
        <circle ref={depthRef} className="gd-depth" cx="38" cy="38" r="12" opacity="0" />
        {/* 重力箭头（默认朝下 = 屏幕正下方） */}
        <g ref={arrowRef}>
          <path d="M38 51 L33 22 L38 27 L43 22 Z" className="gd-arrow" />
        </g>
        {/* 拖拽幽灵箭头（预览） */}
        <g ref={ghostRef} opacity="0">
          <path d="M38 56 L31 14 L38 21 L45 14 Z" className="gd-ghost" />
        </g>
        {/* 深 / 近 纵深字符 */}
        <text ref={farRef} className="gd-depthtag" x="38" y="16" opacity="0">深</text>
        <text ref={nearRef} className="gd-depthtag" x="38" y="66" opacity="0">近</text>
        {/* 场内角标 */}
        <text ref={fieldTagRef} className="gd-fieldtag" x="60" y="64" opacity="0">场</text>
        {/* 中心回正 */}
        <circle cx="38" cy="38" r="8.5" className="gd-hub" />
        <text className="gd-hubtxt" x="38" y="41.5">回</text>
      </svg>
    </div>
  );
}
