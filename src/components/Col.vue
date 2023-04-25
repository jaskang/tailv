<script setup lang="ts">
import { computed, type PropType, type StyleHTMLAttributes, type StyleValue } from 'vue'

type FlexType = number | 'auto' | 'initial' | 'none'

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }
  return flex
}

const props = defineProps({
  flex: {
    type: [Number, String] as PropType<number | 'auto' | 'none'>,
    default: 'none',
  },
})
const style = computed<StyleValue>(() => {
  const flex = parseFlex(props.flex)
  return {
    flex,
  }
})
</script>
<template>
  <div class="t-col" :style="style">
    <slot />
  </div>
</template>
<style lang="scss">
.t-col {
  position: relative;
}
</style>
