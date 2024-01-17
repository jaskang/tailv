import { useControllableValue } from '../utils/useControllableValue'
import {
  defineComponent,
  type ExtractPublicPropTypes,
  ref,
  type SlotsType,
  type VNode,
  ComponentPropsOptions,
  provide,
  PropType,
  computed,
  InjectionKey,
  ComputedRef,
  inject,
} from 'vue'

const radioGroupProps = {
  name: String,
  value: null,
  disabled: Boolean,
} satisfies ComponentPropsOptions

export type RadioGroupProps = ExtractPublicPropTypes<typeof radioGroupProps>

const RadioGroupInjectKey: InjectionKey<{
  value: ComputedRef<any>
  props: RadioGroupProps
  pick: (val: unknown) => void
}> = Symbol('CheckboxGroupInjectKey')

export const RadioGroup = defineComponent({
  name: 'VRadioGroupGroup',
  props: radioGroupProps,
  emits: {
    'update:value': (value: any) => true,
    change: (value: any) => true,
  },
  setup(props, { emit, slots }) {
    const [state, setState] = useControllableValue<any>(props, {
      onChange: val => {
        emit('change', val)
      },
    })
    provide(RadioGroupInjectKey, {
      value: state,
      props: props,
      pick: (val: unknown) => {
        setState(val)
      },
    })
    return () => <div>{slots.default?.()}</div>
  },
})

const props = {
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
} satisfies ComponentPropsOptions

export type RadioProps = ExtractPublicPropTypes<typeof props>

export const Radio = defineComponent({
  name: 'VRadio',
  props,
  emits: {
    'update:checked': (value: boolean) => true,
    change: (value: boolean) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const group = inject(RadioGroupInjectKey, null)
    console.log(parent)

    const [innerChecked, setInnerChecked] = useControllableValue(props, {
      defaultValue: group ? group.value.value === props.value : false,
      valuePropName: 'checked',
      onChange: (val: boolean) => {
        emit('change', val)
        group?.pick(props.value)
      },
    })
    const checked = computed(() => (group ? group.value.value === props.value : innerChecked.value))

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      console.log(el.checked)
      setInnerChecked(el.checked)
    }

    return () => (
      <label class={['relative inline-flex items-center', props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']}>
        <input
          class="form-input h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          style={{ boxShadow: 'none', cursor: 'inherit' }}
          type="radio"
          name={props.name}
          disabled={props.disabled}
          checked={checked.value}
          onInput={onInput}
        />
        {slots.default ? <span class="relative ml-2 text-sm font-medium">{slots.default()}</span> : null}
      </label>
    )
  },
})
