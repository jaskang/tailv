import { computed, onMounted, onUnmounted, ref, watch, watchEffect, watchPostEffect } from 'vue'

import { normalize, useDataByTheme } from '../utils'
import { useRoute } from 'vitepress'
import { AnchorItem } from 'tailv'

export function useSidebar() {
  const { theme } = useDataByTheme()
  const route = useRoute()
  const groups = computed(() => {
    if (!theme.value.sidebar) return []
    if (Array.isArray(theme.value.sidebar)) {
      return theme.value.sidebar
    } else {
      const keys = Object.keys(theme.value.sidebar).sort()
      const key = keys.find(key => route.path.startsWith(key))
      return key ? theme.value.sidebar[key] : []
    }
  })
  // flatten sidebar groups children
  const items = computed(() =>
    groups.value.reduce((items, group) => {
      return items.concat(group.children || [])
    }, [] as AnchorItem[])
  )

  const current = computed(() => {
    const item = items.value.find(item => item.link === normalize(route.path))
    return item?.key || ''
  })

  const hasSidebar = computed(() => groups.value.length > 0)

  return {
    current,
    groups,
    hasSidebar,
  }
}
/**
 * a11y: cache the element that opened the Sidebar (the menu button) then
 * focus that button again when Menu is closed with Escape key.
 */
export function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : undefined
  })
  onMounted(() => {
    window.addEventListener('keyup', onEscape)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', onEscape)
  })
  function onEscape(e) {
    if (e.key === 'Escape' && isOpen.value) {
      close()
      triggerElement?.focus()
    }
  }
}
export function useSidebarControl(item) {
  const { page } = useData()
  const collapsed = ref(false)
  const collapsible = computed(() => {
    return item.value.collapsed != null
  })
  const isLink = computed(() => {
    return !!item.value.link
  })
  const isActiveLink = ref(false)
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link)
  }
  watch([page, item, hashRef], updateIsActiveLink)
  onMounted(updateIsActiveLink)
  const hasActiveLink = computed(() => {
    if (isActiveLink.value) {
      return true
    }
    return item.value.items ? containsActiveLink(page.value.relativePath, item.value.items) : false
  })
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length)
  })
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed)
  })
  watchPostEffect(() => {
    ;(isActiveLink.value || hasActiveLink.value) && (collapsed.value = false)
  })
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink,
    hasChildren,
    toggle,
  }
}
