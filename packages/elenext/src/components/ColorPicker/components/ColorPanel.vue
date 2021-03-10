<template>
  <div
    ref="targetRef"
    class="el-color-panel"
    :style="{
      backgroundColor: background,
    }"
  >
    <div class="el-color-panel__white"></div>
    <div class="el-color-panel__black"></div>
    <div ref="handleRef" class="el-color-panel__cursor" :style="style">
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watchEffect } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'

const ColorPanel = defineComponent({
  name: 'ColorPanel',
  components: {},
  props: {
    hue: vptypes.number().isRequired,
    saturation: vptypes.number().isRequired,
    value: vptypes.number().isRequired,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const [targetRef, handleRef, { delta, style, limits }] = useDraggable({
      viewport: true,
      onInit({ width, height }) {
        return {
          x: props.saturation * width,
          y: (1 - props.value) * height,
        }
      },
    })
    const background = computed(() => {
      return 'hsl(' + props.hue + ', 100%, 50%)'
    })
    watchEffect(() => {
      if (delta.value && limits.value) {
        emit('change', {
          s: delta.value.x / limits.value.maxX,
          v: 1 - delta.value.y / limits.value.maxY,
        })
      }
    })
    return {
      targetRef,
      handleRef,
      background,
      delta,
      style,
    }
  },
})

export default ColorPanel
</script>
