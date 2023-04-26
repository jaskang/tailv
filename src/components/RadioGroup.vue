<script lang="ts">
import { defineComponent, provide, ref, toRef, type ExtractPropTypes, computed } from 'vue'
import { type RadioGroupContext } from './Radio'
import { PropTypes } from '@/utils'
import { useControllable } from '@/hooks/controllable'

export default defineComponent({
  name: 'TRadioGroup',
  props: {
    value: PropTypes.any(),
    name: PropTypes.string().def(''),
    disabled: Boolean,
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const [value, setValue] = useControllable(
      computed(() => props.value),
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
  },
})
</script>
<template>
  <slot />
</template>
