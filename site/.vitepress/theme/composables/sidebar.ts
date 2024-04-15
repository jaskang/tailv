import { computed, onMounted, onUnmounted, ref, watch, watchEffect, watchPostEffect } from 'vue'

import { normalize, useDataByTheme } from '../utils'
import { useRoute } from 'vitepress'
import { type IAnchorItem, type MenuItemType } from 'tailv'
import type { Sidebar } from '../theme'

function sidebarToMenuItem(sidebar: Sidebar[]): MenuItemType[] {
  return sidebar.map(({ title, link, children }) => {
    return {
      key: link,
      label: title,
      link: link,
      children: children ? sidebarToMenuItem(children) : [],
    }
  })
}

function groupToMenu(sidebar: Record<string, Sidebar[]>): MenuItemType[] {
  const ret: MenuItemType[] = []
  const groups = Object.keys(sidebar || {})
  for (const group of groups) {
    ret.push({ type: 'title', label: group })
    ret.push(...sidebarToMenuItem(sidebar[group]))
  }
  return ret
}

export function useSidebar() {
  const { theme } = useDataByTheme()
  const route = useRoute()
  const items = computed(() => groupToMenu(theme.value.sidebar))

  const current = computed(() => {
    return normalize(route.path) || ''
  })

  return {
    current,
    items,
  }
}
