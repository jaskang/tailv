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
import { computed, defineComponent, watchEffect } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'
import { Hsva } from '../../../utils/Color'

const HueSlider = defineComponent({
  name: 'HueSlider',
  props: {
    color: vptypes.object<Hsva>().isRequired,
  },
  emits: ['change'],
  setup(props, { attrs, slots, emit }) {
    const [targetRef, handleRef, { delta, limits }] = useDraggable({
      viewport: true,
    })
    const asa = computed(() => {
      const height = limits.value?.maxY || delta.value.y
      const top = delta.value.y / height
      return top * 360
    })
    watchEffect(() => {
      emit('change', asa.value)
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
