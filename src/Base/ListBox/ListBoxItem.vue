<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({ name: 'ListBoxItem' })
defineSlots<{ default?(props: { item: any }): any }>()
const emit = defineEmits<{ click: [any] }>()

defineProps({
  item: {
    type: Object as PropType<any>,
    required: true,
  },
  active: Boolean,
})
</script>
<template>
  <div
    :data-disabled="item.disabled"
    @click="emit('click', item)"
    class="relative w-full cursor-pointer items-center overflow-hidden rounded text-sm transition-colors hover:bg-default-soft-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  >
    <slot :item="item">
      <div class="flex w-full items-center px-2 py-1.5">
        <span class="flex-1 overflow-hidden text-ellipsis text-nowrap">
          {{ item.label }}
        </span>
      </div>
    </slot>
  </div>
</template>
