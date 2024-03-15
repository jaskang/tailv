<script lang="ts" setup>
import { Theme, useData, useRoute } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import { Anchor, type IAnchorItem } from 'tailv'

const { theme } = useData<DefaultTheme.Config>()
const { path } = useRoute()
const groups = computed(() => {
  if (!theme.value.sidebar) return []
  if (Array.isArray(theme.value.sidebar)) {
    return theme.value.sidebar
  } else {
    const keys = Object.keys(theme.value.sidebar).sort()
    const key = keys.find(key => path.startsWith(key))
    const group = key ? theme.value.sidebar[key] : []
    return Array.isArray(group) ? group : group.items
  }
})

function sidebarItems2AnchorItems(items: DefaultTheme.SidebarItem[]): IAnchorItem[] {
  return items.map(item => ({
    key: item.text || '',
    label: item.text,
    href: item.link,
    children: item.items ? sidebarItems2AnchorItems(item.items) : undefined,
  }))
}

const items = computed(() => sidebarItems2AnchorItems(groups.value))
</script>

<template>
  <div class="">
    <div class="mt-12 lg:mt-8" v-for="item in items">
      <h5 class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">{{ item.label }}</h5>
      <Anchor :items="item.children" />
    </div>
  </div>
</template>
