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
  deaths: number;
  /** 重力方向在屏幕上的角度（deg，0=指向屏幕右，顺时针）；HUD 罗盘用 */
  gAngle: number;
}
export interface WinInfo {
  rotations: number;
  time: number;
  stars: number;
  deaths: number;
}

export type DeathReason = 'fall' | 'hazard';

export interface GameCallbacks {
  onStats: (s: Stats) => void;
  onWin: (w: WinInfo) => void;
  onDeath: (reason: DeathReason) => void;
  onPauseRequest: () => void;
}

const G_MAG = 26;
const BALL_R = 0.42;
const MAX_VEL = 11;
const BOOST_VEL = 19;
const AIR_DRAG = 0.05;
const RESTITUTION = 0.16;
const BOUNCE_MIN = 2.2;
const WIN_DIST = 1.5;
const STAR_DIST = 1.1;
const OOB_MARGIN = 6;
const CAM_DIST = 8.6;
const STEP = 1 / 120;
const PLATE_DIST = 1.15;
const BUMPER_DIST = 1.05;
const CHECKPOINT_DIST = 1.5;
const ORB_DIST = 1.15;
const ORB_CD = 1.2;

interface GateState {
  need: number;
  opened: boolean;
  animT: number;
  mesh: THREE.Mesh;
  /** 时序闸门：按周期自动开合（opened 随周期翻转；无溶解动画） */
  timing?: { period: number; duty: number; phase: number };
}
interface PhysBox {
  min: THREE.Vector3;
  max: THREE.Vector3;
  hazard: boolean;
  mesh: THREE.Mesh;
  gate?: GateState;
  move?: MoveState;
  /** 球本子步是否与盒接触 / 上一子步是否接触（运动平台载球用） */
  touchedCur?: boolean;
  touchedPrev?: boolean;
}
/** 运动平台运行状态：沿轴正弦往复，每子步平移碰撞盒并携球同行 */
interface MoveState {
  base: THREE.Vector3;
  axis: THREE.Vector3;
  range: number;
  period: number;
  phase: number;
  prev: THREE.Vector3;
  delta: THREE.Vector3;
}
interface OrbFx {
  pos: THREE.Vector3;
  cd: number;
  mesh: THREE.Mesh;
  ring: THREE.Mesh;
}
interface FieldZone {
  min: THREE.Vector3;
  max: THREE.Vector3;
  dir: THREE.Vector3;
  mesh: THREE.Mesh;
}
interface PlateFx {
  pos: THREE.Vector3;
  active: boolean;
  mat: THREE.MeshStandardMaterial;
}
interface BumperFx {
  pos: THREE.Vector3;
  n: THREE.Vector3;
  power: number;
  cd: number;
  disc: THREE.Mesh;
}
interface CheckpointFx {
  pos: THREE.Vector3;
  active: boolean;
  mat: THREE.MeshStandardMaterial;
}
interface SavedCheckpoint {
  pos: THREE.Vector3;
  gBase: THREE.Vector3;
  qBase: THREE.Quaternion;
  yawOff: number;
  pitchOff: number;
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
/** 每面墙独立淡化状态（穿墙透视） */
interface FadeInfo {
  mat: THREE.MeshStandardMaterial;
  edgeMat: THREE.LineBasicMaterial | null;
  base: number;
  baseEdge: number;
  cur: number;
  occl: boolean;
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
  private portalR = WIN_DIST;
  private spawn = V();
  private boundMin = V();
  private boundMax = V();

  private fields: FieldZone[] = [];
  private plates: PlateFx[] = [];
  private bumpers: BumperFx[] = [];
  private checkpoints: CheckpointFx[] = [];
  private orbs: OrbFx[] = [];
  private curField: FieldZone | null = null;
  private checkpoint: SavedCheckpoint | null = null;
  deaths = 0;
  private boostT = 0;
  private activePlates = 0;
  /** 运动/时序机关共享的关卡时钟（仅在物理子步内推进） */
  private moveT = 0;

  private ball = { pos: V(), vel: V() };
  private ballMesh!: THREE.Mesh;
  private ballLight!: THREE.PointLight;

