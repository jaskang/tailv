import path from 'path'
import { Resolver } from 'vite'

export const VUEDOC_DEMO_PREFIX = 'VUEDEMO_'
export const VUEDOC_DEMO_RE = /(.*?\.md)\/(VUEDEMO_\d+)/

export function createResolver(): Resolver {
  return {
    requestToFile(publicPath, root) {
      if (publicPath.endsWith('.md') || VUEDOC_DEMO_RE.test(publicPath)) {
        let file = path.resolve(root, publicPath.slice(1))
        if (publicPath.indexOf(root) === 0) {
          file = publicPath
        }
        return file
      }
    },
    fileToRequest(filePath, root) {
      if (filePath.endsWith('.md')) {
        const request = '/' + path.relative(root, filePath)
        return request
      }
    }
  }
}
