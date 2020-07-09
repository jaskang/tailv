import type { UserConfig } from 'vite'
import path from 'path'
import vuedocPlugin from './scripts/plugins/vite-plugin-vuedoc/index'

const config: UserConfig = {
  outDir: 'build',
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js'
  },
  minify: false,
  plugins: [vuedocPlugin]
}

export default config
