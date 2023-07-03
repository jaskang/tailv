import { useData, withBase } from 'vitepress'

export const EXTERNAL_URL_RE = /^[a-z]+:/i
export const PATHNAME_PROTOCOL_RE = /^pathname:\/\//
export const APPEARANCE_KEY = 'vitepress-theme-appearance'
export const HASH_RE = /#.*$/
export const EXT_RE = /(index)?\.(md|html)$/
export const inBrowser = typeof document !== 'undefined'

export function normalize(path: string) {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '')
}

export function isExternal(path: string) {
  return EXTERNAL_URL_RE.test(path)
}

export function normalizeLink(url: string) {
  if (isExternal(url)) {
    return url.replace(PATHNAME_PROTOCOL_RE, '')
  }
  const { site } = useData()
  const { pathname, search, hash } = new URL(url, 'http://a.com')
  const normalizedPath =
    pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : url.replace(
          /(?:(^\.+)\/)?.*$/,
          `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? '' : '.html')}${search}${hash}`
        )
  return withBase(normalizedPath)
}
