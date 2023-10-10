import { defineComponent, type ExtractPublicPropTypes, ref, type SlotsType, type VNode } from 'vue'

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
      <label class="flex items-center">
        <input
          class="text-primary-500 focus-visible:ring-primary-500 h-4 w-4 rounded border-gray-300 transition-shadow"
          type="checkbox"
          name={props.name}
          disabled={props.disabled}
          checked={checked.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span class="ml-2 text-sm font-medium">{slots.default?.()}</span>
      </label>
    )
  },
})