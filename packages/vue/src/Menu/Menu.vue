<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { isDividerItem, isGroupItem, isMenuItem, type MenuItem, type MenuItemType } from './types'

defineOptions({ name: 'Menu' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  title: String,
  items: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
})

const current = ref<MenuItemType>()

const isCurrent = (item: MenuItemType) => {
  return item.key === current.value?.key
}
</script>
<template>
  <nav class="flex flex-1 flex-col p-1" aria-label="Sidebar">
    <ul role="list" class="space-y-1">
      <li v-for="item in items">
        <div v-if="isDividerItem(item)" class="bg-muted -mx-1 my-1 h-px" />
        <div v-if="isGroupItem(item)" class="text-xs font-semibold leading-6 text-slate-400">{{ item.label }}</div>
        <a
          v-if="isMenuItem(item)"
          :class="[
            isCurrent(item) ? 'text-primary-600 bg-gray-50' : 'hover:text-primary-600 text-gray-700 hover:bg-gray-50',
            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
          ]"
        >
          <component
            :is="item.icon"
            :class="[
              isCurrent(item) ? 'text-primary-600' : 'group-hover:text-primary-600 text-gray-400',
              'h-6 w-6 shrink-0',
            ]"
            aria-hidden="true"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
