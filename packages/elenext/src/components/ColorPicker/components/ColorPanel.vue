<template>
  <div
    ref="targetRef"
    class="el-color-panel"
    :style="{
      backgroundColor: color,
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
import VpTypes from 'vptypes'
import { defineComponent } from 'vue'
import useDraggable from '../../../hooks/useDraggable'

const ColorPanel = defineComponent({
  name: 'ColorPanel',
  components: {},
  props: {
    color: VpTypes.hexColor().def('#FF0000').isRequired,
  },
  setup() {
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

export default ColorPanel
</script>
