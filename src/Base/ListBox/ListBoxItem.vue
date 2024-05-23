<script setup lang="ts">
import { type PropType } from 'vue'

import type { IListItemNormal } from './utils'

import ListBox from './ListBox.vue'

defineOptions({ name: 'ListBoxItem' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(props: { item: IListItemNormal }): any }>()
const props = defineProps({
  item: { type: Object as PropType<IListItemNormal>, required: true },
})
</script>
<template>
  <slot :item="props.item">
    <div
      role="menuitem"
      tabindex="-1"
      :data-disabled="item.disabled"
      class="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm transition-colors hover:bg-default-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <span class="flex-1 overflow-hidden text-ellipsis text-nowrap">
        {{ item.label }}
      </span>
      <span class="ml-auto shrink-0 text-xs tracking-widest opacity-60">⇧⌘P</span>
    </div>
  </slot>
</template>
