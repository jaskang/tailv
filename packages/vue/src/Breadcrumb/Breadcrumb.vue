<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

export type BreadcrumbItem = {
  title: string
  path: string
}

defineOptions({ name: 'Breadcrumb' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  items: Array as PropType<BreadcrumbItem[]>,
})
</script>
<template>
  <nav>
    <ol class="flex list-none flex-wrap items-center gap-1.5 break-words text-sm">
      <li v-for="item in items">
        {{ item.title }}
      </li>
    </ol>
  </nav>
</template>
