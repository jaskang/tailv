<template>
  <div class="el-color-picker">
    <div class="el-color-picker__main">
      <color-panel :color="color" />
      <hue-slider :color="color" />
    </div>
    <alpha-slider :color="color" />
  </div>
</template>
<script lang="ts">
import { App, defineComponent, computed } from 'vue'
import vptypes from 'vptypes'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'
import { parseColor } from '../../utils/Color'

const EColorPicker = defineComponent({
  name: 'EColorPicker',
  components: {
    ColorPanel,
    HueSlider,
    AlphaSlider,
  },
  props: {
    modelValue: vptypes.hexColor(),
  },
  setup(props, { attrs, slots, emit }) {
    const color = computed(() => {
      const l = parseColor(props.modelValue)
      console.log(l)

      return l
    })
    return {
      color,
    }
  },
})

EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}

export default EColorPicker
</script>
