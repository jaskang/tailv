import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import mdx from '@mdx-js/rollup'

import remarkGfm from 'remark-gfm'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [remarkGfm],
    }),
    vue(),
    jsx(),
  ],
  resolve: {
    alias: {
      tailv: resolve(__dirname, '../vue/src'),
    },
  },
})
