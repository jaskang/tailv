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
  value: String,
  before: String,
  after: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  disabled: Boolean,
}

export type InputProps = ExtractPropTypes<typeof props>

export type InputPublicProps = ExtractPublicPropTypes<typeof props>

export type InputCssVars = {
  '--t-input-ring-color': string
}

export const Input = defineComponent({
  name: 'TInput',
  props,
  emits: {
    'update:value': (value: string) => true,
    change: (value: string) => true,
    input: (e: Event) => true,
    focus: (e: FocusEvent) => true,
    blur: (e: FocusEvent) => true,
  },
  slots: Object as SlotsType<{
    default?: () => VNode
    before?: () => VNode
    after?: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const { colors } = useTheme()

    const [value, setValue] = useControllable(
      () => props.value,
      val => {
        emit('update:value', val)
        emit('change', val)
      },
      ''
    )
    const focused = ref(false)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      setValue(el.value)
      emit('input', e)
    }
    const onFocus = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focused.value = true
        emit('focus', e)
      }
    }
    const onBlur = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focused.value = false
        emit('blur', e)
      }
    }

    const cssVars = computed<InputCssVars>(() => ({
      '--t-input-ring-color': colors.value.primary[500],
    }))

    return () => (
      <div
        style={cssVars.value}
        class={[
          't-input inline-flex w-full rounded-md text-sm shadow-sm',
          props.disabled ? 'is-disabled cursor-not-allowed bg-gray-50 opacity-50' : '',
          focused.value && 'is-focused',
        ]}
      >
        {slots.before && (
          <span class="t-input_before inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3">
            {slots.before()}
          </span>
        )}

        <span
          class={[
            't-input_wraper flex w-full flex-1 items-center border first:rounded-l-md last:rounded-r-md',
            props.disabled ? 'bg-gray-50' : 'bg-white',
            focused.value ? 'z-10 border-[--t-input-ring-color] ring-1 ring-[--t-input-ring-color]' : 'border-gray-300',
          ]}
        >
          {props.prefix && <span class="t-input_prefix flex-initial pl-3">{props.prefix}</span>}

          <input
            class="t-input_input flex-1 border-none bg-transparent px-3 focus:outline-none disabled:cursor-not-allowed"
            style="box-shadow: none"
            type="text"
            value={value.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onInput={onInput}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {props.suffix && <span class="t-input_suffix flex-initial pr-3">{props.suffix}</span>}
        </span>
        {slots.after && (
          <span class="t-input_after inline-flex items-center rounded-r-md border border-r-0 border-gray-300 bg-gray-50 px-3">
            {slots.after()}
          </span>
        )}
      </div>
    )
  },
})
