<script setup lang="ts">
import { ref, computed } from 'vue'
import { ScrollArea, Anchor, IAnchorItem } from 'tailv'
import { useData, type Header } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'

defineOptions({ name: 'VPDocAside' })

const { theme, page } = useData<DefaultTheme.Config>()

const title = computed(() => {
  return (
    (typeof theme.value.outline === 'object' && !Array.isArray(theme.value.outline) && theme.value.outline.label) ||
    theme.value.outlineTitle ||
    'On this page'
  )
})

function headers2AnchorItems(headers: Header[]): IAnchorItem[] {
  return headers.map(header => ({
    key: header.slug,
    title: header.title,
    href: header.link,
    children: header.children ? headers2AnchorItems(header.children) : undefined,
  }))
}

const items = computed(() => headers2AnchorItems(page.value.headers))

console.log(page)
</script>
<template>
  <div class="px-8">
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
      {{ title }}
    </h5>
    <Anchor class="text-sm leading-6 text-slate-700" :items="items"></Anchor>
  </div>
</template>
