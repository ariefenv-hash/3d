import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 兼容性策略（吸取 2D 版教训）：
// - 不使用 Tailwind/PostCSS（避免 @layer 与 oklch 在老内核浏览器上整层样式丢失）
// - 全部手写 CSS，颜色一律 hex
// - JS 目标 es2019（WebGL2 本身已要求较新内核，无需更低）
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 1500,
  },
});
