import { useData } from 'vitepress'
import { type ThemeConfig } from './theme'

const HASH_RE = /#.*$/
const HASH_OR_QUERY_RE = /[?#].*$/
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/

export function normalize(path: string): string {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, '').replace(INDEX_OR_EXT_RE, '$1')
}

export function useDataByTheme() {
  return useData<ThemeConfig>()
}
