<template>
  <div ref="targetRef" class="el-color-alpha-slider">
    <div class="el-color-alpha-slider__bar" :style="{ background: background }"></div>
    <div ref="handleRef" class="el-color-alpha-slider__thumb" :style="{ left: delta.x + 'px', top: '0px' }"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'

const AlphaSlider = defineComponent({
  name: 'AlphaSlider',
  props: {
    hue: vptypes.number().isRequired,
    alpha: vptypes.number().isRequired,
  },
  setup(props, { attrs, slots, emit }) {
    const [targetRef, handleRef, { delta }] = useDraggable({
      viewport: true,
    })
    const background = computed(() => {
      return 'hsl(' + props.hue + ', 100%, 50%)'
    })
    return {
      background,
      targetRef,
      handleRef,
      delta,
    }
  },
})
export default AlphaSlider
</script>
