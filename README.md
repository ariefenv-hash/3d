# 几何贯穿 3D · 引力矩阵

> 六向重力解谜 —— 倾倒重力，让球滚动、平飞、坠落，抵达传送门。
> 由 2D 版 [几何贯穿 · 视界重力](https://ariefenv-hash.github.io/geometric-traverse/) 进化而来的 3D 续作。

**在线游玩：<https://ariefenv-hash.github.io/3d/>**

## 玩法

- **← / →**：重力向屏幕左 / 右倾倒 90°，球贴地滚动
- **↑ / ↓**：重力倒向屏幕深处 / 近处
- **连按两次 ←（或 →）**：重力反转，飞向天花板
- **Q / E**（或鼠标拖拽）：旋转视角；**R** 重开；**Esc** 暂停
- **移动端**：左下方向垫倾倒重力（可长按连发），右下两键旋转视角
- **陀螺仪（实验）**：移动端点击顶栏「陀」授权后，倾斜手机即可在当前重力基础上连续偏转方向（低通滤波 + 死区 + 屏幕方向自适应）

12 个关卡、每关 3 颗星、S/A/B 评价、破纪录保存、进度自动解锁。

## 技术

- React 18 + TypeScript + Vite 5 + Three.js（r160）
- 自研轻量物理：球体 vs AABB、摩擦/弹性、固定步长子步进
- 兼容性策略：不使用 Tailwind/PostCSS，样式全手写 hex CSS，规避 `@layer` 与 `oklch()` 在老内核浏览器上的整层样式丢失问题；构建目标 es2019
- 音效为 WebAudio 实时合成，零外部资源依赖

## 开发

```bash
bun install        # 或 npm install
bun run dev        # 本地开发
bun run build      # 构建到 dist/
bun run preview    # 预览构建产物
```

## 部署

`dist/` 构建产物推送至 `gh-pages` 分支，GitHub Pages 指向该分支；`base: './'` 相对路径保证子路径部署可用。

## 许可

MIT
