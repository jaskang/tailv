<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ScrollArea, Anchor, IAnchorItem, useAnchor, AnchorHeader } from 'tailv'
import { useData } from 'vitepress'
import { ThemeConfig } from '../theme'

defineOptions({ name: 'VPDocToc' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const { theme, page } = useData<ThemeConfig>()
const title = computed(() => {
  return (
    (typeof theme.value.outline === 'object' && !Array.isArray(theme.value.outline) && theme.value.outline.label) ||
    theme.value.outlineTitle ||
    'On this page'
  )
})
const container = ref<HTMLElement>()
const { headers, current } = useAnchor(container, {
  offset: 135,
})
function headers2AnchorItems(headers: AnchorHeader[]): IAnchorItem[] {
  return headers.map(header => ({
    key: header.id,
    title: header.title,
    link: header.link,
    children: header.children ? headers2AnchorItems(header.children) : undefined,
  }))
}
onMounted(() => {
  container.value = document.querySelector<HTMLElement>('.vp-doc') || undefined
})

const groups = computed(() => headers2AnchorItems(headers.value))
</script>
<template>
  <div class="px-8">
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">{{ title }}</h5>
    <Anchor :current="current?.id" :items="groups" :offset="135">
      <template #item="{ label, key, link, deep, isActive }">
        <a
          :href="link"
          class="group flex items-start"
          :class="[
            isActive
              ? 'font-semibold text-primary-500 dark:text-primary-400'
              : 'hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300',
          ]"
          :style="{
            paddingLeft: deep * 0.5 + 'rem',
          }"
        >
          <svg
            v-if="deep > 0"
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
          {{ label || key }}
        </a>
      </template>
    </Anchor>
  </div>
</template>
