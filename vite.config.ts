/// <reference types="vitest" />

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx(), dts({ rollupTypes: true, tsconfigPath: resolve(__dirname, './tsconfig.build.json') })],
  build: {
    lib: {
      fileName: 'index',
      formats: ['es'],
      entry: resolve(__dirname, './src/index.ts'),
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [...Object.keys(pkg.dependencies), 'vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
    include: ['./src/**/*.test.ts'],
  },
})
