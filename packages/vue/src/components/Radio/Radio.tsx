import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  inject,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'
import { useColorVars } from '@/utils/style'

import type { RadioGroupContext } from './RadioGroup'

const props = {
  checked: Boolean,
  name: String,
  disabled: Boolean,
  value: [String, Number],
}

export type RadioProps = ExtractPropTypes<typeof props>

export type RadioPublicProps = ExtractPublicPropTypes<typeof props>

export const Radio = defineComponent({
  name: 'ZRadio',
  props,
  emits: {
    'update:checked': (value: boolean) => true,
    change: (value: boolean) => true,
    focus: (e: FocusEvent) => true,
    blur: (e: FocusEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const focus = ref(false)

    const groupContext = inject<RadioGroupContext | null>('RadioGroupContext', null)
    const groupProps = computed(() => {
      return {
        disabled: groupContext?.props.value.disabled || props.disabled,
        value: groupContext?.props.value.value || props.value,
        name: groupContext?.props.value.name || props.name,
      }
    })
    const [checked, setChecked] = useControllable(
      () => {
        return groupContext ? groupContext.props.value.value === props.value : props.checked
      },
      val => {
        if (groupContext) {
          if (groupContext.props.value.value !== props.value) {
            groupContext.onRadioChange(props.value)
          }
        }
        emit('update:checked', val)
        emit('change', val)
      },
      false
    )
    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      setChecked(el.checked)
    }
    const onFocus = (e: FocusEvent) => {
      focus.value = true
      emit('focus', e)
    }

    const onBlur = (e: FocusEvent) => {
      focus.value = false
      emit('blur', e)
    }

    return () => (
      <label
        class={[
          'inline-flex items-center',
          groupProps.value.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
      >
        <input
          class="text-primary-500 focus-visible:ring-primary-500 h-4 w-4 border-gray-300 transition-shadow"
          type="radio"
          name={groupProps.value.name}
          value={groupProps.value.value}
          disabled={groupProps.value.disabled}
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