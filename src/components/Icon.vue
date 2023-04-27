<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'TIcon',
  props: {
    size: {
      type: [String, Number] as PropType<string | number>,
    },
    spin: Boolean,
  },
  setup(props) {
    const iconSize = computed(() => {
      const sizePx = typeof props.size === 'number' ? `${props.size}px` : props.size
      return sizePx ? { width: sizePx, height: sizePx } : {}
    })
    return {
      iconSize,
    }
  },
})
</script>
<template>
  <span role="img" class="t-icon" :class="{ 't-icon-spin': spin }" :style="iconSize">
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
