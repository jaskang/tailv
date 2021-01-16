<template>
  <label
    class="el-checkbox"
    :class="{
      'is-focus': isFocus,
      'is-checked': isChecked,
      'is-disabled': isDisabled
    }"
  >
    <span class="el-checkbox__input">
      <span class="el-checkbox__icon"></span>
      <input
        ref="inputElRef"
        v-model="model"
        :value="value"
        :name="name"
        :disabled="disabled"
        class="el-checkbox__original"
        type="radio"
        aria-hidden="true"
        tabindex="-1"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @change="changeHandler"
      />
    </span>
    <span class="el-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang="ts">
import { App, computed, defineComponent, ref } from 'vue'
import { useParent } from '../../hooks/useParent'
import { prop } from '../../utils'
import { CHECKBOXGROUP_IJK } from './core'

const ECheckbox = defineComponent({
  name: 'ECheckbox',
  props: {
    modelValue: prop.any(),
    label: prop.string(),
    value: prop.any(),
    disabled: prop.bool(),
    name: prop.string(),
    size: prop.string()
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const { parent } = useParent(CHECKBOXGROUP_IJK)
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
      }
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
      changeHandler
    }
  }
})
ECheckbox.install = (app: App): void => {
  app.component(ECheckbox.name, ECheckbox)
}
export default ECheckbox
</script>
