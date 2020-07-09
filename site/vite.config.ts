import type { UserConfig } from 'vite'
import path from 'path'
import { createVuedcoPlugin } from './scripts/plugins/vite-plugin-vuedoc'

const config: UserConfig = {
  outDir: 'build',
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js'
  },
  minify: false,
  plugins: [
    createVuedcoPlugin({
      docsPath(root: string) {
        console.log(path.join(root, '../packages/elenext/src/components/'))

        return path.join(root, '../packages/elenext/src/components/')
      }
    })
  ]
}

export default config
