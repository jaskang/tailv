<template>
  <div ref="targetRef" class="el-color-hue-slider">
    <div class="el-color-hue-slider__bar"></div>
    <div ref="handleRef" class="el-color-hue-slider__thumb" :style="style"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'

const HueSlider = defineComponent({
  name: 'HueSlider',
  props: {
    hue: vptypes.number().isRequired,
  },
  emits: ['change'],
  setup(props, { attrs, slots, emit }) {
    const [targetRef, handleRef, { delta, style, limits }] = useDraggable({
      viewport: true,
      direction: 'y',
      onInit({ height }) {
        return {
          x: 0,
          y: (props.hue / 360) * height,
        }
      },
    })
    watchEffect(() => {
      if (delta.value && limits.value) {
        emit('change', (delta.value.y / limits.value.maxY) * 360)
      }
    })
    return {
      targetRef,
      handleRef,
      delta,
      style,
    }
  },
})
export default HueSlider
</script>
