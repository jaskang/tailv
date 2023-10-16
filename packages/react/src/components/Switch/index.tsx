import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type SlotsType,
  toRef,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'

const props = {
  checked: { type: Boolean, default: undefined },
  disabled: Boolean,
}

export type SwitchProps = ExtractPropTypes<typeof props>

export type SwitchPublicProps = ExtractPublicPropTypes<typeof props>

export const Switch = defineComponent({
  name: 'ZSwitch',
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

    const changeHandler = () => {
      if (props.disabled) return
      console.log('changeHandler')

      setChecked(!checked.value)
    }
    return () => (
      <button
        type="button"
        class={[
          'z-switch relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2  border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          checked.value ? 'bg-primary-500' : 'bg-gray-200',
        ]}
        disabled={props.disabled}
        role="switch"
        onClick={changeHandler}
      >
        <span
          class="z-switch_thumb pointer-events-none inline-block h-5 w-5 translate-x-[--z-switch-thumb-translate-x] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          style={{
            '--z-switch-thumb-translate-x': checked.value ? '1.25rem' : '0',
          }}
        >
          {slots.on && (
            <span
              class={[
                'z-switch_item absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                checked.value
                  ? 'opacity-0 duration-100 ease-out'
                  : 'opacity-100 duration-200 ease-in',
              ]}
            >
              {slots.on()}
            </span>
          )}
          {slots.off && (
            <span
              class={[
                'z-switch_item absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                checked.value
                  ? 'opacity-100 duration-200 ease-in'
                  : 'opacity-0 duration-100 ease-out',
              ]}
            >
              {slots.off()}
            </span>
          )}
        </span>
      </button>
    )
  },
})
