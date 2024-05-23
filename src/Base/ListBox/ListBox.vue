<script setup lang="ts" generic="T extends IListItemNormal">
import { type PropType } from 'vue'

import ListBoxItem from './ListBoxItem.vue'
import { type IListItem, type IListItemGroup, type IListItemNormal, isDividerItem, isGroupItem } from './utils'

defineOptions({ name: 'ListBox' })
const emit = defineEmits<{ click: [T] }>()
const slots = defineSlots<{
  item?(props: { item: T }): any
  group?(props: { item: IListItemGroup<T> }): any
}>()
const props = defineProps({
  items: Array as PropType<IListItem<T>[]>,
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  indexKey: {
    type: String,
    default: 'key',
  },
})
</script>
<template>
  <div class="space-y-1 p-1 text-sm ring-1 ring-border">
    <template v-for="(item, i) in props.items">
      <div v-if="isDividerItem(item)" class="-mx-1 my-1 h-px bg-border" :key="item.type + i"></div>
      <div v-else-if="isGroupItem(item)" class="-mx-1 my-1 border-b border-t border-border p-1" :key="item.label">
        <slot name="group" :item="item">
          <div class="px-2 py-1 font-medium text-default-500">{{ item.label }}</div>
        </slot>
        <div class="mt-1 space-y-1">
          <ListBoxItem
            v-for="groupItem in item.children"
            :key="groupItem[indexKey as 'label']"
            :item="groupItem"
            @click="emit('click', groupItem)"
          >
            <template #default="itemProps" v-if="slots.item">
              <slot name="item" v-bind="itemProps"></slot>
            </template>
          </ListBoxItem>
        </div>
      </div>
      <ListBoxItem v-else :item="item" @click="emit('click', item)" :key="(item as any)[indexKey]">
        <template #default="itemProps" v-if="slots.item">
          <slot name="item" v-bind="itemProps"></slot>
        </template>
      </ListBoxItem>
    </template>
  </div>
</template>
