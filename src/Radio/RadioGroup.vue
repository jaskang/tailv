<script setup lang="ts">
import { provide } from 'vue'
import { RadioGroupInjectKey } from './types'
import { useModelValue } from '@/use/useModelValue'

defineOptions({ name: 'RadioGroup' })
const emit = defineEmits<{ 'update:value': [unknown]; change: [unknown] }>()

const props = defineProps({ name: String, value: null, disabled: Boolean })

const [modelValue, setModelValue] = useModelValue<unknown>(props, {
  onChange: val => {
    emit('change', val)
  },
})
provide(RadioGroupInjectKey, {
  value: modelValue,
  select: (val: unknown) => {
    setModelValue(val)
  },
})
</script>
<template>
  <div>
    <slot />
  </div>
</template>
