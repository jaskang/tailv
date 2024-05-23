<script setup lang="ts" generic="T extends IListItemNormal">
import { type PropType } from 'vue'

import ListBoxItem from './ListBoxItem.vue'
import { type IListItem, type IListItemNormal, isDividerItem, isGroupItem } from './utils'

defineOptions({ name: 'ListBox' })
const emit = defineEmits<{ click: [T] }>()
const slots = defineSlots<{ default?(props: { item: T }): any }>()
const props = defineProps({
  items: Array as PropType<IListItem<T>[]>,
  indexKey: {
    type: String,
    default: 'key',
  },
})
</script>
<template>
  <div class="space-y-1 p-1 ring-1 ring-border">
    <template v-for="(item, i) in props.items">
      <div v-if="isDividerItem(item)" class="-mx-1 my-1 h-px bg-border" :key="item.type + i"></div>
      <div v-if="isGroupItem(item)" class="-mx-1 my-1 border-b border-t border-border p-1" :key="item.label">
        <div class="h-8 px-2 text-sm font-medium leading-7 text-default-500">{{ item.label }}</div>
        <div class="space-y-1">
          <ListBoxItem
            v-for="groupItem in item.children"
            :key="groupItem[indexKey as 'label']"
            :item="groupItem"
            @click="emit('click', groupItem as T)"
          >
            <template #default="itemProps" v-if="slots.default">
              <slot v-bind="itemProps as any" />
            </template>
          </ListBoxItem>
        </div>
      </div>
      <ListBoxItem v-else :item="item as any" @click="emit('click', item as T)" :key="(item as any)[indexKey]">
        <template #default="itemProps" v-if="slots.default">
          <slot v-bind="itemProps as any" />
        </template>
      </ListBoxItem>
    </template>
  </div>
</template>
