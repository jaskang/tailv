import { Plugin, ServerPluginContext } from 'vite'
import chokidar from 'chokidar'
import path from 'path'
import fs from 'fs-extra'

function docFileName(path: string) {
  const ret = path.split('/__docs__/')
  if (ret.length === 2) {
    return ret
  }
  return [null, null]
}

function syncdocServer({ root }) {
  const componentsDir = path.join(root, 'src/components')
  const docsPath = file => path.join(root, 'site/__docs__', file)
  const watcher = chokidar.watch(`${componentsDir}/**/__docs__/*.md`)
  watcher
    .on('add', async path => {
      const [, file] = docFileName(path)
      if (file) {
        try {
          await fs.copy(path, docsPath(file))
        } catch (err) {
          console.error(err)
        }
      }
    })
    .on('change', async path => {
      const [, file] = docFileName(path)
      if (file) {
        try {
          await fs.copy(path, docsPath(file))
        } catch (err) {
          console.error(err)
        }
      }
    })
    .on('unlink', async path => {
      const [, file] = docFileName(path)
      if (file) {
        try {
          await fs.remove(docsPath(file))
        } catch (err) {
          console.error(err)
        }
      }
    })
}

function vitePluginSyncmd(): Plugin {
  return {
    configureServer: [syncdocServer]
  }
}

export default vitePluginSyncmd
