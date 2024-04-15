<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { AnchorItem } from './types'
import { List, type IListItem } from '../Base'

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [key: string, item: AnchorItem] }>()
const slots = defineSlots<{ item?: (_: AnchorItem & { deep: number; isActive: boolean }) => any }>()
const props = defineProps({
  current: String,
  items: Array as PropType<IListItem[]>,
})
const selectHandler = (item: IListItem, deep: number) => {
  emit('change', item.key, item)
}

// 找到 current 在 items 中的位置，每个 item 占 1rem ，有 children 需要递归展开
const getCurrentOffset = (items: IListItem[]) => {
  let offset = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.key === props.current) {
      return offset
    }
    if (item.children && item.children.length > 0) {
      offset += 1
      offset += getCurrentOffset(item.children)
    }
  }
  return 0
}
</script>
<template>
  <div class="relative">
    <List class="border-l-2 border-slate-200 text-sm leading-6" :items :current @select="selectHandler">
      <template #item="{ item, deep, active }">
        <div class="group py-1" :style="{ paddingLeft: deep + 1 + 'rem' }">
          <a
            class="block cursor-pointer text-sm text-slate-700 no-underline hover:text-slate-900 data-[active=true]:font-semibold data-[active=true]:text-primary-500 hover:data-[active=true]:text-primary-500"
            :data-active="active"
            :href="item.link"
            :target="item.target"
          >
            {{ item.label || item.key }}
          </a>
        </div>
      </template>
    </List>
    <div class="absolute left-0 top-0 h-4 w-[2px] bg-primary-500"></div>
  </div>
</template>
