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
    <div
      ref="handleRef"
      class="el-color-panel__cursor"
      :style="{
        left: delta.x + 'px',
        top: delta.y + 'px',
      }"
    >
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watchEffect } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '@/hooks/useDraggable'
import { HSVAColor } from '../core'

const ColorPanel = defineComponent({
  name: 'ColorPanel',
  components: {},
  props: {
    color: vptypes.object<HSVAColor>().isRequired,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const [targetRef, handleRef, { delta, limits }] = useDraggable({
      viewport: true,
      onInit({ width, height }) {
        return {
          x: props.color.s * width,
          y: (1 - props.color.v) * height,
        }
      },
    })
    const background = computed(() => {
      return 'hsl(' + props.color.h + ', 100%, 50%)'
    })
    watchEffect(() => {
      if (delta.value && limits.value) {
        const color: HSVAColor = {
          h: props.color.h,
          s: delta.value.x / limits.value.maxX,
          v: 1 - delta.value.y / limits.value.maxY,
          a: props.color.a,
        }
        emit('change', color)
      }
    })
    return {
      targetRef,
      handleRef,
      background,
      delta,
    }
  },
})

export default ColorPanel
</script>
