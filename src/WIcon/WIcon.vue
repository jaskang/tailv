<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  size: {
    type: [String, Number] as PropType<string | number>,
  },
  spin: Boolean,
})

const iconSize = computed(() => {
  const sizePx = typeof props.size === 'number' ? `${props.size}px` : props.size
  return sizePx ? { width: sizePx, height: sizePx } : {}
})
</script>
<template>
  <span role="img" class="w-icon" :class="{ 'w-icon-spin': props.spin }" :style="iconSize">
    <slot />
  </span>
</template>
