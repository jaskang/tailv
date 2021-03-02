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
import VpTypes from 'vptypes'
import { computed, defineComponent } from 'vue'
import useDraggable from '../../../hooks/useDraggable'

const ColorPanel = defineComponent({
  name: 'ColorPanel',
  components: {},
  props: {
    color: VpTypes.hexColor().def('#FF0000').isRequired,
  },
  setup(props) {
    const [targetRef, handleRef, { delta }] = useDraggable({
      viewport: true,
    })
    const background = computed(() => {
      return 'hsl(' + props.color.get('hue') + ', 100%, 50%)'
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
