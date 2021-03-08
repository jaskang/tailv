<template>
  <div ref="targetRef" class="el-color-hue-slider">
    <div class="el-color-hue-slider__bar"></div>
    <div
      ref="handleRef"
      class="el-color-hue-slider__thumb"
      :style="{
        left: '0px',
        top: delta.y + 'px',
      }"
    ></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'
import { HSVAColor } from '../core'

const HueSlider = defineComponent({
  name: 'HueSlider',
  props: {
    color: vptypes.object<HSVAColor>().isRequired,
  },
  emits: ['change'],
  setup(props, { attrs, slots, emit }) {
    const [targetRef, handleRef, { delta, limits }] = useDraggable({
      viewport: true,
      onInit({ height }) {
        return {
          x: 0,
          y: (props.color.h / 360) * height,
        }
      },
    })
    watchEffect(() => {
      if (delta.value && limits.value) {
        const color: HSVAColor = {
          h: (delta.value.y / limits.value.maxY) * 360,
          s: props.color.s,
          v: props.color.v,
          a: props.color.a,
        }
        console.log(color)
        emit('change', color)
      }
    })
    return {
      targetRef,
      handleRef,
      delta,
    }
  },
})
export default HueSlider
</script>
