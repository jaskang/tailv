import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type SlotsType,
  toRef,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'
import { useColorVars } from '@/utils/style'

const props = {
  checked: { type: Boolean, default: undefined },
  disabled: Boolean,
}

export type SwitchProps = ExtractPropTypes<typeof props>

export type SwitchPublicProps = ExtractPublicPropTypes<typeof props>

export const Switch = defineComponent({
  name: 'TSwitch',
  props,
  emits: {
    'update:checked': (value: boolean) => true,
    change: (value: boolean) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    on: () => VNode
    off: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const [checked, setChecked] = useControllable(
      toRef(props, 'checked'),
      val => {
        emit('update:checked', val)
        emit('change', val)
      },
      false
    )

    const cssVars = useColorVars('t-switch', {
      accent: 'primary.500',
      ring: 'primary.500',
    })

    const changeHandler = () => {
      if (props.disabled) return
      console.log('changeHandler')

      setChecked(!checked.value)
    }
    return () => (
      <button
        type="button"
        style={cssVars.value}
        class={[
          't-switch relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[--t-switch-ring] focus:ring-offset-2 dark:ring-offset-gray-900',
          checked.value ? 'bg-[--t-switch-accent]' : ' bg-gray-200',
          props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
        disabled={props.disabled}
        role="switch"
        onClick={changeHandler}
      >
        <span
          class={[
            't-switch_thumb pointer-events-none block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            checked.value ? 'translate-x-5' : 'translate-x-0',
          ]}
        >
          {slots.off && (
            <span
              class={[
                'absolute inset-0 flex h-full w-full items-center justify-center text-gray-400 transition-opacity [&>*]:h-3 [&>*]:w-3',
                checked.value ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
              ]}
            >
              {slots.off()}
            </span>
          )}

          {slots.on && (
            <span
              class={[
                'absolute inset-0 flex h-full w-full items-center justify-center text-[--t-switch-accent] transition-opacity [&>*]:h-3 [&>*]:w-3',
                checked.value ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
              ]}
            >
              {slots.on()}
            </span>
          )}
        </span>
      </button>
    )
  },
})
