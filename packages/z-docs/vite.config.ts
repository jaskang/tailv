import type { UserConfig } from 'vite'
import path from 'path'
// const createVueDocPlugin = require('vite-plugin-vuedoc')
import createVueDocPlugin from 'vite-plugin-vuedoc'
// import vitePluginSyncmd from './scripts/vitePluginSyncmd'
const resolve = (...args) => {
  return path.join(__dirname, ...args)
}
const config: UserConfig = {
  // root: ,
  assetsDir: 'src/assets',
  optimizeDeps: {
    link: ['elenext', '@elenext/icons']
    // link: ['optimize-linked']
  },
  alias: {},
  plugins: [
    createVueDocPlugin({
      prism: {
        theme: 'tomorrow'
      }
    })
  ]
}

export default config
