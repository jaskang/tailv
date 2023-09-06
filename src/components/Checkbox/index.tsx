import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'
import { useColorVars } from '@/utils/style'

const props = {
  value: [String, Number],
  name: String,
  disabled: Boolean,
  checked: Boolean,
}

export type CheckboxProps = ExtractPublicPropTypes<typeof props>

export const Checkbox = defineComponent({
  name: 'ZCheckbox',
  props,
  emits: {
    'update:checked': (value: boolean) => true,
    change: (value: boolean) => true,
    click: (payload: MouseEvent) => true,
    focus: (e: FocusEvent) => true,
    blur: (e: FocusEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const cssVars = useColorVars('z-checkbox', {
      accent: 'primary.500',
      ring: 'primary.500',
    })

    const focus = ref(false)

    const [checked, setChecked] = useControllable(
      () => props.checked,
      val => {
        emit('update:checked', val)
        emit('change', val)
      },
      false
    )

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      console.log(el.checked)
      setChecked(el.checked)
    }
    const onFocus = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focus.value = true
        emit('focus', e)
      }
    }
    const onBlur = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focus.value = false
        emit('blur', e)
      }
    }

    return () => (
      <label
        style={cssVars.value}
        class={[
          'z-checkbox inline-flex items-center text-sm font-medium',
          props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
      >
        <input
          class="z-checkbox_input h-4 w-4 cursor-pointer rounded border border-gray-300 text-[--z-checkbox-accent] dark:ring-offset-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-[--z-checkbox-ring] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="checkbox"
          name={props.name}
          disabled={props.disabled}
          checked={checked.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span class="z-checkbox_label ml-3 block text-sm font-medium">{slots.default?.()}</span>
      </label>
    )
  },
})
