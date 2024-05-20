<script setup lang="ts">
import type { ListItem, ListItemType } from '@/Base/List/type'
import { ref, computed, type PropType } from 'vue'

defineOptions({ name: 'ListItem' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  item: { type: Object as PropType<ListItemType>, required: true },
})
</script>
<template>
  <div
    role="menuitem"
    class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-default focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    tabindex="-1"
    data-orientation="vertical"
    data-radix-collection-item=""
  >
    <slot>
      {{ props.item.label }}
      <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
    </slot>
  </div>
</template>
