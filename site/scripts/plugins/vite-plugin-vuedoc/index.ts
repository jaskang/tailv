import { Plugin } from 'vite'
import { createVuedocBuildPlugin } from './build'
import { createResolver } from './resolver'
import { createVuedocServerPlugin } from './server'

type VueDocPluginOptions = {}

export default function createVueDocPlugin(options: VueDocPluginOptions): Plugin {
  return {
    resolvers: [createResolver()],
    configureServer: [createVuedocServerPlugin()],
    rollupPluginVueOptions: {
      include: /\.(vue|md)$/
    },
    rollupInputOptions: {
      // ts-ignore
      plugins: [createVuedocBuildPlugin()]
    }
  }
}
