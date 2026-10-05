export interface BoxDef {
  /** 盒子中心 */
  p: [number, number, number];
  /** 盒子尺寸 */
  s: [number, number, number];
  /** 危险盒（碰到即重生） */
  hazard?: boolean;
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

/** 闸门：紫色能量栅栏，激活压力板数量 >= need 时溶解打开 */
export interface GateDef {
  p: [number, number, number];
  s: [number, number, number];
  need?: number;
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
  };
  boxes: BoxDef[];
  /** 恰好 3 颗星 */
  stars: [number, number, number][];
  fields?: FieldDef[];
  plates?: PlateDef[];
  gates?: GateDef[];
  bumpers?: BumperDef[];
  checkpoints?: CheckpointDef[];
}
