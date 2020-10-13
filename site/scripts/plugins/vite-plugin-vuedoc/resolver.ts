import path from 'path'
import { Resolver } from 'vite'

export const VUEDOC_ID = '@vuedoc'
export const VUEDOC_REQUEST_PATH = '/' + VUEDOC_ID

// this is a path resolver that is passed to vite
// so that we can resolve custom requests that start with /@app or /@theme
// we also need to map file paths back to their public served paths so that
// vite HMR can send the correct update notifications to the client.
export function createResolver(): Resolver {
  return {
    requestToFile(publicPath, root) {
      if (publicPath.startsWith(VUEDOC_REQUEST_PATH)) {
        const docFilePath = publicPath.replace('/@vuedoc', '')
        return path.resolve(root, docFilePath)
      }
    },
    fileToRequest(filePath, root) {
      if (filePath.endsWith('.md')) {
        return `${VUEDOC_REQUEST_PATH}${filePath}`
      }
    }
  }
}
