<script setup lang="ts">
import { type PropType, provide } from 'vue'
import { CheckboxGroupInjectKey } from './types'
import { useModelValue } from '@/use/useModelValue'

defineOptions({ name: 'TCheckboxGroup' })
const props = defineProps({ name: String, value: Array as PropType<unknown[]>, disabled: Boolean })
const emit = defineEmits<{ 'update:value': [unknown[]]; change: [unknown[]] }>()

const [modelValue, setModelValue] = useModelValue<unknown[]>(props, {
  defaultValue: [],
  onChange: (val: unknown[]) => {
    emit('change', val)
  },
})
provide(CheckboxGroupInjectKey, {
  value: modelValue,
  add: (val: unknown) => {
    if (modelValue.value.indexOf(val) === -1) {
      setModelValue([...modelValue.value, val])
    }
  },
  remove: (val: unknown) => {
    const index = modelValue.value.indexOf(val)
    if (index !== -1) {
      const r = [...modelValue.value]
      r.splice(index, 1)
      setModelValue(r)
    }
  },
})
</script>
<template>
  <div>
    <slot />
  </div>
</template>
