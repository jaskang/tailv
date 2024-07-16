<script setup lang="ts">
import { type PropType } from 'vue'
import MenuItem from './MenuItem.vue'
import { isDividerItem, isRawItem, isTitleItem, type MenuItemRawType, type MenuItemType } from './types'

defineOptions({ name: 'Menu' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  title: String,
  current: String,
  items: {
    type: Array as PropType<MenuItemType[]>,
    default: () => [],
  },
})

const isCurrent = (item: MenuItemRawType) => {
  return item.key === props.current
}
</script>
<template>
  <nav class="grid gap-1 p-1">
    <template v-for="item in items" :key="item">
      <div v-if="isDividerItem(item)" class="menu__divider h-[1px] w-full shrink-0 bg-border" />
      <div v-if="isTitleItem(item)" class="menu__title text-mute-fg px-3 text-xs font-medium leading-6">
        {{ item.label }}
      </div>
      <MenuItem class="menu__item" v-if="isRawItem(item)" :item="item" :current="current" />
    </template>
  </nav>
</template>
