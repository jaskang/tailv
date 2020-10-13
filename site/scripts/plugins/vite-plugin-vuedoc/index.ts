import { Plugin } from 'vite'
import { createVuedocBuildPlugin } from './build'
import { createResolver } from './resolver'
import { createVuedocServerPlugin } from './server'

export default function createVueDocPlugin(): Plugin {
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
