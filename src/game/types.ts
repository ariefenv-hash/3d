export interface BoxDef {
  /** 盒子中心 */
  p: [number, number, number];
  /** 盒子尺寸 */
  s: [number, number, number];
  /** 危险盒（碰到即重生） */
  hazard?: boolean;
  /** 运动学平台：沿 axis 在 ±range 内正弦往复（周期 period 秒，phase 0-1）；会载着球一起走 */
  move?: {
    axis: [number, number, number];
    range: number;
    period: number;
    phase?: number;
  };
}

/** 反重力场：球心进入区域内时，重力强制变为 dir 方向；离开后恢复进入前的方向 */
export interface FieldDef {
  p: [number, number, number];
  s: [number, number, number];
  dir: [number, number, number];
}

/** 压力板：球靠近即永久激活（琥珀圆盘）；n 为盘面朝向 */
export interface PlateDef {
  p: [number, number, number];
  n?: [number, number, number];
}

/** 闸门：紫色能量栅栏。两种模式二选一：
 *  - need：激活压力板数量 >= need 时永久溶解；
 *  - timing：按周期自动开合（period 秒一循环，前 duty 比例开启），相位 phase 0-1 */
export interface GateDef {
  p: [number, number, number];
  s: [number, number, number];
  need?: number;
  timing?: { period: number; duty?: number; phase?: number };
}

/** 引力转换球：球触到即把当前重力 180° 反转（升天/落地转换器），冷却 1.2s 防连触 */
export interface OrbDef {
  p: [number, number, number];
}

/** 弹射板：球触到即沿 n 方向强力弹射（power 默认 13.5） */
export interface BumperDef {
  p: [number, number, number];
  n: [number, number, number];
  power?: number;
}

/** 检查信标：穿过即激活，此后死亡回到信标处（含当时的重力与镜头姿态） */
export interface CheckpointDef {
  p: [number, number, number];
}

export interface LevelDef {
  name: string;
  hint: string;
  /** 参考转向数（仅展示用，不参与评级） */
  par: number;
  spawn: [number, number, number];
  portal: {
    p: [number, number, number];
    /** 朝向法线（仅视觉） */
    n: [number, number, number];
    /** 捕获半径（默认 1.5；悬挂入portal的关卡可调大以放宽窗口） */
    r?: number;
  };
  boxes: BoxDef[];
  /** 恰好 3 颗星 */
  stars: [number, number, number][];
  fields?: FieldDef[];
  plates?: PlateDef[];
  gates?: GateDef[];
  bumpers?: BumperDef[];
  checkpoints?: CheckpointDef[];
  orbs?: OrbDef[];
}
