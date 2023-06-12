import {
  ref,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import { useTheme } from '@/theme'
import { useControllable } from '@/hooks/controllable'

const props = {
  checked: Boolean,
  disabled: Boolean,
}

export type SwitchProps = ExtractPropTypes<typeof props>

export type SwitchPublicProps = ExtractPublicPropTypes<typeof props>

export type SwitchCssVars = {
  '--t-switch-accent-color': string
  '--t-switch-ring-color': string
}

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
    const { colors } = useTheme()

    const [value, setValue] = useControllable(
      () => props.checked,
      val => {
        console.log(val)

        emit('update:checked', val)
        emit('change', val)
      },
      false
    )

    const cssVars = computed<SwitchCssVars>(() => ({
      '--t-switch-accent-color': colors.value.primary[500],
      '--t-switch-ring-color': colors.value.primary[500],
    }))
    return () => (
      <button
        type="button"
        style={cssVars.value}
        class={[
          't-switch relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[--t-switch-ring-color] focus:ring-offset-2',
          value.value ? 'bg-[--t-switch-accent-color]' : ' bg-gray-200',
          props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
        disabled={props.disabled}
        role="switch"
        onClick={() => setValue(!value)}
      >
        <span
          class={[
            't-switch_thumb pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            value ? 'translate-x-5' : 'translate-x-0',
          ]}
        >
          {slots.off && (
            <span
              class={[
                'absolute inset-0 flex h-full w-full items-center justify-center text-gray-400 transition-opacity [&>*]:h-3 [&>*]:w-3',
                value ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
              ]}
            >
              {slots.off()}
            </span>
          )}

          {slots.on && (
            <span
              class={[
                'absolute inset-0 flex h-full w-full items-center justify-center text-[--t-switch-accent-color] transition-opacity [&>*]:h-3 [&>*]:w-3',
                value ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
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