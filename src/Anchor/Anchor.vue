<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { IAnchorItem } from './types'
import { IndentList } from '../Base'
import { getAnchorOffset } from './utils'

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [item: IAnchorItem, deep: number] }>()
const props = defineProps({
  current: String,
  items: {
    type: Array as PropType<IAnchorItem[]>,
    default: () => [],
  },
})

const selectHandler = (item: IAnchorItem, deep: number) => {
  emit('change', item, deep)
}

const inkOffset = computed(() => {
  const offset = getAnchorOffset(props.items, props.current)
  return offset >= 0 ? `calc(${offset} * 1.75rem)` : ''
})
</script>
<template>
  <div class="relative">
    <IndentList class="border-l-2 border-slate-200 text-sm leading-6 dark:border-slate-700" :items :current>
      <template #item="{ item, deep }">
        <div
          class="group cursor-pointer py-1"
          :style="{ paddingLeft: deep + 1 + 'rem' }"
          @click="selectHandler(item, deep)"
        >
          <a
            class="block text-sm text-slate-700 no-underline hover:text-primary-500 data-[active=true]:font-medium data-[active=true]:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 dark:data-[active=true]:text-primary-400"
            :data-active="current === item.id"
            :href="item.link"
            :target="item.target"
          >
            {{ item.title || item.id }}
          </a>
        </div>
      </template>
    </IndentList>
    <div
      v-if="inkOffset"
      class="bg-primary absolute left-0 top-1 h-5 w-[2px] translate-y-[--ink-offset] rounded-sm transition-all"
      :style="{ '--ink-offset': inkOffset }"
    ></div>
  </div>
</template>
