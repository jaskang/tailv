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

import { useControllable } from '@/hooks/controllable'
import { useTheme } from '@/theme'
import { PropTypes } from '@/utils'

import type { RadioGroupContext } from './RadioGroup'

const props = {
  checked: Boolean,
  name: String,
  disabled: Boolean,
  value: PropTypes.any(),
}

export type RadioProps = ExtractPropTypes<typeof props>

export type RadioPublicProps = ExtractPublicPropTypes<typeof props>

export type RadioCssVars = {
  '--t-radio-accent-color': string
  '--t-radio-ring-color': string
}

export const Radio = defineComponent({
  name: 'TRadio',
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
    const { colors } = useTheme()

    const focus = ref(false)

    const groupContext = inject<RadioGroupContext | null>('RadioGroupContext', null)
    const groupProps = computed(() => {
      return {
        disabled: groupContext?.props.value.disabled || props.disabled,
        value: groupContext?.props.value.value || props.value,
        name: groupContext?.props.value.name || props.name,
      }
    })
    const [realChecked, setChecked] = useControllable(
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

    const cssVars = computed<RadioCssVars>(() => ({
      '--t-radio-accent-color': colors.value.primary[500],
      '--t-radio-ring-color': colors.value.primary[500],
    }))
    return () => (
      <label
        style={cssVars.value}
        class={[
          't-radio inline-flex items-center',
          groupProps.value.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
      >
        <input
          class="t-radio_input h-4 w-4 border-gray-300 text-[--t-radio-accent-color] transition-all focus:ring-[--t-radio-ring-color] disabled:cursor-not-allowed"
          type="radio"
          name={groupProps.value.name}
          value={groupProps.value.value}
          disabled={groupProps.value.disabled}
          checked={realChecked.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span class="t-radio_label ml-3 block text-sm font-medium text-gray-700">{slots.default?.()}</span>
      </label>
    )
  },
})
