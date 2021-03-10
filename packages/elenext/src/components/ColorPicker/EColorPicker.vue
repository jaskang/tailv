<template>
  <div ref="elRef" class="el-color-picker">
    <div
      class="el-color-picker__inner"
      :style="{ background: modelValue, color: valueColor.isDark ? '#fff' : undefined }"
    >
      <IconChevronDown />
    </div>
    <input hidden :value="modelValue" />
  </div>
  <div class="el-color-popper">
    <div class="el-color-popper__main">
      <color-panel :saturation="innerHsva.s" :value="innerHsva.v" :hue="innerHsva.h" @change="onValueChange" />
      <hue-slider :hue="innerHsva.h" @change="onHueChange" />
    </div>
    <alpha-slider v-if="alpha" :alpha="alpha" :hue="innerHsva.h" @change="onHueChange" />
    <e-row align="middle">
      <e-col flex="auto">
        {{ currentColor }}
      </e-col>
      <e-col>
        <e-button size="small" @click="submitHandler">确定</e-button>
      </e-col>
    </e-row>
  </div>
</template>
<script lang="ts">
import { App, computed, defineComponent, reactive } from 'vue'
import vptypes from 'vptypes'
import { EButton } from './../Button'
import { ERow, ECol } from './../Grid'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'
// import { parseColor } from '../../utils/Color'
import { TinyColor } from '@ctrl/tinycolor'
import { IconChevronDown } from '@elenext/icons'
import { Hsva } from '../../utils/Color'

const EColorPicker = defineComponent({
  name: 'EColorPicker',
  components: {
    ColorPanel,
    HueSlider,
    AlphaSlider,
    EButton,
    ERow,
    ECol,
    IconChevronDown,
  },
  props: {
    modelValue: vptypes.string().def('#ffffff'),
    mode: vptypes.oneOfString(['hex', 'hsv', 'rgb']).def('hex'),
    alpha: vptypes.bool(),
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const valueColor = computed(() => {
      const tiny = new TinyColor(props.modelValue)
      return { hsv: tiny.toHsv(), format: tiny.format, show: props.modelValue, isDark: tiny.isDark() }
    })

    const innerHsva = reactive<Hsva>({
      h: valueColor.value.hsv.h,
      s: valueColor.value.hsv.s,
      v: valueColor.value.hsv.v,
      a: valueColor.value.hsv.a,
    })

    const currentColor = computed(() => {
      const colorObj = new TinyColor({
        h: innerHsva.h,
        s: innerHsva.s,
        v: innerHsva.v,
        a: innerHsva.a,
      })
      return colorObj.toString(valueColor.value.format)
    })

    const onValueChange = ({ s, v }: { s: number; v: number }) => {
      innerHsva.s = s
      innerHsva.v = v
    }
    const onHueChange = (h: number) => {
      innerHsva.h = h
    }

    const submitHandler = () => {
      emit('update:modelValue', currentColor.value)
    }
    return {
      valueColor,
      innerHsva,
      currentColor,
      onHueChange,
      onValueChange,
      submitHandler,
    }
  },
})

EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}

export default EColorPicker
</script>
