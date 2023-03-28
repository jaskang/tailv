<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  size: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  spin: Boolean,
})

const style = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
}))
</script>
<template>
  <span role="img" class="e-icon" :class="{ 'e-icon-spin': props.spin }" :style="style">
    <slot />
  </span>
</template>
<style lang="scss">
@keyframes e-icon-spin {
  100% {
    transform: rotate(360deg);
  }
}

.e-icon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  font-size: 1em;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > svg {
    width: 1em;
    height: 1em;
  }
  &-spin svg {
    animation: e-icon-spin 1s infinite linear;
  }

  &-rtl {
    transform: scaleX(-1);
  }
}
</style>
