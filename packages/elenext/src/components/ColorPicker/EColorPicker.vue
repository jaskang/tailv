<template>
  <div class="el-color-picker">
    <div class="el-color-picker__main">
      <color-panel :saturation="saturation" :value="value" :hue="hue" @change="onValueChange" />
      <hue-slider :hue="hue" @change="onHueChange" />
    </div>
    <alpha-slider v-if="alpha" :alpha="alpha" :color="hexColor" @change="onHueChange" />
  </div>
</template>
<script lang="ts">
import { App, computed, defineComponent, ref, watchEffect } from 'vue'
import vptypes from 'vptypes'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'
// import { parseColor } from '../../utils/Color'
import { TinyColor } from '@ctrl/tinycolor'

const EColorPicker = defineComponent({
  name: 'EColorPicker',
  components: {
    ColorPanel,
    HueSlider,
    AlphaSlider,
  },
  props: {
    modelValue: vptypes.string().def('#ffffff'),
    mode: vptypes.oneOfString(['hex', 'hsv', 'rgb']).def('hex'),
    alpha: vptypes.bool(),
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const initColor = new TinyColor(props.modelValue).toHsv()

    const hue = ref(initColor.h)
    const saturation = ref(initColor.s)
    const value = ref(initColor.v)
    const alpha = ref(initColor.a)

    const hexColor = computed(() => {
      const colorObj = new TinyColor({
        h: hue.value,
        s: saturation.value,
        v: value.value,
        a: alpha.value,
      })
      return colorObj.toHexString()
    })

    const onValueChange = ({ s, v }: { s: number; v: number }) => {
      saturation.value = s
      value.value = v
    }
    const onHueChange = (h: number) => {
      hue.value = h
    }

    watchEffect(() => {
      emit('update:modelValue', hexColor.value)
    })

    watchEffect(
      () => {
        if (props.modelValue !== hexColor.value) {
          const newHsvColor = new TinyColor(props.modelValue).toHsv()
          hue.value = newHsvColor.h
          saturation.value = newHsvColor.s
          value.value = newHsvColor.v
          alpha.value = newHsvColor.a
        }
      },
      { flush: 'post' }
    )

    return {
      hue,
      saturation,
      value,
      onHueChange,
      onValueChange,
      hexColor,
    }
  },
})

EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}

export default EColorPicker
</script>
