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
}
