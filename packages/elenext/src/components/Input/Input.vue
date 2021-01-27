<template>
  <div
    :class="{
      'el-input': true,
      'has-prefix': hasPrefix,
      'has-suffix': hasSuffix || clearable,
      'is-focus': isFocus,
    }"
  >
    <input
      ref="inputEl"
      type="text"
      class="el-input__inner"
      :readonly="!allowInput"
      :value="innerValue"
      @input="inputHandler"
      @focus="focusHandler"
      @blur="blurHandler"
      @change="changeHandler"
    />
    <div v-if="hasPrefix" class="el-input__prefix">
      <slot name="prefix">
        {{ prefix }}
      </slot>
    </div>
    <div v-if="hasSuffix" class="el-input__suffix">
      <slot name="suffix">
        {{ suffix }}
      </slot>
    </div>
    <div
      v-else-if="clearable"
      v-show="modelValue"
      class="el-input__suffix el-input__suffix--close"
      @click="clearHandler"
    >
      <IconXCircleFill />
    </div>
  </div>
</template>
<script lang="ts">
import { App, computed, defineComponent, ref, watch } from 'vue'
import { IconXCircleFill } from '@elenext/icons'
import { VpTypes } from 'vptypes'

const EInput = defineComponent({
  name: 'EInput',
  components: {
    IconXCircleFill,
  },
  props: {
    modelValue: VpTypes.string(),
    prefix: VpTypes.string(),
    suffix: VpTypes.string(),
    clearable: VpTypes.bool(),
    disabled: VpTypes.bool(),
    allowInput: VpTypes.bool().def(true),
  },
  emits: ['update:modelValue', 'input', 'focus', 'blur', 'change'],
  setup(props, { attrs, slots, emit }) {
    const inputEl = ref<HTMLInputElement>()
    const isFocus = ref(false)
    const hasPrefix = computed(() => slots.prefix || props.prefix)
    const hasSuffix = computed(() => slots.suffix || props.suffix)
    const innerValue = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (value, oldValue) => {
        innerValue.value = value
      }
    )

    const updateEmit = value => {
      emit('update:modelValue', value)
      emit('input', value)
    }
    const inputHandler = (event: Event) => {
      const { value } = event.target as HTMLInputElement
      innerValue.value = value
      updateEmit(value)
    }
    const focusHandler = (event: any) => {
      isFocus.value = true
      emit('focus', event)
    }
    const blurHandler = (event: any) => {
      isFocus.value = false
      emit('blur', event)
    }

    const changeHandler = (event: any) => {
      emit('change', event)
    }
    const clearHandler = (event: any) => {
      emit('update:modelValue', '')
    }
    return {
      inputEl,
      hasPrefix,
      hasSuffix,
      isFocus,
      innerValue,
      inputHandler,
      focusHandler,
      blurHandler,
      changeHandler,
      clearHandler,
    }
  },
})
EInput.install = (app: App): void => {
  app.component(EInput.name, EInput)
}
export default EInput
</script>
