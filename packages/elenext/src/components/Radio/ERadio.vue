<template>
  <label
    class="el-radio"
    :class="{
      'is-focus': isFocus,
      'is-checked': isChecked,
      'is-disabled': isDisabled,
    }"
  >
    <span class="el-radio__input">
      <span class="el-radio__icon"></span>
      <input
        ref="inputElRef"
        v-model="model"
        :value="value"
        :name="name"
        :disabled="disabled"
        class="el-radio__original"
        type="radio"
        aria-hidden="true"
        tabindex="-1"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @change="changeHandler"
      />
    </span>
    <span class="el-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang="ts">
import { App, computed, defineComponent, ref } from 'vue'
import { useParent } from '../../hooks/useParent'
import { prop } from '../../utils'
import { RADIOGROUP_IJK } from './core'

const ERadio = defineComponent({
  name: 'ERadio',
  props: {
    modelValue: prop.any(),
    label: prop.string(),
    value: prop.any(),
    disabled: prop.bool(),
    name: prop.string(),
    size: prop.string(),
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const { parent } = useParent(RADIOGROUP_IJK)
    const inputElRef = ref<HTMLInputElement>()
    const isFocus = ref(false)
    const isDisabled = computed(() => {
      return parent?.disabled.value || props.disabled
    })
    const model = computed<any>({
      get() {
        return parent?.modelValue.value || props.modelValue
      },
      set(val) {
        if (parent) {
          parent.change(val)
        } else {
          emit('update:modelValue', val)
        }
        inputElRef.value!.checked = (parent?.modelValue.value || props.modelValue) === props.value
      },
    })
    const isChecked = computed(() => {
      if (parent) {
        return parent.modelValue.value === props.value
      }
      return props.modelValue === props.value
    })

    const changeHandler = (event: Event) => {
      emit('change', props.value)
    }
    return {
      inputElRef,
      isChecked,
      isFocus,
      isDisabled,
      model,
      changeHandler,
    }
  },
})
ERadio.install = (app: App): void => {
  app.component(ERadio.name, ERadio)
}
export default ERadio
</script>
