<template>
  <div class="el-color-picker">
    <div class="el-color-picker__main">
      <color-panel :color="hsvColor" @change="onChange" />
      <hue-slider :color="hsvColor" @change="onChange" />
    </div>
    <alpha-slider :color="hsvColor" @change="onChange" />
  </div>
</template>
<script lang="ts">
import { App, defineComponent, computed } from 'vue'
import vptypes from 'vptypes'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'
// import { parseColor } from '../../utils/Color'
import { TinyColor } from '@ctrl/tinycolor'
import { HSVAColor } from './core'

const EColorPicker = defineComponent({
  name: 'EColorPicker',
  components: {
    ColorPanel,
    HueSlider,
    AlphaSlider,
  },
  props: {
    modelValue: vptypes.string(),
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const hsvColor = computed<HSVAColor>(() => {
      const l = new TinyColor(props.modelValue).toHsv()
      // console.log(l)

      return l
    })
    const onChange = (color: HSVAColor) => {
      emit('update:modelValue', new TinyColor(color).toHexString())
    }
    return {
      hsvColor,
      onChange,
    }
  },
})

EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}

export default EColorPicker
</script>
