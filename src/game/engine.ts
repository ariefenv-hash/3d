import * as THREE from 'three';
import { LEVELS, levelBounds } from './levels';
import type { LevelDef } from './types';
import { Sfx } from './audio';

export type TipDir = 'L' | 'R' | 'U' | 'D';

export interface Stats {
  time: number;
  rotations: number;
  stars: number;
  starsTotal: number;
}
export interface WinInfo {
  rotations: number;
  time: number;
  stars: number;
}

export interface GameCallbacks {
  onStats: (s: Stats) => void;
  onWin: (w: WinInfo) => void;
  onDeath: () => void;
  onPauseRequest: () => void;
}

const G_MAG = 26;
const BALL_R = 0.42;
const MAX_VEL = 11;
const AIR_DRAG = 0.05;
const RESTITUTION = 0.16;
const BOUNCE_MIN = 2.2;
const WIN_DIST = 1.5;
const STAR_DIST = 1.1;
const OOB_MARGIN = 6;
const CAM_DIST = 8.6;
const STEP = 1 / 120;

interface PhysBox {
  min: THREE.Vector3;
  max: THREE.Vector3;
  hazard: boolean;
  mesh: THREE.Mesh;
}
interface StarFx {
  mesh: THREE.Mesh;
  baseY: number;
  phase: number;
  got: boolean;
}
interface Tween {
  obj: THREE.Object3D;
  t: number;
  dur: number;
  kind: 'star' | 'win';
}

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const D2R = Math.PI / 180;

export class Game {
  webglFailed = false;
  sfx = new Sfx();

  private canvas: HTMLCanvasElement;
  private cb: GameCallbacks;
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private cam: THREE.PerspectiveCamera;

  mode: 'off' | 'attract' | 'play' = 'off';
  private enabled = false;

  private levelIdx = 0;
  private levelGroup: THREE.Group | null = null;
  private boxes: PhysBox[] = [];
  private solidMeshes: THREE.Mesh[] = [];
  private stars: StarFx[] = [];
  private portal: THREE.Group | null = null;
  private spawn = V();
  private boundMin = V();
  private boundMax = V();

  private ball = { pos: V(), vel: V() };
  private ballMesh!: THREE.Mesh;
  private ballLight!: THREE.PointLight;

  private gBase = V(0, -1, 0);
  private gEff = V(0, -1, 0);
  private qTarget = new THREE.Quaternion();
  private camDist = CAM_DIST;

  rotations = 0;
  private time = 0;
  private timerOn = false;
  private finished = false;
  private dead = false;
  private gen = 0;

  private starsGot = 0;
  private starsTotal = 0;

  private acc = 0;
  private lastT = -1;
  private statT = 0;
  private prevContact = false;
  private contactN = V(0, 1, 0);
  private shake = 0;
  private tweens: Tween[] = [];

  // 共享资源
  private geoBox = new THREE.BoxGeometry(1, 1, 1);
  private geoEdge = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
  private geoBall = new THREE.SphereGeometry(BALL_R, 32, 24);
  private geoWire = new THREE.IcosahedronGeometry(BALL_R * 1.06, 1);
  private geoStar = new THREE.OctahedronGeometry(0.32);
  private geoTorus = new THREE.TorusGeometry(1.05, 0.11, 12, 40);
  private geoDisc = new THREE.CircleGeometry(0.95, 32);
  private matSolid = new THREE.MeshStandardMaterial({ color: '#242c42', roughness: 0.85, metalness: 0.08 });
  private matHazard = new THREE.MeshStandardMaterial({ color: '#3a1220', emissive: '#ff2d55', emissiveIntensity: 0.9, roughness: 0.6 });
  private matEdge = new THREE.LineBasicMaterial({ color: '#3fc1ff', transparent: true, opacity: 0.4 });
  private matBall = new THREE.MeshStandardMaterial({ color: '#e8f4ff', roughness: 0.3, metalness: 0.15, emissive: '#1f6f8f', emissiveIntensity: 0.4 });
  private matWire = new THREE.MeshBasicMaterial({ color: '#7fdcff', wireframe: true, transparent: true, opacity: 0.28 });
  private matStarBase = new THREE.MeshStandardMaterial({ color: '#ffd54a', emissive: '#ffb300', emissiveIntensity: 0.85, roughness: 0.35, transparent: true });
  private matTorus = new THREE.MeshStandardMaterial({ color: '#8a5cff', emissive: '#7c4dff', emissiveIntensity: 0.9, roughness: 0.4 });
  private matDisc = new THREE.MeshBasicMaterial({ color: '#b39dff', transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false });

