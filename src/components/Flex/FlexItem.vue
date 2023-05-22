<script lang="ts">
import { computed, defineComponent, type PropType, type StyleHTMLAttributes, type StyleValue } from 'vue'

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

export default defineComponent({
  name: 'TCol',
  props: {
    flex: {
      type: [Number, String] as PropType<number | 'auto' | 'none'>,
      default: 'none',
    },
  },
  setup(props) {
    const style = computed<StyleValue>(() => {
      const flex = parseFlex(props.flex)
      return {
        flex,
      }
    })
    return {
      style,
    }
  },
})
</script>
<template>
  <div class="t-col relative" :style="style">
    <slot />
  </div>
</template>
