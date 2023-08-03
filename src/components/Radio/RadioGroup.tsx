import {
  computed,
  type ComputedRef,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  provide,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'
import { useTheme } from '@/theme'

const props = {
  value: [String, Number],
  name: { type: String, default: '' },
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
    const [val, setVal] = useControllable(
      () => props.value,
      val => {
        emit('update:value', val)
        emit('change', val)
      }
    )

    provide<RadioGroupContext>('RadioGroupContext', {
      props: computed(() => {
        return {
          value: val.value,
          name: props.name,
          disabled: props.disabled,
        }
      }),
      onRadioChange: (val: any) => {
        setVal(val)
      },
    })
    return () => slots.default?.()
  },
})