  // 陀螺仪
  private gyroOn = false;
  private gyroActive = false;
  private gyroSeen = false;
  private gyroP = 0;
  private gyroR = 0;
  private gyroP0 = 0;
  private gyroR0 = 0;
  private doeHandler = (e: DeviceOrientationEvent) => this.onDeviceOrientation(e);

  private raycaster = new THREE.Raycaster();
  private ro: ResizeObserver | null = null;

  constructor(canvas: HTMLCanvasElement, cb: GameCallbacks) {
    this.canvas = canvas;
    this.cb = cb;
    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    } catch {
      this.webglFailed = true;
      throw new Error('WebGL init failed');
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.scene.background = new THREE.Color('#05060e');
    this.scene.fog = new THREE.FogExp2(0x05060e, 0.015);

    this.cam = new THREE.PerspectiveCamera(60, 1, 0.1, 220);
    this.cam.position.set(0, 3, 9);

    const hemi = new THREE.HemisphereLight(0x93a7ff, 0x241a3a, 0.85);
    const dir = new THREE.DirectionalLight(0xffffff, 1.0);
    dir.position.set(6, 12, 4);
    this.scene.add(hemi, dir);

    // 球
    this.ballMesh = new THREE.Mesh(this.geoBall, this.matBall);
    const wire = new THREE.Mesh(this.geoWire, this.matWire);
    this.ballMesh.add(wire);
    this.ballLight = new THREE.PointLight(0x66d9ff, 0.9, 7);
    this.ballMesh.add(this.ballLight);
    this.scene.add(this.ballMesh);

    // 星空
    this.scene.add(this.makeStarfield());

    this.bindEvents();
    this.resize();

    // 调试 / 测试钩子
    (window as unknown as Record<string, unknown>).__gt3d = {
      state: () => ({
        pos: this.ball.pos.toArray().map((v) => +v.toFixed(2)),
        vel: +this.ball.vel.length().toFixed(2),
        g: this.gBase.toArray(),
        rot: this.rotations,
        mode: this.mode,
        stars: this.starsGot,
        finished: this.finished,
        dead: this.dead,
        level: this.levelIdx,
      }),
      tip: (d: TipDir) => this.tip(d),
      yaw: (d: number) => this.yaw(d),
      win: () => this.forceWin(),
      gyroSet: (p: number, r: number) => {
        this.gyroP0 = 0;
        this.gyroR0 = 0;
        this.gyroP = p;
        this.gyroR = r;
        this.gyroSeen = true;
        this.gyroActive = true;
      },
    };

    this.renderer.setAnimationLoop(this.loop);
  }

  // ---------- 场景构建 ----------

  private makeStarfield(): THREE.Points {
    const n = 900;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const v = V().randomDirection().multiplyScalar(55 + Math.random() * 40);
      pos[i * 3] = v.x;
      pos[i * 3 + 1] = v.y;
      pos[i * 3 + 2] = v.z;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({ color: 0x9fb8ff, size: 0.6, transparent: true, opacity: 0.75, sizeAttenuation: true, depthWrite: false, fog: false });
    return new THREE.Points(g, m);
  }

