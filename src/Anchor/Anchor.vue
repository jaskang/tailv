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
</script>
<template>
  <List class="border-l border-slate-200 text-sm leading-6 text-slate-700" :items :current @select="selectHandler">
    <template #item="{ item, deep, active }">
      <div class="group -ml-px flex py-1">
        <a
          class="flex cursor-pointer border-l-2 border-transparent text-slate-700 no-underline hover:text-slate-900 data-[active=true]:border-primary-400 data-[active=true]:font-semibold data-[active=true]:text-primary-500 hover:data-[active=true]:text-primary-500"
          :style="{ paddingLeft: deep + 1 + 'rem' }"
          :data-active="active"
          :href="item.link"
          :target="item.target"
        >
          {{ item.label || item.key }}
        </a>
      </div>
    </template>
  </List>
</template>
