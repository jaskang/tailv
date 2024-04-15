<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { IAnchorItem } from './types'
import { List, type IListItem } from '../Base'
import { toListItem, findAnchorItem, getItemOffset } from '@/Anchor/utils'

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [key: string, item: IAnchorItem] }>()
const props = defineProps({
  current: String,
  items: {
    type: Array as PropType<IAnchorItem[]>,
    default: () => [],
  },
})

const items = computed(() => toListItem(props.items))
const selectHandler = (item: IListItem, deep: number) => {
  emit('change', item.key, findAnchorItem(props.items, item.key)!)
}

const inkOffset = computed(() => {
  const offset = getItemOffset(props.items, props.current)
  return offset >= 0 ? `translate3D(0, ${offset * 1.75}rem , 0)` : ''
})
</script>
<template>
  <div class="relative">
    <List class="border-l-2 border-slate-200 text-sm leading-6" :items :current>
      <template #item="{ item, deep, active }">
        <div
          class="group cursor-pointer py-1"
          :style="{ paddingLeft: deep + 1 + 'rem' }"
          @click="selectHandler(item, deep)"
        >
          <a
            class="block text-sm text-slate-700 no-underline hover:text-slate-900 data-[active=true]:font-semibold data-[active=true]:text-primary-500 hover:data-[active=true]:text-primary-500"
            :data-active="active"
            :href="item.link"
            :target="item.target"
          >
            {{ item.label || item.key }}
          </a>
        </div>
      </template>
    </List>
    <div
      v-if="inkOffset"
      class="absolute left-0 top-1 h-5 w-[2px] rounded-sm bg-primary-500 transition-all"
      :style="{ transform: inkOffset }"
    ></div>
  </div>
</template>