  private clearLevel() {
    if (this.levelGroup) {
      this.scene.remove(this.levelGroup);
      this.levelGroup.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.material && (m.material as THREE.Material).dispose && !this.isShared(m.material)) {
          (m.material as THREE.Material).dispose();
        }
      });
      this.levelGroup = null;
    }
    this.boxes = [];
    this.solidMeshes = [];
    this.stars = [];
    this.portal = null;
    this.tweens = [];
  }

  private isShared(mat: THREE.Material | THREE.Material[]): boolean {
    const m = Array.isArray(mat) ? mat[0] : mat;
    return m === this.matSolid || m === this.matHazard || m === this.matTorus || m === this.matDisc;
  }

  private buildLevel(i: number) {
    this.clearLevel();
    const lvl: LevelDef = LEVELS[i];
    this.levelIdx = i;
    const group = new THREE.Group();
    this.levelGroup = group;

    for (const b of lvl.boxes) {
      const mesh = new THREE.Mesh(this.geoBox, b.hazard ? this.matHazard : this.matSolid);
      mesh.position.set(b.p[0], b.p[1], b.p[2]);
      mesh.scale.set(b.s[0], b.s[1], b.s[2]);
      if (!b.hazard) {
        mesh.add(new THREE.LineSegments(this.geoEdge, this.matEdge));
        this.solidMeshes.push(mesh);
      }
      group.add(mesh);
      this.boxes.push({
        min: V(b.p[0] - b.s[0] / 2, b.p[1] - b.s[1] / 2, b.p[2] - b.s[2] / 2),
        max: V(b.p[0] + b.s[0] / 2, b.p[1] + b.s[1] / 2, b.p[2] + b.s[2] / 2),
        hazard: !!b.hazard,
        mesh,
      });
    }

    for (const s of lvl.stars) {
      const mat = this.matStarBase.clone();
      const mesh = new THREE.Mesh(this.geoStar, mat);
      mesh.position.set(s[0], s[1], s[2]);
      group.add(mesh);
      this.stars.push({ mesh, baseY: s[1], phase: Math.random() * Math.PI * 2, got: false });
    }
    this.starsTotal = this.stars.length;
    this.starsGot = 0;

    const portal = new THREE.Group();
    portal.add(new THREE.Mesh(this.geoTorus, this.matTorus));
    portal.add(new THREE.Mesh(this.geoDisc, this.matDisc));
    portal.position.set(lvl.portal.p[0], lvl.portal.p[1], lvl.portal.p[2]);
    const n = V(...lvl.portal.n).normalize();
    portal.quaternion.setFromUnitVectors(V(0, 0, 1), n);
    group.add(portal);
    this.portal = portal;

    const bnd = levelBounds(lvl.boxes);
    this.boundMin.set(bnd.min[0], bnd.min[1], bnd.min[2]);
    this.boundMax.set(bnd.max[0], bnd.max[1], bnd.max[2]);

    this.spawn.set(...lvl.spawn);
    this.ball.pos.copy(this.spawn);
    this.ball.vel.set(0, 0, 0);
    this.scene.add(group);
  }

  // ---------- 对外接口 ----------

  startLevel(i: number) {
    this.gen++;
    this.buildLevel(i);
    this.mode = 'play';
    this.enabled = true;
    this.rotations = 0;
    this.time = 0;
    this.timerOn = false;
    this.finished = false;
    this.dead = false;
    this.prevContact = false;
    this.gBase.set(0, -1, 0);
    this.qTarget.identity();
    this.camDist = CAM_DIST;
    this.gyroSeen = false;
    this.gyroActive = this.gyroOn && this.gyroSeen;
    this.pushStats();
  }

  restart() {
    if (this.mode !== 'play') return;
    this.startLevel(this.levelIdx);
  }

  toAttract() {
    this.gen++;
    this.buildLevel(9);
    this.mode = 'attract';
    this.enabled = false;
    this.gBase.set(0, -1, 0);
    this.qTarget.identity();
  }

  setEnabled(b: boolean) {
    if (this.mode === 'play') this.enabled = b;
  }

  tip(d: TipDir) {
    if (this.mode !== 'play' || !this.enabled || this.finished || this.dead) return;
    const R = V(1, 0, 0).applyQuaternion(this.qTarget);
    const F = V(0, 0, -1).applyQuaternion(this.qTarget);
    if (d === 'R') this.gBase.copy(R);
    else if (d === 'L') this.gBase.copy(R.negate());
    else if (d === 'U') this.gBase.copy(F);
    else this.gBase.copy(F.negate());
    this.refitCamera();
    this.rotations++;
    if (!this.timerOn) this.timerOn = true;
    this.sfx.rotate();
  }

  yaw(dir: number) {
    if (this.mode !== 'play' || !this.enabled || this.finished || this.dead) return;
    const up = V(0, 1, 0).applyQuaternion(this.qTarget);
    this.qTarget.premultiply(new THREE.Quaternion().setFromAxisAngle(up, dir * Math.PI * 0.5));
    this.sfx.rotate();
  }

  freeYaw(angle: number) {
    if (this.mode !== 'play' || !this.enabled) return;
    const up = V(0, 1, 0).applyQuaternion(this.qTarget);
    this.qTarget.premultiply(new THREE.Quaternion().setFromAxisAngle(up, angle));
  }

  enableGyro(on: boolean): boolean {
    if (on) {
      if (typeof window.DeviceOrientationEvent === 'undefined') return false;
      this.gyroOn = true;
      this.gyroSeen = false;
      this.gyroActive = false;
      this.gyroP = 0;
      this.gyroR = 0;
      window.addEventListener('deviceorientation', this.doeHandler);
      return true;
    }
    this.gyroOn = false;
    this.gyroActive = false;
    window.removeEventListener('deviceorientation', this.doeHandler);
    return true;
  }

  gyroIsActive(): boolean {
    return this.gyroActive;
  }

  private onDeviceOrientation(e: DeviceOrientationEvent) {
    if (e.beta == null || e.gamma == null) return;
    const sa = (typeof screen !== 'undefined' && screen.orientation ? screen.orientation.angle : 0) || 0;
    let p: number, r: number;
    switch (sa) {
      case 90: p = e.gamma; r = -e.beta; break;
      case 180: p = -e.beta; r = -e.gamma; break;
      case 270: case -90: p = -e.gamma; r = e.beta; break;
      default: p = e.beta; r = e.gamma;
    }
    if (!this.gyroSeen) {
      this.gyroSeen = true;
      this.gyroActive = this.gyroOn;
      this.gyroP0 = p;
      this.gyroR0 = r;
      this.gyroP = p;
      this.gyroR = r;
      return;
    }
    // 低通滤波
    this.gyroP += (p - this.gyroP) * 0.35;
    this.gyroR += (r - this.gyroR) * 0.35;
  }

  private gyroOffset(x: number): number {
    const a = Math.abs(x);
    const dz = 4, clamp = 32;
    if (a <= dz) return 0;
    return Math.sign(x) * Math.min(clamp, a - dz);
  }

  forceWin() {
    if (this.mode === 'play' && !this.finished) this.win();
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    window.removeEventListener('keydown', this.keyHandler);
    window.removeEventListener('resize', this.resizeHandler);
    if (this.ro) this.ro.disconnect();
    this.enableGyro(false);
    this.renderer.dispose();
    this.mode = 'off';
  }

  // ---------- 输入 ----------

  private keyHandler = (e: KeyboardEvent) => {
    if (this.mode !== 'play' || !this.enabled) return;
    switch (e.key) {
      case 'ArrowLeft': e.preventDefault(); this.tip('L'); break;
      case 'ArrowRight': e.preventDefault(); this.tip('R'); break;
      case 'ArrowUp': e.preventDefault(); this.tip('U'); break;
      case 'ArrowDown': e.preventDefault(); this.tip('D'); break;
      case 'q': case 'Q': case 'a': case 'A': this.yaw(1); break;
      case 'e': case 'E': case 'd': case 'D': this.yaw(-1); break;
      case 'r': case 'R': this.restart(); break;
      case 'Escape': case 'p': case 'P': this.cb.onPauseRequest(); break;
    }
  };

  private dragging = false;
  private lastPX = 0;
  private pdHandler = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || this.mode !== 'play' || !this.enabled) return;
    this.dragging = true;
    this.lastPX = e.clientX;
  };
  private pmHandler = (e: PointerEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastPX;
    this.lastPX = e.clientX;
    if (Math.abs(dx) > 0) this.freeYaw(dx * 0.006);
  };
  private puHandler = () => {
    this.dragging = false;
  };
  private wheelHandler = (e: WheelEvent) => {
    if (this.mode !== 'play') return;
    e.preventDefault();
    this.camDist = THREE.MathUtils.clamp(this.camDist + e.deltaY * 0.004, 5, 13);
  };
  private resizeHandler = () => this.resize();

  private bindEvents() {
    window.addEventListener('keydown', this.keyHandler);
    window.addEventListener('resize', this.resizeHandler);
    this.canvas.addEventListener('pointerdown', this.pdHandler);
    window.addEventListener('pointermove', this.pmHandler);
    window.addEventListener('pointerup', this.puHandler);
    this.canvas.addEventListener('wheel', this.wheelHandler, { passive: false });
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(this.canvas);
    }
  }

  private resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.cam.aspect = w / Math.max(1, h);
    this.cam.updateProjectionMatrix();
  }

  // ---------- 相机 ----------

  /** 依据 gBase 重建目标相机姿态（up=-g，前向最小摆动） */
  private refitCamera() {
    const up = this.gBase.clone().negate();
    const f = V(0, 0, -1).applyQuaternion(this.qTarget);
    let proj = f.clone().addScaledVector(up, -f.dot(up));
    if (proj.lengthSq() < 0.0025) {
      const r = V(1, 0, 0).applyQuaternion(this.qTarget);
      proj = r.clone().addScaledVector(up, -r.dot(up));
    }
    if (proj.lengthSq() < 0.0025) proj = V(1, 0, 0).addScaledVector(up, -up.x);
    if (proj.lengthSq() < 1e-6) proj = V(0, 1, 0).addScaledVector(up, -up.y);
    const f2 = proj.normalize();
    const b = f2.clone().negate();
    const r2 = V().crossVectors(up, b).normalize();
    const m = new THREE.Matrix4().makeBasis(r2, up, b);
    this.qTarget.setFromRotationMatrix(m);
  }

  private updateCamera(dt: number) {
    this.cam.quaternion.slerp(this.qTarget, 1 - Math.exp(-5.5 * dt));
    const desired = V(0, 0, this.camDist).applyQuaternion(this.cam.quaternion).add(this.ball.pos);
    const dirV = desired.clone().sub(this.ball.pos);
    const len = dirV.length();
    dirV.normalize();
    this.raycaster.set(this.ball.pos, dirV);
    this.raycaster.far = len;
    const hits = this.raycaster.intersectObjects(this.solidMeshes, false);
    let d = len;
    if (hits.length) d = Math.max(1.6, hits[0].distance - 0.4);
    this.cam.position.copy(this.ball.pos).addScaledVector(dirV, d);
    if (this.shake > 0.001) {
      this.cam.position.x += (Math.random() - 0.5) * this.shake;
      this.cam.position.y += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.exp(-5 * dt);
    }
  }

  // ---------- 物理 ----------

  private computeG() {
    const dir = V().copy(this.gBase);
    if (this.gyroOn && this.gyroActive) {
      const R = V(1, 0, 0).applyQuaternion(this.qTarget);
      const F = V(0, 0, -1).applyQuaternion(this.qTarget);
      const po = this.gyroOffset(this.gyroP - this.gyroP0);
      const ro = this.gyroOffset(this.gyroR - this.gyroR0);
      if (po) dir.applyAxisAngle(R, -po * D2R);
      if (ro) dir.applyAxisAngle(F, -ro * D2R);
      dir.normalize();
    }
    this.gEff.copy(dir).multiplyScalar(G_MAG);
  }

  private resolveBox(b: PhysBox): boolean {
    const pos = this.ball.pos;
    const cx = THREE.MathUtils.clamp(pos.x, b.min.x, b.max.x);
    const cy = THREE.MathUtils.clamp(pos.y, b.min.y, b.max.y);
    const cz = THREE.MathUtils.clamp(pos.z, b.min.z, b.max.z);
    const dx = pos.x - cx, dy = pos.y - cy, dz = pos.z - cz;
    const d2 = dx * dx + dy * dy + dz * dz;
    if (b.hazard) {
      if (d2 < BALL_R * BALL_R * 0.81) this.die();
      return false;
    }
    if (d2 >= BALL_R * BALL_R) return false;
    let n: THREE.Vector3;
    let push: number;
    if (d2 > 1e-10) {
      const d = Math.sqrt(d2);
      n = V(dx / d, dy / d, dz / d);
      push = BALL_R - d;
    } else {
      // 球心陷入盒内：沿最小穿透轴推出
      const pens: [number, THREE.Vector3][] = [
        [pos.x - b.min.x + BALL_R, V(1, 0, 0)],
        [b.max.x - pos.x + BALL_R, V(-1, 0, 0)],
        [pos.y - b.min.y + BALL_R, V(0, 1, 0)],
        [b.max.y - pos.y + BALL_R, V(0, -1, 0)],
        [pos.z - b.min.z + BALL_R, V(0, 0, 1)],
        [b.max.z - pos.z + BALL_R, V(0, 0, -1)],
      ];
      pens.sort((a, c) => a[0] - c[0]);
      n = pens[0][1];
      push = pens[0][0];
    }
    pos.addScaledVector(n, push);
    const vn = this.ball.vel.dot(n);
    if (vn < 0) {
      if (vn < -BOUNCE_MIN) this.ball.vel.addScaledVector(n, -(1 + RESTITUTION) * vn);
      else this.ball.vel.addScaledVector(n, -vn);
    }
    this.contactN.copy(n);
    return true;
  }

  private step(h: number) {
    const vel = this.ball.vel;
    vel.addScaledVector(this.gEff, h);
    if (vel.length() > MAX_VEL) vel.setLength(MAX_VEL);
    vel.multiplyScalar(1 - Math.min(0.5, AIR_DRAG * h));
    this.ball.pos.addScaledVector(vel, h);

    let contact = false;
    for (let iter = 0; iter < 2; iter++) {
      for (const b of this.boxes) {
        if (this.resolveBox(b)) contact = true;
      }
    }
    if (contact) {
      // 摩擦 = μ·法向压力 + 恒定滚动阻力（侧倾滑行时几乎无摩擦，便于平飞）
      const n = this.contactN;
      const vn = vel.dot(n);
      const vt = vel.clone().addScaledVector(n, -vn);
      const normalForce = Math.max(0, -this.gEff.dot(n));
      const decel = normalForce * 0.35 + 1.2;
      const spd = vt.length();
      if (spd > 1e-4) vt.setLength(Math.max(0, spd - decel * h));
      vel.copy(vt).addScaledVector(n, vn);
      if (!this.prevContact && vn < -BOUNCE_MIN) this.sfx.land();
    }
    this.prevContact = contact;
  }

  private checkPickups() {
    const p = this.ball.pos;
    if (
      p.x < this.boundMin.x - OOB_MARGIN || p.x > this.boundMax.x + OOB_MARGIN ||
      p.y < this.boundMin.y - OOB_MARGIN || p.y > this.boundMax.y + OOB_MARGIN ||
      p.z < this.boundMin.z - OOB_MARGIN || p.z > this.boundMax.z + OOB_MARGIN
    ) {
      this.die();
      return;
    }
    for (const s of this.stars) {
      if (!s.got && s.mesh.position.distanceTo(p) < STAR_DIST) {
        s.got = true;
        this.starsGot++;
        this.sfx.star();
        this.tweens.push({ obj: s.mesh, t: 0, dur: 0.45, kind: 'star' });
      }
    }
    if (this.portal && this.portal.position.distanceTo(p) < WIN_DIST) this.win();
  }

  private die() {
    if (this.dead || this.finished) return;
    this.dead = true;
    this.shake = 0.35;
    this.sfx.die();
    this.cb.onDeath();
    const g = ++this.gen;
    window.setTimeout(() => {
      if (g !== this.gen || this.mode !== 'play') return;
      this.ball.pos.copy(this.spawn);
      this.ball.vel.set(0, 0, 0);
      this.gBase.set(0, -1, 0);
      this.qTarget.identity();
      this.dead = false;
    }, 500);
  }

  private win() {
    this.finished = true;
    this.enabled = false;
    this.timerOn = false;
    this.sfx.win();
    if (this.portal) this.tweens.push({ obj: this.portal, t: 0, dur: 0.8, kind: 'win' });
    const g = ++this.gen;
    window.setTimeout(() => {
      if (g !== this.gen) return;
      this.cb.onWin({ rotations: this.rotations, time: this.time, stars: this.starsGot });
    }, 800);
  }

  private pushStats() {
    this.cb.onStats({ time: this.time, rotations: this.rotations, stars: this.starsGot, starsTotal: this.starsTotal });
  }

  // ---------- 主循环 ----------

  private loop = (tMs: number) => {
    if (this.mode === 'off') return;
    const t = tMs / 1000;
    if (this.lastT < 0) this.lastT = t;
    const dt = Math.min(0.05, Math.max(0.0001, t - this.lastT));
    this.lastT = t;

    if (this.mode === 'play' && this.timerOn && !this.finished && !this.dead) this.time += dt;
    if (this.mode === 'attract') {
      this.qTarget.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), 0.1 * dt));
    }

    this.computeG();
    if (!this.finished && !this.dead) {
      this.acc = Math.min(this.acc + dt, 0.08);
      while (this.acc >= STEP) {
        this.step(STEP);
        this.acc -= STEP;
      }
    }
    if (this.mode === 'play' && !this.dead && !this.finished) this.checkPickups();

    // 球位置 + 滚动
    this.ballMesh.position.copy(this.ball.pos);
    const sp = this.ball.vel.length();
    if (sp > 0.05) {
      const n = this.gEff.clone().negate();
      const axis = V().crossVectors(n, this.ball.vel);
      if (axis.lengthSq() > 1e-6) {
        axis.normalize();
        this.ballMesh.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(axis, (sp * dt) / BALL_R));
      }
    }

    this.updateCamera(dt);

    // 动画
    if (this.portal) this.portal.rotation.z += dt * 0.8;
    for (const s of this.stars) {
      if (s.got) continue;
      s.mesh.rotation.y += dt * 1.6;
      s.mesh.position.y = s.baseY + Math.sin(t * 2 + s.phase) * 0.12;
    }
    this.matHazard.emissiveIntensity = 0.75 + 0.3 * Math.sin(t * 3.2);
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t += dt;
      const k = tw.t / tw.dur;
      if (tw.kind === 'star') {
        tw.obj.scale.setScalar(1 + k * 2.2);
        const m = (tw.obj as THREE.Mesh).material as THREE.Material;
        m.opacity = Math.max(0, 1 - k);
        m.transparent = true;
        if (k >= 1) {
          tw.obj.visible = false;
          this.tweens.splice(i, 1);
        }
      } else {
        tw.obj.scale.setScalar(1 + Math.sin(Math.min(1, k) * Math.PI) * 0.5);
        if (k >= 1) {
          tw.obj.scale.setScalar(1);
          this.tweens.splice(i, 1);
        }
      }
    }

    this.statT += dt;
    if (this.mode === 'play' && this.statT > 0.15) {
      this.statT = 0;
      this.pushStats();
    }

    this.renderer.render(this.scene, this.cam);
  };
}
