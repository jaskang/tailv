<script setup lang="ts">
import { ref, computed } from 'vue'
import { ScrollArea, Anchor, IAnchorItem } from 'tailv'
import { useData, type Header } from 'vitepress'
import { type DefaultTheme } from 'vitepress/theme'

defineOptions({ name: 'VPDocToc' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

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
</script>
<template>
  <div class="px-8">
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
      {{ title }}
    </h5>
    <Anchor :items="items" is-group class="text-sm leading-6 text-slate-700">
      <template #title="{ title }">
        <a
          href="#configuration-options"
          class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        >
          {{ title }}
        </a>
      </template>
      <template #item>
        <a
          href="#content"
          class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ><svg
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path></svg
          >Content</a
        >
        <svg
          width="3"
          height="24"
          viewBox="0 -9 3 24"
          class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
        >
          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      </template>
    </Anchor>
  </div>
</template>
