<script setup lang="ts">
defineOptions({ name: 'SpaceCompact' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div
    class="t-space-compact flex items-center *:-me-[1px] *:rounded-none [&>:last-child]:rounded-r-md [&>:first-child]:rounded-l-md"
  >
    <slot />
  </div>
</template>
