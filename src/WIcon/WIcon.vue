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
  <span role="img" class="e-icon" :class="{ 'e-icon-spin': props.spin }" :style="iconSize">
    <slot />
  </span>
</template>
<style lang="scss">
@keyframes e-icon-spin {
  100% {
    transform: rotate(360deg);
  }
}
.e-svg-spin {
  animation: e-icon-spin 1s infinite linear;
}
.e-icon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  height: 1em;
  width: 1em;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  &-spin svg {
    animation: e-icon-spin 1s infinite linear;
  }
}
</style>
