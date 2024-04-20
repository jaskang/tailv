<script setup lang="ts">
defineOptions({ name: 'SpaceCompact' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div
    class="t-space-compact flex items-center *:-me-[1px] *:rounded-none [&>:first-child]:rounded-l-md [&>:last-child]:rounded-r-md"
  >
    <slot />
  </div>
</template>
