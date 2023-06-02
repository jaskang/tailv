import {
  ref,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
  type ComputedRef,
  provide,
} from 'vue'

import { useTheme } from '@/theme'
import { PropTypes } from '@/utils'
import { useControllable } from '@/hooks/controllable'

const props = {
  value: PropTypes.any(),
  name: PropTypes.string().def(''),
  disabled: Boolean,
}

export type RadioGroupProps = ExtractPropTypes<typeof props>

export type RadioGroupPublicProps = ExtractPublicPropTypes<typeof props>

export interface RadioGroupContext {
  props: ComputedRef<{
    value: any
    name: string
    disabled: boolean
  }>
  onRadioChange: (e: any) => void
}

export const RadioGroup = defineComponent({
  name: 'TRadioGroup',
  props,
  emits: {
    'update:value': (val: any) => true,
    change: (val: any) => true,
  },
  setup(props, { slots, emit }) {
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
    return () => slots.default?.()
  },
})
