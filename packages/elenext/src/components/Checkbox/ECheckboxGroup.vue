<template>
  <span class="el-checkbox-group">
    <slot />
  </span>
</template>
<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { useChildren } from '../../hooks/useParent'
import { VpTypes } from 'vptypes'

import { CHECKBOXGROUP_IJK } from './core'

const ECheckboxGroup = defineComponent({
  name: 'ECheckboxGroup',
  props: {
    modelValue: VpTypes.array().isRequired,
    disabled: VpTypes.bool(),
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    useChildren(CHECKBOXGROUP_IJK, {
      modelValue: computed(() => props.modelValue),
      disabled: computed(() => props.disabled),
      change: value => {
        emit('change', value)
        emit('update:modelValue', value)
      },
    })
    return {}
  },
})
ECheckboxGroup.install = (app: App): void => {
  app.component(ECheckboxGroup.name, ECheckboxGroup)
}
export default ECheckboxGroup
</script>
