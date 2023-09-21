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

    const cssVars = useColorVars('z-switch', () => ({
      accent: checked.value ? 'primary.500' : 'gray.200',
      ring: 'primary.500',
    }))

    const changeHandler = () => {
      if (props.disabled) return
      console.log('changeHandler')

      setChecked(!checked.value)
    }
    return () => (
      <button
        type="button"
        class="z-switch"
        style={cssVars.value}
        disabled={props.disabled}
        role="switch"
        onClick={changeHandler}
      >
        <span
          class="z-switch_thumb"
          style={{
            '--z-switch-thumb-translate-x': checked.value ? '1.25rem' : '0',
          }}
        >
          {slots.off && (
            <span
              class={['z-switch_item', checked.value ? 'z-switch_item--out' : 'z-switch_item--in']}
            >
              {slots.off()}
            </span>
          )}

          {slots.on && (
            <span
              class={['z-switch_item', checked.value ? 'z-switch_item--in' : 'z-switch_item--out']}
            >
              {slots.on()}
            </span>
          )}
        </span>
      </button>
    )
  },
})
