<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'Badge' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  color: String,
})
</script>
<template>
  <span
    class="inline-flex items-center rounded-md bg-slate-50 py-1 px-2 text-xs font-medium text-slate-600 ring-1 ring-gray-500/10 ring-inset"
  >
    <slot />
  </span>
</template>
