<template>
  <div ref="triggerRef" class="el-color-picker">
    <div
      class="el-color-picker__inner"
      :style="{ background: modelValue, color: innerColor.isDark ? '#fff' : undefined }"
    >
      <IconChevronDown />
    </div>
    <input hidden :value="modelValue" />
  </div>

  <e-popper
    v-model="dropdownVisible"
    popper-class="el-color-dropdown-popper"
    trigger="click"
    placement="bottom"
    :visible-arrow="true"
    :reference="triggerRef"
  >
    <template #content>
      <div class="el-color-popper">
        <div class="el-color-popper__main">
          <ColorPanel
            :saturation="innerColor.hsv.s"
            :value="innerColor.hsv.v"
            :hue="innerColor.hsv.h"
            @change="onValueChange"
          />
          <HueSlider :hue="innerColor.hsv.h" @change="onHueChange" />
        </div>
        <AlphaSlider v-if="alpha" :alpha="alpha" :hue="innerColor.hsv.a" @change="onAlphaChange" />
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
  </e-popper>
</template>
<script lang="ts">
import { App, computed, defineComponent, reactive, ref, watch } from 'vue'
import vptypes from 'vptypes'
import { EButton } from './../Button'
import { ERow, ECol } from './../Grid'
import ColorPanel from './components/ColorPanel.vue'
import HueSlider from './components/HueSlider.vue'
import AlphaSlider from './components/AlphaSlider.vue'
// import { parseColor } from '../../utils/Color'
import { TinyColor } from '@ctrl/tinycolor'
import { IconChevronDown } from '@elenext/icons'

const convertModelValue = (value: string) => {
  const tiny = new TinyColor(value)
  const hsv = tiny.toHsv()
  console.log(hsv)

  return {
    hsv: {
      h: Number(hsv.h.toFixed(4)),
      s: Number(hsv.s.toFixed(4)),
      v: Number(hsv.v.toFixed(4)),
      a: Number(hsv.a.toFixed(4)),
    },
    format: tiny.format,
    originalInput: value,
    isDark: tiny.isDark(),
  }
}
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
    const triggerRef = ref<HTMLDivElement>()
    const dropdownVisible = ref(false)
    const initValue = convertModelValue(props.modelValue)

    const innerColor = reactive({
      hsv: initValue.hsv,
      format: initValue.format,
      originalInput: initValue.originalInput,
      isDark: initValue.isDark,
    })

    const currentColor = computed(() => {
      const colorObj = new TinyColor(innerColor.hsv)
      return colorObj.toString(innerColor.format)
    })
    console.log(innerColor)
    console.log(currentColor)

    watch(props, (val, oldVal) => {
      if (val.modelValue !== oldVal.modelValue && val.modelValue !== currentColor.value) {
        const newValue = convertModelValue(val.modelValue)
        innerColor.hsv = newValue.hsv
        innerColor.format = newValue.format
        innerColor.originalInput = newValue.originalInput
        innerColor.isDark = newValue.isDark
      }
    })

    const onValueChange = ({ s, v }: { s: number; v: number }) => {
      console.log('onValueChange', s, v)

      innerColor.hsv.s = s
      innerColor.hsv.v = v
    }
    const onHueChange = (h: number) => {
      console.log('onHueChange', h)
      innerColor.hsv.h = h
    }
    const onAlphaChange = (a: number) => {
      console.log('onAlphaChange', a)
      innerColor.hsv.a = a
    }
    const submitHandler = () => {
      emit('update:modelValue', currentColor.value)
      dropdownVisible.value = false
    }
    return {
      innerColor,
      currentColor,
      onHueChange,
      onValueChange,
      onAlphaChange,
      submitHandler,
      triggerRef,
      dropdownVisible,
    }
  },
})

EColorPicker.install = (app: App): void => {
  app.component(EColorPicker.name, EColorPicker)
}

export default EColorPicker
</script>
