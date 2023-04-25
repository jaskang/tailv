<script setup lang="ts">
import { useCls } from '@/utils/classNames'
import { computed, type PropType } from 'vue'

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

const cssVars = computed(() => ({
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
}))
</script>

<template>
  <div class="t-row">
    <slot />
  </div>
</template>
<style lang="scss">
.t-row {
  display: flex;
  justify-content: v-bind('cssVars.justifyContent');
  align-items: v-bind('cssVars.alignItems');
  flex-wrap: v-bind('cssVars.flexWrap');
  > * + * {
    margin-left: 0px;
    margin-top: 0px;
  }
}
</style>
