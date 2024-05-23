import { computed } from 'vue'

import { type IAnchorItem } from 'tailv'
import { useRoute } from 'vitepress'
import type { Sidebar } from '../theme'
import { normalize, useDataByTheme } from '../utils'

export type SidebarGroup = {
  title: string
  items: IAnchorItem[]
}

function sidebarToAnchorItems(sidebar: Sidebar[]): IAnchorItem[] {
  return sidebar.map(({ title, link, children }) => {
    return {
      id: link,
      title: title,
      link: link,
      children: children ? sidebarToAnchorItems(children) : [],
    }
  })
}

function groupToMenu(sidebar: Record<string, Sidebar[]>): SidebarGroup[] {
  const ret: SidebarGroup[] = []
  const groups = Object.keys(sidebar || {})
  for (const group of groups) {
    ret.push({ title: group, items: sidebarToAnchorItems(sidebar[group]!) })
  }
  return ret
}

export function useSidebar() {
  const { theme } = useDataByTheme()
  const route = useRoute()
  const groups = computed(() => groupToMenu(theme.value.sidebar))

  const current = computed(() => {
    return normalize(route.path) || ''
  })

  return {
    current,
    groups,
  }
}
