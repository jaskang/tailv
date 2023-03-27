<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  size: {
    type: [String, Number] as PropType<string | number>,
  },
  spin: Boolean,
})

const style = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
}))
</script>
<template>
  <span
    role="img"
    class="e-icon"
    :class="{
      'e-icon--spin': props.spin,
    }"
    :style="style"
  >
    <slot />
  </span>
</template>
<style>
.e-icon {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  font-size: theme('fontSize.base');
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.e-icon--spin {
  animation: spin 1s linear infinite;
}

.e-icon > svg {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1;
}
</style>
