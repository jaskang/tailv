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
    class="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
  >
    <slot />
  </span>
</template>
