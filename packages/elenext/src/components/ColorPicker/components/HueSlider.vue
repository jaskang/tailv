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
import { defineComponent } from 'vue'
import useDraggable from '../../../hooks/useDraggable'

const HueSlider = defineComponent({
  name: 'HueSlider',
  props: {},
  setup(props, { attrs, slots, emit }) {
    const [targetRef, handleRef, { delta }] = useDraggable({
      viewport: true,
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
