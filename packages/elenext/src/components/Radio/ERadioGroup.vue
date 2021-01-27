<template>
  <span class="el-radio-group">
    <slot />
  </span>
</template>
<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { useChildren } from '../../hooks/useParent'
import { VpTypes } from 'vptypes'

import { RADIOGROUP_IJK } from './core'

const ERadioGroup = defineComponent({
  name: 'ERadioGroup',
  props: {
    modelValue: VpTypes.any(),
    disabled: VpTypes.bool(),
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    useChildren(RADIOGROUP_IJK, {
      modelValue: computed(() => props.modelValue),
      disabled: computed(() => props.disabled),
      change: value => {
        emit('update:modelValue', value)
        emit('change', value)
      },
    })
    return {}
  },
})
ERadioGroup.install = (app: App): void => {
  app.component(ERadioGroup.name, ERadioGroup)
}
export default ERadioGroup
</script>
