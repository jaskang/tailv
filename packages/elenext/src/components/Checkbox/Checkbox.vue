<template>
  <label
    class="el-checkbox"
    :class="{
      'is-focus': isFocus,
      'is-indeterminate': indeterminate,
      'is-checked': isChecked,
      'is-disabled': isDisabled,
    }"
  >
    <input
      ref="inputElRef"
      :checked="isChecked"
      :name="name"
      :disabled="disabled"
      class="el-checkbox__input"
      type="checkbox"
      aria-hidden="true"
      :tabindex="-1"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @change="changeHandler"
    />
    <span class="el-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang="ts">
import { App, computed, defineComponent, ref } from 'vue'
import { useParent } from '../../hooks/useParent'

import { CHECKBOXGROUP_IJK } from './core'
import { VpTypes } from '../../utils/vptypes'

const ECheckbox = defineComponent({
  name: 'ECheckbox',
  components: {},
  props: {
    modelValue: VpTypes.oneOfType([VpTypes.bool(), VpTypes.array()]),
    label: VpTypes.string(),
    value: VpTypes.any(),
    indeterminate: VpTypes.bool(),
    disabled: VpTypes.bool(),
    name: VpTypes.string(),
    size: VpTypes.string(),
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const { parent } = useParent(CHECKBOXGROUP_IJK)
    const inputElRef = ref<HTMLInputElement>()
    const isFocus = ref(false)
    const isDisabled = computed(() => {
      return parent?.disabled.value || props.disabled
    })

    const isChecked = computed(() => {
      if (parent) {
        return parent.modelValue.value.indexOf(props.value) !== -1
      }
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.indexOf(props.value) !== -1
      } else {
        return props.modelValue
      }
    })

    const changeHandler = e => {
      if (parent || Array.isArray(props.modelValue)) {
        const _oldVal = parent ? parent?.modelValue.value : (props.modelValue as any[])
        const _set = new Set(_oldVal || [])
        if (isChecked.value) {
          _set.delete(props.value)
        } else {
          _set.add(props.value)
        }
        const val = Array.from(_set)
        emit('change', !isChecked.value)
        if (parent) {
          parent.change(val)
        } else {
          emit('update:modelValue', val)
        }
      } else {
        emit('change', !isChecked.value)
        emit('update:modelValue', !isChecked.value)
      }
    }

    return {
      inputElRef,
      isChecked,
      isFocus,
      isDisabled,
      changeHandler,
    }
  },
})
ECheckbox.install = (app: App): void => {
  app.component(ECheckbox.name, ECheckbox)
}
export default ECheckbox
</script>
