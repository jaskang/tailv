import { useControllableValue } from '../utils/useControllableValue'
import { defineComponent, type ExtractPublicPropTypes, ref, type SlotsType, type VNode, ComponentPropsOptions } from 'vue'

const props = {
  value: null,
  name: String,
  disabled: Boolean,
  checked: Boolean,
} satisfies ComponentPropsOptions

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

    const [checked, setChecked] = useControllableValue(props, {
      defaultValue: false,
      valuePropName: 'checked',
      onChange: (val: boolean) => {
        emit('change', val)
      },
    })

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
      <label class={['relative flex items-center', props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']}>
        <input
          class="h-4 w-4 rounded border-gray-300 text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          style={{ boxShadow: 'none', cursor: 'inherit' }}
          type="checkbox"
          name={props.name}
          disabled={props.disabled}
          checked={checked.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {slots.default ? <span class="relative ml-2 text-sm font-medium">{slots.default()}</span> : null}
      </label>
    )
  },
})
