<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from 'vue'

export default defineComponent({
  name: 'TRow',
  props: {
    align: {
      type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
      default: 'start',
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'>,
      default: 'start',
    },
    gap: String as PropType<string>,
    wrap: Boolean,
  },
  setup(props) {
    const style = computed<StyleValue>(() => ({
      alignItems: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      }[props.align],
      justifyContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly',
        stretch: 'stretch',
      }[props.justify],
      gap: props.gap,
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
    }))
    return {
      style,
    }
  },
})
</script>

<template>
  <div class="t-row" :style="style">
    <slot />
  </div>
</template>
<style lang="scss">
.t-row {
  display: flex;
}
</style>
