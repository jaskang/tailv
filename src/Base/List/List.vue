<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { IListItem } from './types'

defineOptions({ name: 'TList' })
defineProps({
  current: String,
  items: Array as PropType<IListItem[]>,
  deep: { type: Number, default: 0 },
  itemClass: String,
})
const emit = defineEmits<{ select: [item: IListItem, deep: number] }>()
const slots = defineSlots<{ item(props: { item: IListItem; deep: number; active: boolean }): any }>()

const selectHandler = (item: IListItem, deep: number) => {
  emit('select', item, deep)
}
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.key" @click="selectHandler(item, deep)">
      <slot name="item" :item="item" :deep="deep" :active="current === item.key"></slot>
      <TList
        v-if="item.children && item.children.length > 0"
        :items="item.children"
        :deep="deep + 1"
        @select="selectHandler"
      >
        <template #item="props">
          <slot name="item" v-bind="props" />
        </template>
      </TList>
    </li>
  </ul>
</template>
