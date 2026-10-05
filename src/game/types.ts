export interface BoxDef {
  /** 盒子中心 */
  p: [number, number, number];
  /** 盒子尺寸 */
  s: [number, number, number];
  /** 危险盒（碰到即重生） */
  hazard?: boolean;
}

export interface LevelDef {
  name: string;
  hint: string;
  /** S 评价所需转向数 */
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
}
