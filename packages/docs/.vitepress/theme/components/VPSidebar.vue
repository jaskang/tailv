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
    title: item.text || '',
    href: item.link,
    children: item.items ? sidebarItems2AnchorItems(item.items) : undefined,
  }))
}

const items = computed(() => sidebarItems2AnchorItems(groups.value))
</script>

<template>
  <div class="">
    <Anchor :items="items" is-group class="">
      <template #title="{ title }">
        <h5 class="mb-8 mt-12 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3 lg:mt-8">{{ title }}</h5>
      </template>
      <template #item="{ deep, title, href }">
        <a
          class="group flex items-start border-l py-1 no-underline hover:border-primary-500 hover:text-primary-500 dark:text-primary-400"
          :href="href"
          :style="{ paddingLeft: deep + 'rem' }"
        >
          {{ title }}
        </a>
      </template>
    </Anchor>
  </div>
</template>
