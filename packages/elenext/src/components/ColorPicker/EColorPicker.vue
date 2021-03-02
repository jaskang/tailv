<template>
  <div class="el-color-picker">
    <div class="el-color-picker__main">
      <color-panel :color="modelValue" />
      <hue-slider :color="modelValue" />
    </div>
    <alpha-slider />
  </div>
</template>
<script lang="ts">
import VpTypes from 'vptypes'
import { App, defineComponent } from 'vue'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'

const EColorPicker = defineComponent({
  name: 'EColorPicker',
  components: {
    ColorPanel,
    HueSlider,
    AlphaSlider,
  },
  props: {
    modelValue: VpTypes.hexColor(),
  },
  setup(props, { attrs, slots, emit }) {
    return {}
  },
})
EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}
export default EColorPicker
</script>
