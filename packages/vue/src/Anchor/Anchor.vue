<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

export type IAnchorItem = {
  key: string
  label?: string
  href?: string
  children?: IAnchorItem[]
}

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  items: Array as PropType<IAnchorItem[]>,
  deep: { type: Number, default: 0 },
})
</script>
<template>
  <div class="space-y-2 border-l border-gray-100 text-gray-700 dark:border-gray-800">
    <div class="-ml-px" v-for="item in items">
      <span
        class="block cursor-pointer border-l-2 border-transparent hover:border-primary-500"
        :style="{
          paddingLeft: deep + 1 + 'rem',
        }"
      >
        {{ item.label || item.key }}
      </span>
      <Anchor v-if="item.children" class="mt-2" :items="item.children" :deep="deep + 1" />
    </div>
  </div>
</template>
