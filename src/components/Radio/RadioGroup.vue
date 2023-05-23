<script setup lang="ts">
import { defineComponent, provide, ref, toRef, type ExtractPropTypes, computed } from 'vue'
import { type RadioGroupContext } from './Radio'
import { PropTypes } from '@/utils'
import { useControllable } from '@/hooks/controllable'

defineOptions({ name: 'TRadioGroup' })
const emit = defineEmits<{ 'update:value': [any]; change: [any] }>()
const props = defineProps({ value: PropTypes.any(), name: PropTypes.string().def(''), disabled: Boolean })

const [value, setValue] = useControllable(
  () => props.value,
  val => {
    emit('update:value', val)
    emit('change', val)
  },
  false
)

provide<RadioGroupContext>('RadioGroupContext', {
  props: computed(() => {
    return {
      value: value.value,
      name: props.name,
      disabled: props.disabled,
    }
  }),
  onRadioChange: (val: any) => {
    setValue(val)
  },
})
</script>

<template>
  <slot />
</template>
