<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed, type PropType } from 'vue'
import type { IIndentItem } from './types'

defineOptions({ name: 'TIndentList' })
defineProps({
  items: Array as PropType<IIndentItem<T>[]>,
  deep: { type: Number, default: 0 },
})
const slots = defineSlots<{ item(props: { item: IIndentItem<T>; deep: number }): any }>()
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.key">
      <slot name="item" :item="item" :deep="deep"></slot>
      <TIndentList v-if="item.children && item.children.length > 0" :items="item.children" :deep="deep + 1">
        <template #item="props">
          <slot name="item" v-bind="props" />
        </template>
      </TIndentList>
    </li>
  </ul>
</template>
