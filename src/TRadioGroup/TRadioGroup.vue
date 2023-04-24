<script setup lang="ts">
import { useControllable } from '@/hooks/use-controllable'
import { provide, ref, toRef } from 'vue'
import { RadioGroupContext } from './interface'

const props = defineProps({
  modelValue: [String, Number],
  name: String,
  disabled: Boolean,
})

const emit = defineEmits(['onUpdate:value'])

// const onChange = (ev: RadioChangeEvent) => {
//   const lastValue = stateValue.value
//   const { value } = ev.target
// }

// provide(RadioGroupContext, {
//   value: toRef(props, 'value'),
// })
</script>
<template>
  <slot />
</template>