  private gBase = V(0, -1, 0);
  private gEff = V(0, -1, 0);
  /** 由重力推导的基准姿态（up=-g）；玩家视角偏移叠加在其上 */
  private qBase = new THREE.Quaternion();
  private yawOff = 0;
  private pitchOff = 0;
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
  private geoPlate = new THREE.CylinderGeometry(0.55, 0.68, 0.14, 28);
  private geoRing = new THREE.TorusGeometry(0.55, 0.075, 10, 32);
  private geoCone = new THREE.ConeGeometry(0.3, 0.55, 16);
  private geoBump = new THREE.CylinderGeometry(0.62, 0.75, 0.2, 28);
  private geoOrb = new THREE.SphereGeometry(0.3, 20, 16);
  private geoOrbRing = new THREE.TorusGeometry(0.52, 0.045, 8, 32);
  private matSolid = new THREE.MeshStandardMaterial({ color: '#242c42', roughness: 0.85, metalness: 0.08 });
  private matHazard = new THREE.MeshStandardMaterial({ color: '#3a1220', emissive: '#ff2d55', emissiveIntensity: 0.9, roughness: 0.6 });
  private matEdge = new THREE.LineBasicMaterial({ color: '#3fc1ff', transparent: true, opacity: 0.4 });
  private matBall = new THREE.MeshStandardMaterial({ color: '#e8f4ff', roughness: 0.3, metalness: 0.15, emissive: '#1f6f8f', emissiveIntensity: 0.4 });
  private matWire = new THREE.MeshBasicMaterial({ color: '#7fdcff', wireframe: true, transparent: true, opacity: 0.28 });
  private matStarBase = new THREE.MeshStandardMaterial({ color: '#ffd54a', emissive: '#ffb300', emissiveIntensity: 0.85, roughness: 0.35, transparent: true });
  private matTorus = new THREE.MeshStandardMaterial({ color: '#8a5cff', emissive: '#7c4dff', emissiveIntensity: 0.9, roughness: 0.4 });
  private matDisc = new THREE.MeshBasicMaterial({ color: '#b39dff', transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false });
  private matField = new THREE.MeshBasicMaterial({ color: '#3fc1ff', transparent: true, opacity: 0.09, depthWrite: false });
  private matGate = new THREE.MeshStandardMaterial({ color: '#8a5cff', emissive: '#7c4dff', emissiveIntensity: 0.75, roughness: 0.4, transparent: true, opacity: 0.85 });
  private matPlateOff = new THREE.MeshStandardMaterial({ color: '#4a5568', emissive: '#000000', emissiveIntensity: 0, roughness: 0.6 });
  private matBumper = new THREE.MeshStandardMaterial({ color: '#0e3a52', emissive: '#3fc1ff', emissiveIntensity: 0.9, roughness: 0.35 });
  private matCpOff = new THREE.MeshStandardMaterial({ color: '#4a5568', emissive: '#22303c', emissiveIntensity: 0.4, roughness: 0.5 });
  private matOrb = new THREE.MeshStandardMaterial({ color: '#ff4dd2', emissive: '#ff2d9e', emissiveIntensity: 0.9, roughness: 0.3 });
  private matOrbRing = new THREE.MeshBasicMaterial({ color: '#ffb3ec', transparent: true, opacity: 0.65 });

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
        g: this.gBase.toArray(),
        rot: this.rotations,
        mode: this.mode,
        stars: this.starsGot,
        deaths: this.deaths,
        plates: this.activePlates,
        finished: this.finished,
        pos: this.ball.pos.toArray().map((v) => +v.toFixed(2)),
        vel: this.ball.vel.toArray().map((v) => +v.toFixed(2)),
        dead: this.dead,
        level: this.levelIdx,
        gates: this.boxes.filter((b) => b.gate).map((b) => (b.gate!.opened ? 1 : 0)),
        movers: this.boxes.filter((b) => b.move).map((b) => b.mesh.position.toArray().map((v) => +v.toFixed(2))),
      }),
      tip: (d: TipDir) => this.tip(d),
      restore: () => this.restoreDown(),
      yaw: (d: number) => this.yaw(d),
      /** 只读探针：当前相机姿态下四个方向键对应的世界向量（与 tip 同源：视平面投影） */
      dirs: () => {
        const up = this.gBase.clone().negate();
        const r = V(1, 0, 0).applyQuaternion(this.qTarget);
        r.addScaledVector(up, -r.dot(up));
        if (r.lengthSq() < 1e-6) r.set(1, 0, 0);
        r.normalize();
        const f0 = V(0, 0, -1).applyQuaternion(this.qTarget);
        const f = f0.addScaledVector(up, -f0.dot(up));
        if (f.lengthSq() < 1e-6) f.copy(r).negate();
        f.normalize();
        return {
          R: r.toArray(),
          L: r.clone().negate().toArray(),
          U: f.toArray(),
          D: f.clone().negate().toArray(),
        };
      },
      /** 相机状态探针（yaw/pitch 偏移、距离、正在淡化的墙数） */
      cam: () => ({
        yaw: +this.yawOff.toFixed(3),
        pitch: +this.pitchOff.toFixed(3),
        dist: +this.camDist.toFixed(2),
        faded: this.solidMeshes.filter((m) => {
          const f = m.userData.fade as FadeInfo | undefined;
          return !!f && f.cur < 0.9;
        }).length,
      }),
      pitch: (a: number) => this.pitch(a),
      /** 重力罗盘读数探针：重力在相机系下的方向（sx 右/sy 上/sz 朝镜头）+ 场内标志 + 世界地面屏幕角 */
      grav: () => this.gravReadout(),
      win: () => this.forceWin(),
      /** 测试用：直接进入指定关卡 */
      goto: (i: number) => this.startLevel(i),
      /** 测试用：直接传送球体（速度清零） */
      warp: (x: number, y: number, z: number) => {
        this.ball.pos.set(x, y, z);
        this.ball.vel.set(0, 0, 0);
      },
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
    this.fields = [];
    this.plates = [];
    this.bumpers = [];
    this.checkpoints = [];
    this.orbs = [];
    this.curField = null;
  }

  private isShared(mat: THREE.Material | THREE.Material[]): boolean {
    const m = Array.isArray(mat) ? mat[0] : mat;
    return m === this.matSolid || m === this.matHazard || m === this.matTorus || m === this.matDisc || m === this.matField || m === this.matBumper || m === this.matPlateOff || m === this.matCpOff || m === this.matOrb || m === this.matOrbRing;
  }

  private buildLevel(i: number) {
    this.clearLevel();
    const lvl: LevelDef = LEVELS[i];
    this.levelIdx = i;
    const group = new THREE.Group();
    this.levelGroup = group;

    for (const b of lvl.boxes) {
      let mesh: THREE.Mesh;
      if (b.hazard) {
        mesh = new THREE.Mesh(this.geoBox, this.matHazard);
      } else {
        // 每面墙独立材质：穿墙透视需要逐墙淡化
        const mat = this.matSolid.clone();
        mesh = new THREE.Mesh(this.geoBox, mat);
        const edgeMat = this.matEdge.clone();
        mesh.add(new THREE.LineSegments(this.geoEdge, edgeMat));
        mesh.userData.fade = { mat, edgeMat, base: 1, baseEdge: 0.4, cur: 1, occl: false } as FadeInfo;
        this.solidMeshes.push(mesh);
      }
      const min = V(b.p[0] - b.s[0] / 2, b.p[1] - b.s[1] / 2, b.p[2] - b.s[2] / 2);
      const max = V(b.p[0] + b.s[0] / 2, b.p[1] + b.s[1] / 2, b.p[2] + b.s[2] / 2);
      mesh.position.set(b.p[0], b.p[1], b.p[2]);
      mesh.scale.set(b.s[0], b.s[1], b.s[2]);
      group.add(mesh);
      const pb: PhysBox = { min, max, hazard: !!b.hazard, mesh };
      if (b.move) {
        const axis = V(...b.move.axis).normalize();
        // 初始位移与 moveT=0 对齐（phase 从 0 起）；prev 同步以免首帧出现假 delta
        const off0 = Math.sin((b.move.phase ?? 0) * Math.PI * 2) * b.move.range;
        const disp0 = axis.clone().multiplyScalar(off0);
        min.add(disp0);
        max.add(disp0);
        mesh.position.copy(V(b.p[0], b.p[1], b.p[2])).add(disp0);
        pb.move = { base: V(b.p[0], b.p[1], b.p[2]), axis, range: b.move.range, period: Math.max(0.5, b.move.period), phase: b.move.phase ?? 0, prev: disp0.clone(), delta: V() };
      }
      this.boxes.push(pb);
    }

    // 反重力场
    if (lvl.fields) {
      for (const f of lvl.fields) {
        const mesh = new THREE.Mesh(this.geoBox, this.matField);
        mesh.position.set(f.p[0], f.p[1], f.p[2]);
        mesh.scale.set(f.s[0], f.s[1], f.s[2]);
        const edges = new THREE.LineSegments(this.geoEdge, new THREE.LineBasicMaterial({ color: '#3fc1ff', transparent: true, opacity: 0.55 }));
        mesh.add(edges);
        group.add(mesh);
        this.fields.push({
          min: V(f.p[0] - f.s[0] / 2, f.p[1] - f.s[1] / 2, f.p[2] - f.s[2] / 2),
          max: V(f.p[0] + f.s[0] / 2, f.p[1] + f.s[1] / 2, f.p[2] + f.s[2] / 2),
          dir: V(...f.dir).normalize(),
          mesh,
        });
      }
    }

    // 压力板
    if (lvl.plates) {
      for (const pl of lvl.plates) {
        const mat = this.matPlateOff.clone();
        const mesh = new THREE.Mesh(this.geoPlate, mat);
        mesh.position.set(pl.p[0], pl.p[1], pl.p[2]);
        const n = V(...(pl.n ?? [0, 1, 0])).normalize();
        mesh.quaternion.setFromUnitVectors(V(0, 1, 0), n);
        group.add(mesh);
        this.plates.push({ pos: V(pl.p[0], pl.p[1], pl.p[2]), active: false, mat });
      }
    }

    // 闸门（压力板常开闂 与 时序自动闂）
    if (lvl.gates) {
      for (const g of lvl.gates) {
        const gmat = this.matGate.clone();
        const gedge = new THREE.LineBasicMaterial({ color: '#c9b3ff', transparent: true, opacity: 0.8 });
        const mesh = new THREE.Mesh(this.geoBox, gmat);
        mesh.position.set(g.p[0], g.p[1], g.p[2]);
        mesh.scale.set(g.s[0], g.s[1], g.s[2]);
        mesh.add(new THREE.LineSegments(this.geoEdge, gedge));
        mesh.userData.fade = { mat: gmat, edgeMat: gedge, base: 0.85, baseEdge: 0.8, cur: 1, occl: false } as FadeInfo;
        group.add(mesh);
        const gate: GateState = { need: g.need ?? 1, opened: false, animT: 0, mesh };
        this.solidMeshes.push(mesh);
        if (g.timing) {
          gate.timing = { period: Math.max(1, g.timing.period), duty: THREE.MathUtils.clamp(g.timing.duty ?? 0.5, 0.1, 0.9), phase: g.timing.phase ?? 0 };
          // 时序闸门以“周期相位”决定初始开合
          const t0 = gate.timing.phase % 1;
          gate.opened = t0 < gate.timing.duty;
          if (gate.opened) {
            gmat.opacity = 0.16;
            gmat.emissive.set('#3fc1ff');
            gmat.emissiveIntensity = 0.5;
            const idx = this.solidMeshes.indexOf(mesh);
            if (idx >= 0) this.solidMeshes.splice(idx, 1);
          }
        }
        this.boxes.push({
          min: V(g.p[0] - g.s[0] / 2, g.p[1] - g.s[1] / 2, g.p[2] - g.s[2] / 2),
          max: V(g.p[0] + g.s[0] / 2, g.p[1] + g.s[1] / 2, g.p[2] + g.s[2] / 2),
          hazard: false,
          mesh,
          gate,
        });
      }
    }

    // 弹射板
    if (lvl.bumpers) {
      for (const bp of lvl.bumpers) {
        const n = V(...bp.n).normalize();
        const disc = new THREE.Mesh(this.geoBump, this.matBumper);
        disc.position.set(bp.p[0], bp.p[1], bp.p[2]);
        disc.quaternion.setFromUnitVectors(V(0, 1, 0), n);
        const cone = new THREE.Mesh(this.geoCone, this.matBumper);
        cone.position.copy(n.clone().multiplyScalar(0.55));
        cone.quaternion.copy(disc.quaternion);
        disc.add(cone);
        group.add(disc);
        this.bumpers.push({ pos: V(bp.p[0], bp.p[1], bp.p[2]), n, power: bp.power ?? 13.5, cd: 0, disc });
      }
    }

    // 检查信标
    if (lvl.checkpoints) {
      for (const cp of lvl.checkpoints) {
        const mat = this.matCpOff.clone();
        const mesh = new THREE.Mesh(this.geoRing, mat);
        mesh.position.set(cp.p[0], cp.p[1], cp.p[2]);
        mesh.rotation.y = Math.PI / 2;
        group.add(mesh);
        this.checkpoints.push({ pos: V(cp.p[0], cp.p[1], cp.p[2]), active: false, mat });
      }
    }

    // 引力转换球
    if (lvl.orbs) {
      for (const o of lvl.orbs) {
        const mesh = new THREE.Mesh(this.geoOrb, this.matOrb);
        mesh.position.set(o.p[0], o.p[1], o.p[2]);
        const ring = new THREE.Mesh(this.geoOrbRing, this.matOrbRing);
        ring.rotation.x = Math.PI / 2.6;
        mesh.add(ring);
        group.add(mesh);
        this.orbs.push({ pos: V(o.p[0], o.p[1], o.p[2]), cd: 0, mesh, ring });
      }
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
    this.portalR = lvl.portal.r ?? WIN_DIST;
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
    this.deaths = 0;
    this.activePlates = 0;
    this.checkpoint = null;
    this.boostT = 0;
    this.prevContact = false;
    this.gBase.set(0, -1, 0);
    this.qBase.identity();
    this.yawOff = 0;
    this.pitchOff = 0;
    this.composeQ();
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
    this.qBase.identity();
    this.yawOff = 0;
    this.pitchOff = 0;
    this.composeQ();
  }

  setEnabled(b: boolean) {
    if (this.mode === 'play') this.enabled = b;
  }

  tip(d: TipDir) {
    if (this.mode !== 'play' || !this.enabled || this.finished || this.dead) return;
    // 方向键 = 屏幕方位：把相机右向/前向投影到垂直于重力的平面（俯仰不影响映射）
    const up = this.gBase.clone().negate();
    const R = V(1, 0, 0).applyQuaternion(this.qTarget);
    R.addScaledVector(up, -R.dot(up));
    if (R.lengthSq() < 1e-6) R.set(1, 0, 0);
    R.normalize();
    const F0 = V(0, 0, -1).applyQuaternion(this.qTarget);
    const F = F0.addScaledVector(up, -F0.dot(up));
    if (F.lengthSq() < 1e-6) F.copy(R).negate(); // pitch 已限幅，理论不可达；兜底
    F.normalize();
    let dir: THREE.Vector3;
    if (d === 'R') dir = R;
    else if (d === 'L') dir = R.negate();
    else if (d === 'U') dir = F;
    else dir = F.negate();
    if (this.curField) {
      // 场内重力被场接管：方向键 = 沿场平面推进脉冲（可操控升力/航向，兼防贴边悬停软锁）
      const d2 = dir.addScaledVector(this.curField.dir, -dir.dot(this.curField.dir));
      if (d2.lengthSq() > 0.5) {
        const now = performance.now();
        if (now - this.lastThrustT > 140) {
          this.lastThrustT = now;
          this.ball.vel.addScaledVector(d2.normalize(), 3.4);
          this.sfx.thrust();
        }
      }
      if (!this.timerOn) this.timerOn = true;
      return; // 推进不计转向
    }
    this.gBase.copy(dir);
    this.refitCamera();
    this.rotations++;
    if (!this.timerOn) this.timerOn = true;
    this.sfx.rotate();
  }

  /** 空格：重力回正世界向下（万向保险——迷路/倒悬时一键落回地面） */
  restoreDown() {
    if (this.mode !== 'play' || !this.enabled || this.finished || this.dead) return;
    if (this.curField) return;
    if (this.gBase.x === 0 && this.gBase.y === -1 && this.gBase.z === 0) return;
    this.gBase.set(0, -1, 0);
    this.refitCamera();
    this.rotations++;
    if (!this.timerOn) this.timerOn = true;
    this.sfx.rotate();
  }

  /** 90° 步进旋转（Q/E） */
  yaw(dir: number) {
    if (this.mode !== 'play' || !this.enabled || this.finished || this.dead) return;
    this.yawOff += dir * Math.PI * 0.5;
    this.composeQ();
    this.sfx.rotate();
  }

  /** 自由环视（拖拽水平分量） */
  freeYaw(angle: number) {
    if (this.mode !== 'play' || !this.enabled) return;
    this.yawOff += angle;
    this.composeQ();
  }

  /** 自由俯视/仰视（拖拽垂直分量），±72° 限幅避免万向节退化 */
  pitch(a: number) {
    if (this.mode !== 'play' || !this.enabled) return;
    this.pitchOff = THREE.MathUtils.clamp(this.pitchOff + a, -1.25, 1.25);
    this.composeQ();
  }

  /** 当前视角偏移读数（旋转转盘显示用；yaw=环视弧度，pitch=俯仰弧度） */
  viewAngles(): { yaw: number; pitch: number } {
    return { yaw: this.yawOff, pitch: this.pitchOff };
  }

  /** 重力罗盘读数：当前实际重力（含陀螺仪偏转/反重力场）在相机坐标系下的方向。
   *  sx=屏幕右为正、sy=屏幕上为正、sz=朝镜头为正；field=处于反重力场内；ground=世界地面(-Y)的屏幕方位角（0=朝上、90=朝右）。 */
  gravReadout(): { sx: number; sy: number; sz: number; field: boolean; ground: number } {
    const inv = this.cam.quaternion.clone().invert();
    const dir = V().copy(this.gEff);
    if (this.gEff.lengthSq() > 1e-9) dir.normalize();
    const g = dir.applyQuaternion(inv);
    const gl = V(0, -1, 0).applyQuaternion(inv);
    return {
      sx: +g.x.toFixed(3),
      sy: +g.y.toFixed(3),
      sz: +g.z.toFixed(3),
      field: !!this.curField,
      ground: Math.round((Math.atan2(gl.x, gl.y) * 180) / Math.PI),
    };
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

  private lastThrustT = 0;

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
    if (this.mode !== 'play') return;
    // Esc / P：暂停⇄恢复开关。必须在 enabled 守卫之前处理——暂停态 enabled=false，
    // 若被守卫拦截则键盘永远无法恢复（v1.7.0 修复：此前 Esc 是单向门）
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
      this.cb.onPauseRequest();
      return;
    }
    if (!this.enabled) return;
    switch (e.key) {
      case 'ArrowLeft': e.preventDefault(); this.tip('L'); break;
      case 'ArrowRight': e.preventDefault(); this.tip('R'); break;
      case 'ArrowUp': e.preventDefault(); this.tip('U'); break;
      case 'ArrowDown': e.preventDefault(); this.tip('D'); break;
      case 'q': case 'Q': case 'a': case 'A': this.yaw(1); break;
      case 'e': case 'E': case 'd': case 'D': this.yaw(-1); break;
      case 'r': case 'R': this.restart(); break;
      case ' ': case 'Spacebar': e.preventDefault(); if (!e.repeat) this.restoreDown(); break;
    }
  };

  // 拖拽环视（鼠标+触屏）与双指捏合缩放；只有从 canvas 按下的指针才参与
  private pts = new Map<number, { x: number; y: number }>();
  private pinchD = 0;
  private pdHandler = (e: PointerEvent) => {
    if (this.mode !== 'play' || !this.enabled) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    this.pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pts.size === 2) {
      const [a, b] = [...this.pts.values()];
      this.pinchD = Math.hypot(a.x - b.x, a.y - b.y);
    }
  };
  private pmHandler = (e: PointerEvent) => {
    const p = this.pts.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    p.x = e.clientX;
    p.y = e.clientY;
    if (this.mode !== 'play' || !this.enabled) return;
    if (this.pts.size === 1) {
      // OrbitControls 惯例：上拖=升相机俯视，下拖=降相机仰视；左右拖=环视
      if (dx !== 0) this.freeYaw(dx * 0.006);
      if (dy !== 0) this.pitch(dy * 0.006);
    } else if (this.pts.size === 2) {
      const [a, b] = [...this.pts.values()];
      const nd = Math.hypot(a.x - b.x, a.y - b.y);
      if (this.pinchD > 0 && Math.abs(nd - this.pinchD) > 0.5) {
        this.camDist = THREE.MathUtils.clamp(this.camDist + (this.pinchD - nd) * 0.03, 4, 16);
        this.pinchD = nd;
      }
    }
  };
  private puHandler = (e: PointerEvent) => {
    this.pts.delete(e.pointerId);
    if (this.pts.size < 2) this.pinchD = 0;
  };
  private wheelHandler = (e: WheelEvent) => {
    if (this.mode !== 'play' || !this.enabled) return;
    e.preventDefault();
    this.camDist = THREE.MathUtils.clamp(this.camDist + e.deltaY * 0.004, 4, 16);
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

  /** 由 qBase + 玩家视角偏移合成目标姿态：qTarget = qYaw(up) · qBase · qPitch(local X) */
  private composeQ() {
    const up = V(0, 1, 0).applyQuaternion(this.qBase);
    const qYaw = new THREE.Quaternion().setFromAxisAngle(up, this.yawOff);
    const qPitch = new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), this.pitchOff);
    this.qTarget.copy(qYaw).multiply(this.qBase).multiply(qPitch);
  }

  /** 重力变化后重建 qBase（up=-g，前向最小摆动）；玩家 yaw/pitch 偏移保留。
   *  退化兜底顺序：旧前向 → 旧上向（保持翻滚面不变，按键语义稳定）→ 旧右向。 */
  private refitCamera() {
    const up = this.gBase.clone().negate();
    const f = V(0, 0, -1).applyQuaternion(this.qBase);
    const upOld = V(0, 1, 0).applyQuaternion(this.qBase);
    let proj = f.clone().addScaledVector(up, -f.dot(up));
    if (proj.lengthSq() < 0.0025) {
      // 旧前向与新 up 平行（经过屏幕轴向翻滚）：改用旧上向投影，相机绕屏幕右轴俯仰翻过，
      // 翻滚面保持不变 —— 同方向键的世界含义保持可学习的一致性（v1.3.0 修复按键漂移）
      proj = upOld.clone().addScaledVector(up, -upOld.dot(up));
    }
    if (proj.lengthSq() < 0.0025) {
      const r = V(1, 0, 0).applyQuaternion(this.qBase);
      proj = r.clone().addScaledVector(up, -r.dot(up));
    }
    if (proj.lengthSq() < 0.0025) proj = V(1, 0, 0).addScaledVector(up, -up.x);
    if (proj.lengthSq() < 1e-6) proj = V(0, 1, 0).addScaledVector(up, -up.y);
    const f2 = proj.normalize();
    const b = f2.clone().negate();
    const r2 = V().crossVectors(up, b).normalize();
    const m = new THREE.Matrix4().makeBasis(r2, up, b);
    this.qBase.setFromRotationMatrix(m);
    this.composeQ();
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
    if (hits.length) d = Math.max(2.2, hits[0].distance - 0.6);
    this.cam.position.copy(this.ball.pos).addScaledVector(dirV, d);
    // 穿墙透视：球与相机之间的墙（含收缩时贴脸的那面）淡化
    const fadeCut = d + 0.6;
    for (const h of hits) {
      if (h.distance > fadeCut) break;
      const f = (h.object as THREE.Mesh).userData.fade as FadeInfo | undefined;
      if (f) f.occl = true;
    }
    this.updateFades(dt);
    if (this.shake > 0.001) {
      this.cam.position.x += (Math.random() - 0.5) * this.shake;
      this.cam.position.y += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.exp(-5 * dt);
    }
  }

  /** 每帧把每面墙的透明度向目标过渡：被遮挡 →0.14，无遮挡 →1 */
  private updateFades(dt: number) {
    for (const m of this.solidMeshes) {
      const f = m.userData.fade as FadeInfo | undefined;
      if (!f) continue;
      const target = f.occl ? 0.14 : 1;
      f.occl = false; // 下一次射线重新标记
      const k = Math.min(1, (target === 1 ? 3.2 : 9) * dt); // 淡出快、恢复慢
      f.cur += (target - f.cur) * k;
      if (Math.abs(target - f.cur) < 0.005) f.cur = target;
      const opaque = f.cur >= 0.999;
      f.mat.transparent = !opaque;
      f.mat.opacity = f.base * f.cur;
      f.mat.depthWrite = f.cur > 0.85;
      if (f.edgeMat) f.edgeMat.opacity = f.baseEdge * (0.35 + 0.65 * f.cur); // 幽灵墙：棱线保留轮廓
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
      if (d2 < BALL_R * BALL_R * 0.81) this.die('hazard');
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
    // 机关时钟与运动平台先行：载球、平移碰撞盒，然后才积分球体
    this.moveT += h;
    for (const b of this.boxes) {
      b.touchedPrev = b.touchedCur;
      b.touchedCur = false;
    }
    this.updateMovers();
    this.updateTimingGates();

    const vel = this.ball.vel;
    vel.addScaledVector(this.gEff, h);
    if (this.boostT > 0) this.boostT -= h;
    const cap = this.boostT > 0 ? BOOST_VEL : MAX_VEL;
    if (vel.length() > cap) vel.setLength(cap);
    vel.multiplyScalar(1 - Math.min(0.5, AIR_DRAG * h));
    this.ball.pos.addScaledVector(vel, h);

    let contact = false;
    for (let iter = 0; iter < 2; iter++) {
      for (const b of this.boxes) {
        if (b.gate?.opened) continue;
        if (this.resolveBox(b)) {
          contact = true;
          b.touchedCur = true;
        }
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

  /** 运动平台：正弦往复，携上一子步接触的球同行 */
  private updateMovers() {
    for (const b of this.boxes) {
      const m = b.move;
      if (!m) continue;
      const off = Math.sin((this.moveT / m.period + m.phase) * Math.PI * 2) * m.range;
      const disp = m.axis.clone().multiplyScalar(off);
      m.delta.copy(disp).sub(m.prev);
      m.prev.copy(disp);
      if (b.touchedPrev) this.ball.pos.add(m.delta);
      b.min.add(m.delta);
      b.max.add(m.delta);
      b.mesh.position.copy(m.base).add(disp);
    }
  }

  /** 球心是否处在盒的膨胀体积内（时序闸门关闭前的安全检查，防夹挤） */
  private ballInBox(b: PhysBox, margin: number): boolean {
    const p = this.ball.pos;
    const cx = THREE.MathUtils.clamp(p.x, b.min.x, b.max.x);
    const cy = THREE.MathUtils.clamp(p.y, b.min.y, b.max.y);
    const cz = THREE.MathUtils.clamp(p.z, b.min.z, b.max.z);
    const dx = p.x - cx, dy = p.y - cy, dz = p.z - cz;
    const r = BALL_R + margin;
    return dx * dx + dy * dy + dz * dz < r * r;
  }

  /** 时序闸门：按周期开合；球在门内时推迟关闭（永不夹球） */
  private updateTimingGates() {
    for (const b of this.boxes) {
      const g = b.gate;
      if (!g || !g.timing) continue;
      const t = ((this.moveT / g.timing.period + g.timing.phase) % 1 + 1) % 1;
      const open = t < g.timing.duty;
      if (open === g.opened) continue;
      if (!open && this.ballInBox(b, 0.15)) continue; // 推迟关闭，等球离开
      g.opened = open;
      const m = g.mesh.material as THREE.MeshStandardMaterial;
      if (open) {
        const idx = this.solidMeshes.indexOf(g.mesh);
        if (idx >= 0) this.solidMeshes.splice(idx, 1);
        m.opacity = 0.16;
        m.emissive.set('#3fc1ff');
        m.emissiveIntensity = 0.5;
        this.sfx.gateOpen();
      } else {
        this.solidMeshes.push(g.mesh);
        m.opacity = 0.85;
        m.emissive.set('#ff3b6b');
        m.emissiveIntensity = 0.85;
        this.sfx.gateShut();
      }
    }
  }

  /** 区域逻辑：重力场 / 压力板 / 弹射板 / 检查信标 */
  private updateZones() {
    const p = this.ball.pos;

    // 反重力场
    let inField: FieldZone | null = null;
    for (const f of this.fields) {
      if (p.x > f.min.x && p.x < f.max.x && p.y > f.min.y && p.y < f.max.y && p.z > f.min.z && p.z < f.max.z) {
        inField = f;
        break;
      }
    }
    if (inField !== this.curField) {
      if (inField) {
        // 入场：重力交由场接管（离开后恢复向下，可空中按键转向）
        this.gBase.copy(inField.dir);
        this.sfx.field();
      } else if (this.curField) {
        // 出场：重力恢复向下，镜头回正
        this.gBase.set(0, -1, 0);
        this.refitCamera();
      }
      this.curField = inField;
    }

    // 压力板（永久激活）
    for (const pl of this.plates) {
      if (!pl.active && p.distanceTo(pl.pos) < PLATE_DIST) {
        pl.active = true;
        this.activePlates++;
        pl.mat.emissive.set('#ffb300');
        pl.mat.emissiveIntensity = 0.95;
        pl.mat.color.set('#6b5316');
        this.sfx.plate();
        this.openGates();
      }
    }

    // 弹射板
    for (const bp of this.bumpers) {
      if (bp.cd > 0) bp.cd -= 1 / 60;
      if (bp.cd <= 0 && p.distanceTo(bp.pos) < BUMPER_DIST) {
        bp.cd = 0.4;
        this.ball.vel.copy(bp.n).multiplyScalar(bp.power);
        // 弹射瞬间重力归位向下，形成抛物线飞越（否则横向重力下球会直线飞出边界）
        this.gBase.set(0, -1, 0);
        this.refitCamera();
        this.boostT = 0.9;
        this.shake = Math.max(this.shake, 0.22);
        this.sfx.bumper();
      }
    }

    // 检查信标
    for (const cp of this.checkpoints) {
      if (!cp.active && p.distanceTo(cp.pos) < CHECKPOINT_DIST) {
        cp.active = true;
        cp.mat.emissive.set('#2dffa8');
        cp.mat.emissiveIntensity = 1.1;
        cp.mat.color.set('#0e4d33');
        this.checkpoint = { pos: cp.pos.clone(), gBase: this.gBase.clone(), qBase: this.qBase.clone(), yawOff: this.yawOff, pitchOff: this.pitchOff };
        this.sfx.checkpoint();
      }
    }

    // 引力转换球：触碰即 180° 反转当前重力，冷却防连触
    for (const o of this.orbs) {
      if (o.cd > 0) o.cd -= 1 / 60;
      if (o.cd <= 0 && p.distanceTo(o.pos) < ORB_DIST) {
        o.cd = ORB_CD;
        this.gBase.negate();
        this.refitCamera();
        this.rotations++;
        if (!this.timerOn) this.timerOn = true;
        this.shake = Math.max(this.shake, 0.18);
        this.sfx.orb();
      }
    }
  }

  private openGates() {
    for (const b of this.boxes) {
      const gate = b.gate;
      if (gate && !gate.opened && this.activePlates >= gate.need) {
        gate.opened = true;
        this.sfx.gate();
        const idx = this.solidMeshes.indexOf(gate.mesh);
        if (idx >= 0) this.solidMeshes.splice(idx, 1);
      }
    }
  }

  private checkPickups() {
    const p = this.ball.pos;
    if (
      p.x < this.boundMin.x - OOB_MARGIN || p.x > this.boundMax.x + OOB_MARGIN ||
      p.y < this.boundMin.y - OOB_MARGIN || p.y > this.boundMax.y + OOB_MARGIN ||
      p.z < this.boundMin.z - OOB_MARGIN || p.z > this.boundMax.z + OOB_MARGIN
    ) {
      this.die('fall');
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
    if (this.portal && this.portal.position.distanceTo(p) < this.portalR) this.win();
  }

  private die(reason: DeathReason) {
    if (this.dead || this.finished) return;
    this.dead = true;
    this.deaths++;
    this.shake = 0.35;
    this.sfx.die();
    this.cb.onDeath(reason);
    const g = ++this.gen;
    window.setTimeout(() => {
      if (g !== this.gen || this.mode !== 'play') return;
      const cp = this.checkpoint;
      this.ball.pos.copy(cp ? cp.pos : this.spawn);
      this.ball.vel.set(0, 0, 0);
      this.gBase.copy(cp ? cp.gBase : V(0, -1, 0));
      if (cp) {
        this.qBase.copy(cp.qBase);
        this.yawOff = cp.yawOff;
        this.pitchOff = cp.pitchOff;
      } else {
        this.qBase.identity();
        this.yawOff = 0;
        this.pitchOff = 0;
      }
      this.composeQ();
      this.curField = null;
      this.boostT = 0;
      this.dead = false;
    }, 320);
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
      this.cb.onWin({ rotations: this.rotations, time: this.time, stars: this.starsGot, deaths: this.deaths });
    }, 800);
  }

  private pushStats() {
    // 地面罗盘：显示"世界地面方向"在当前屏幕上的方位（0=箭头朝上、90=朝右、180=朝下）。
    // 相机随重力翻滚后，玩家一眼就能看出哪边是地面 —— 迷路时的空间锚点
    const inv = this.cam.quaternion.clone().invert();
    const gl = V(0, -1, 0).applyQuaternion(inv);
    const ang = Math.round((Math.atan2(gl.x, gl.y) * 180) / Math.PI);
    this.cb.onStats({ time: this.time, rotations: this.rotations, stars: this.starsGot, starsTotal: this.starsTotal, deaths: this.deaths, gAngle: ang });
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
      this.yawOff += 0.1 * dt;
      this.composeQ();
    }

    this.computeG();
    if (!this.finished && !this.dead) {
      this.acc = Math.min(this.acc + dt, 0.08);
      while (this.acc >= STEP) {
        this.step(STEP);
        this.acc -= STEP;
      }
    }
    if (this.mode === 'play' && !this.dead && !this.finished) {
      this.updateZones();
      this.checkPickups();
    }

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
    this.matField.opacity = 0.07 + 0.04 * (0.5 + 0.5 * Math.sin(t * 1.7));
    this.matBumper.emissiveIntensity = 0.75 + 0.35 * (0.5 + 0.5 * Math.sin(t * 4.2));
    // 引力转换球：自旋 + 呼吸（冷却时熄灭）
    for (const o of this.orbs) {
      o.mesh.rotation.y += dt * 1.3;
      o.ring.rotation.z += dt * 2.2;
      const hot = o.cd <= 0;
      this.matOrb.emissiveIntensity = hot ? 0.7 + 0.4 * (0.5 + 0.5 * Math.sin(t * 5)) : 0.2;
      this.matOrbRing.opacity = hot ? 0.5 + 0.3 * Math.sin(t * 5) : 0.15;
    }
    // 闸门溶解动画（时序闸门不走溶解，只变色）
    for (const b of this.boxes) {
      const gate = b.gate;
      if (gate && !gate.timing && gate.opened && gate.animT < 1) {
        gate.animT = Math.min(1, gate.animT + dt * 2);
        const k = gate.animT;
        const ud = gate.mesh.userData;
        if (ud.bx === undefined) {
          ud.bx = gate.mesh.scale.x;
          ud.by = gate.mesh.scale.y;
          ud.bz = gate.mesh.scale.z;
        }
        const shrink = Math.max(0.02, 1 - k);
        gate.mesh.scale.set(ud.bx * shrink, ud.by * shrink, ud.bz * shrink);
        const m = gate.mesh.material as THREE.MeshStandardMaterial;
        m.opacity = 0.85 * (1 - k);
        if (k >= 1) gate.mesh.visible = false;
      }
    }
    // 时序闸门即将关闭时红光预警（处于开启相位的后 30%）
    for (const b of this.boxes) {
      const g = b.gate;
      if (!g || !g.timing) continue;
      const tt = ((this.moveT / g.timing.period + g.timing.phase) % 1 + 1) % 1;
      const m = g.mesh.material as THREE.MeshStandardMaterial;
      if (g.opened) {
        if (tt > g.timing.duty * 0.7) {
          // 快关了：青→红闪烁
          const blink = 0.5 + 0.5 * Math.sin(t * 14);
          m.emissive.set(blink > 0.5 ? '#ff3b6b' : '#3fc1ff');
          m.emissiveIntensity = 0.5 + blink * 0.5;
          m.opacity = 0.16 + blink * 0.2;
        }
      } else {
        // 关闭态：呼吸红紫
        m.emissive.set('#ff3b6b');
        m.emissiveIntensity = 0.7 + 0.25 * Math.sin(t * 3);
      }
    }
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
