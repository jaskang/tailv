import type { UserConfig } from 'vite'
import path from 'path'
import docPlugin from './scripts/plugins/docPlugin'

const config: UserConfig = {
  outDir: 'build',
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js'
  },
  minify: false,
  plugins: [docPlugin]
}

export default config
