<script setup lang="ts">
import { provide, toRef, type PropType } from 'vue'
import { RadioGroupInjectKey } from './types'
import { useModelValue } from '@/use/useModelValue'
import { size } from '@floating-ui/vue'

defineOptions({ name: 'RadioGroup' })
const emit = defineEmits<{ 'update:value': [unknown]; change: [unknown] }>()

const props = defineProps({
  name: String,
  value: null,
  disabled: Boolean,
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
})

const [modelValue, setModelValue] = useModelValue<unknown>(props, {
  onChange: val => {
    emit('change', val)
  },
})

provide(RadioGroupInjectKey, {
  size: toRef(props, 'size'),
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
