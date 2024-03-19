<script lang="ts" setup>
import { Theme, useData, useRoute } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import { Anchor, type IAnchorItem } from 'tailv'

const { theme } = useData<DefaultTheme.Config>()
const { path } = useRoute()
const items = computed(() => {
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
    title: item.text || '',
    link: item.link,
    children: item.items ? sidebarItems2AnchorItems(item.items) : undefined,
  }))
}

const groups = computed(() => sidebarItems2AnchorItems(items.value))
</script>

<template>
  <div class="">
    <div v-for="group in groups">
      <h5 class="mb-8 mt-12 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3 lg:mt-8">{{ group.title }}</h5>
      <Anchor :items="group.children" class=""> </Anchor>
    </div>
  </div>
</template>
