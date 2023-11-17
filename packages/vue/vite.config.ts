import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@zonda/style', replacement: resolve(__dirname, '../style/src/index.ts') },
    ],
  },
})
