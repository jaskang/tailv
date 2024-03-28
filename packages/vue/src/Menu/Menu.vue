<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { isDividerItem, isTitleItem, isRawItem, type MenuItemType, type MenuItemRawType } from './types'
import MenuItem from './MenuItem.vue'

defineOptions({ name: 'Menu' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  title: String,
  items: {
    type: Array as PropType<MenuItemType[]>,
    default: () => [],
  },
})

const current = ref<MenuItemRawType>()

const isCurrent = (item: MenuItemRawType) => {
  return item.key === current.value?.key
}
</script>
<template>
  <nav class="grid gap-1 p-1">
    <template v-for="item in items">
      <div v-if="isDividerItem(item)" class="h-[1px] w-full shrink-0 bg-slate-200" />
      <div v-if="isTitleItem(item)" class="px-3 text-xs font-medium leading-6 text-slate-400">{{ item.label }}</div>
      <MenuItem v-if="isRawItem(item)" :item="item" :active="isCurrent(item)" />
    </template>
  </nav>
</template>
