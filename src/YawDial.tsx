import { useEffect, useRef } from 'react';
import type { Game } from './game/engine';

/**
 * 旋转转盘（对标 2D 版引力罗盘的「可视化 + 可操控」理念）：
 *  - 实时显示当前相机环视偏移角（指针 + 度数读数）
 *  - 按住拖动 = 相对式转盘（jog dial）：拖多少转多少，不打断视角，1:1 跟手
 *  - 滚轮悬停微调（桌面端）
 * 显示走 rAF 直刷 DOM（ref），零 React 重渲染；拖拽直调 engine.freeYaw（与画布拖拽同一条管线）。
 */
export function YawDial({ gameRef, isTouch }: { gameRef: React.MutableRefObject<Game | null>; isTouch: boolean }) {
  const dialRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGGElement>(null);
  const degRef = useRef<HTMLDivElement>(null);
  const lastAng = useRef<number | null>(null);

  // 60fps 读数直刷：指针旋转角 = 归一化 yawOff（0-359°）
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const g = gameRef.current;
      if (g && needleRef.current && degRef.current) {
        const { yaw } = g.viewAngles();
        const deg = (((yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) * (180 / Math.PI);
        needleRef.current.setAttribute('transform', `rotate(${deg.toFixed(1)} 38 38)`);
        const d = Math.round(deg) % 360;
        degRef.current.textContent = `${d}°`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [gameRef]);

  const angAt = (e: React.PointerEvent) => {
    const r = dialRef.current!.getBoundingClientRect();
    return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2));
  };

  const onDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    lastAng.current = angAt(e);
    // 合成事件/异常场景下 pointerId 无活动指针会抛错——捕获后仍按无捕获模式拖拽
    try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const onMove = (e: React.PointerEvent) => {
    if (lastAng.current == null) return;
    e.preventDefault();
    e.stopPropagation();
    const a = angAt(e);
    let d = a - lastAng.current;
    if (d > Math.PI) d -= Math.PI * 2;
    else if (d < -Math.PI) d += Math.PI * 2;
    lastAng.current = a;
    gameRef.current?.freeYaw(d);
  };
  const onUp = (e: React.PointerEvent) => {
    lastAng.current = null;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    gameRef.current?.freeYaw(e.deltaY * 0.002);
  };

  // 刻度：每 30° 一根，正交方向（0/90/180/270）加粗加亮
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    const major = i % 3 === 0;
    const r0 = major ? 26.5 : 29.5;
    const r1 = 33.5;
    return (
      <line
        key={i}
        className={major ? 'yd-tick maj' : 'yd-tick'}
        x1={38 + r0 * Math.sin(a)} y1={38 - r0 * Math.cos(a)}
        x2={38 + r1 * Math.sin(a)} y2={38 - r1 * Math.cos(a)}
      />
    );
  });

  return (
    <div
      ref={dialRef}
      className={'yaw-dial' + (isTouch ? ' on-touch' : '')}
      title="旋转转盘：显示当前视角旋转角度 · 按住拖动平滑环视 · 滚轮微调"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onWheel={onWheel}
    >
      <svg viewBox="0 0 76 76">
        <circle cx="38" cy="38" r="34.5" className="yd-ring" />
        {ticks}
        <g ref={needleRef}>
          <path d="M38 11 L42.5 24 L38 21.5 L33.5 24 Z" className="yd-needle" />
        </g>
        <circle cx="38" cy="38" r="3" className="yd-hub" />
      </svg>
      <div ref={degRef} className="yd-deg">0°</div>
    </div>
  );
}
