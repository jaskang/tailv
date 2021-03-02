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
import { computed, defineComponent } from 'vue'
import vptypes from 'vptypes'
import useDraggable from '../../../hooks/useDraggable'
import { Hsva } from '../../../utils/Color'

const ColorPanel = defineComponent({
  name: 'ColorPanel',
  components: {},
  props: {
    color: vptypes.object<Hsva>().isRequired,
  },
  setup(props) {
    const [targetRef, handleRef, { delta }] = useDraggable({
      viewport: true,
    })
    const background = computed(() => {
      return 'hsl(' + props.color.h + ', 100%, 50%)'
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
