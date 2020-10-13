import { cachedRead, ServerPlugin } from 'vite'
import { createMarkdownRenderFn, DemoType } from './markdownToVue'
import { existsSync } from 'fs'

const debug = require('debug')('vuedoc:serve')
const cacheDemos: Map<string, DemoType[]> = new Map()

export function createVuedocServerPlugin(): ServerPlugin {
  return ({ app, root, watcher, resolver }) => {
    const markdownToVue = createMarkdownRenderFn()

    app.use(async (ctx, next) => {
      const demoPathReg = /(.*?\.md)\/(VueDocDemo\d+)/

      if (demoPathReg.test(ctx.path)) {
        const [, filepath, id] = demoPathReg.exec(ctx.path)
        const file = resolver.requestToFile(ctx.path).replace(`/${id}`, '')
        console.log(`file:`, file)

        const demos = cacheDemos.get(file) || []
        const demo = demos.find(item => item.id === id)
        ctx.vue = true
        ctx.type = 'js'
        ctx.body = demo.code
        await next()
        return
      }
      if (ctx.path.endsWith('.md')) {
        const file = resolver.requestToFile(ctx.path)
        if (!existsSync(file)) {
          return next()
        }
        await cachedRead(ctx, file)
        const { component, demos } = markdownToVue(ctx.body, ctx.path)
        cacheDemos.set(file, demos)
        ctx.vue = true
        ctx.type = 'js'
        ctx.body = component
        await next()

        debug(ctx.url, ctx.status)
        return
      }
      await next()
    })
  }
}

// export async function createServer(options: ServerConfig = {}) {

//   return createViteServer({
//     ...options,
//     configureServer: createVitePressPlugin(config),
//     resolvers: [config.resolver]
//   })
// }
