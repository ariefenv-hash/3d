/** 极简 WebAudio 合成音效（无外部资源依赖） */
export class Sfx {
  private ctx: AudioContext | null = null;
  muted = false;

  private ensure(): AudioContext | null {
    if (this.muted) return null;
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AC();
      }
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return this.ctx;
    } catch {
      return null;
    }
  }

  unlock() {
    this.ensure();
  }

  private tone(freq: number, dur: number, type: OscillatorType = 'sine', gain = 0.12, slideTo?: number, delay = 0) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(30, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  rotate() {
    this.tone(320, 0.09, 'triangle', 0.09, 430);
  }
  land() {
    this.tone(110, 0.06, 'sine', 0.1, 78);
  }
  star() {
    this.tone(880, 0.1, 'sine', 0.13);
    this.tone(1318, 0.14, 'sine', 0.11, undefined, 0.08);
  }
  win() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.16, 'triangle', 0.12, undefined, i * 0.11));
  }
  die() {
    this.tone(220, 0.35, 'sawtooth', 0.12, 60);
  }
  click() {
    this.tone(660, 0.05, 'square', 0.05);
  }
  /** 弹射板：弹簧上扬 */
  bumper() {
    this.tone(240, 0.18, 'square', 0.1, 720);
    this.tone(480, 0.12, 'sine', 0.08, 960, 0.04);
  }
  /** 进入反重力场：气场上扬 */
  field() {
    this.tone(300, 0.3, 'sine', 0.07, 900);
  }
  /** 场内推进脉冲：短促气流 */
  thrust() {
    this.tone(500, 0.06, 'sine', 0.05, 700);
  }
  /** 压力板激活：双音确认 */
  plate() {
    this.tone(660, 0.09, 'triangle', 0.11);
    this.tone(880, 0.14, 'triangle', 0.1, undefined, 0.09);
  }
  /** 闸门溶解：低鸣+闪灼 */
  gate() {
    this.tone(180, 0.42, 'sawtooth', 0.09, 50);
    this.tone(720, 0.26, 'sine', 0.07, 1180, 0.06);
  }
  /** 检查信标：温暖琶音 */
  checkpoint() {
    this.tone(523, 0.1, 'sine', 0.1);
    this.tone(784, 0.16, 'sine', 0.1, undefined, 0.09);
  }
  /** 引力转换球：反向滑音（升→降的反转感） */
  orb() {
    this.tone(700, 0.22, 'sine', 0.11, 240);
    this.tone(350, 0.16, 'triangle', 0.08, 900, 0.06);
  }
  /** 时序闸门开启：轻快短音 */
  gateOpen() {
    this.tone(520, 0.08, 'sine', 0.07, 860);
  }
  /** 时序闸门关闭：低沉警示 */
  gateShut() {
    this.tone(200, 0.16, 'sawtooth', 0.08, 90);
  }
}
