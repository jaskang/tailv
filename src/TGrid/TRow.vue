<script setup lang="ts">
import { useCls } from '@/utils/classNames'
import type { PropType } from 'vue'

const props = defineProps({
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
    default: 'top',
  },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'>,
    default: 'start',
  },
  gutter: [Number, String] as PropType<number | string>,
  wrap: Boolean,
})

const cls = useCls('t-row', () => ({
  align: props.align,
  justify: props.justify,
  gutter: props.gutter,
  wrap: props.wrap,
}))
</script>

<template>
  <div
    class="t-row"
    :style="{
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
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
    }"
  >
    <slot />
  </div>
</template>
<style lang="scss">
.t-row {
  display: flex;
}
</style>
