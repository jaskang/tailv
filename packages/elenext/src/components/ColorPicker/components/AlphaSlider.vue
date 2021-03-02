<template>
  <div ref="targetRef" class="el-color-alpha-slider">
    <div
      class="el-color-alpha-slider__bar"
      style="background: linear-gradient(to right, rgba(255, 69, 0, 0) 0%, rgb(255, 69, 0) 100%)"
    ></div>
    <div ref="handleRef" class="el-color-alpha-slider__thumb" :style="{ left: delta.x + 'px', top: '0px' }"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'
import { Hsva } from '../../../utils/Color'

const AlphaSlider = defineComponent({
  name: 'AlphaSlider',
  props: {
    color: vptypes.object<Hsva>().isRequired,
  },
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
export default AlphaSlider
</script>
