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
  <span role="img" class="t-icon" :class="{ 't-icon-spin': props.spin }" :style="iconSize">
    <slot />
  </span>
</template>
<style lang="scss">
.t-icon {
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
    animation: t-spin 1s infinite linear;
  }
}
</style>
