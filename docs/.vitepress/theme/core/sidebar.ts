import { useMediaQuery } from '@vueuse/core'
import { useData, useRoute } from 'vitepress'
import { computed, ref } from 'vue'

import { HASH_RE, inBrowser, normalize } from './shared'

export function isActive(currentPath: string, matchPath: string, asRegex = false) {
  if (matchPath === undefined) {
    return false
  }
  currentPath = normalize(`/${currentPath}`)
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  }
  if (normalize(matchPath) !== currentPath) {
    return false
  }
  const hashMatch = matchPath.match(HASH_RE)
  if (hashMatch) {
    return (inBrowser ? location.hash : '') === hashMatch[0]
  }
  return true
}

export function useSidebar() {
  const route = useRoute()
  const { theme, frontmatter } = useData()
  const is960 = useMediaQuery('(min-width: 960px)')
  const isOpen = ref(false)
  const sidebar = computed(() => {
    const sidebarConfig = theme.value.sidebar
    const relativePath = route.data.relativePath
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
  })
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== 'home'
  })
  const leftAside = computed(() => {
    if (hasAside.value)
      return frontmatter.value.aside == null ? theme.value.aside === 'left' : frontmatter.value.aside === 'left'
    return false
  })
  const hasAside = computed(() => {
    if (frontmatter.value.layout === 'home') return false
    if (frontmatter.value.aside != null) return !!frontmatter.value.aside
    return theme.value.aside !== false
  })
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value)
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : []
  })
  function open() {
    isOpen.value = true
  }
  function close() {
    isOpen.value = false
  }
  function toggle() {
    isOpen.value ? close() : open()
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle,
  }
}

export function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`
}

export function getSidebar(sidebar, path: string) {
  if (Array.isArray(sidebar)) {
    return sidebar
  }
  if (sidebar == null) {
    return []
  }
  path = ensureStartingSlash(path)
  const dir = Object.keys(sidebar)
    .sort((a, b) => {
      return b.split('/').length - a.split('/').length
    })
    .find(dir => {
      // make sure the multi sidebar key starts with slash too
      return path.startsWith(ensureStartingSlash(dir))
    })
  return dir ? sidebar[dir] : []
}

/**
 * Get or generate sidebar group from the given sidebar items.
 */
export function getSidebarGroups(sidebar) {
  const groups = []
  let lastGroupIndex = 0
  for (const index in sidebar) {
    const item = sidebar[index]
    if (item.items) {
      lastGroupIndex = groups.push(item)
      continue
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] })
    }
    groups[lastGroupIndex].items.push(item)
  }
  return groups
}

export function getFlatSideBarLinks(sidebar) {
  const links = []
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({ text: item.text, link: item.link })
      }
      if (item.items) {
        recursivelyExtractLinks(item.items)
      }
    }
  }
  recursivelyExtractLinks(sidebar)
  return links
}
