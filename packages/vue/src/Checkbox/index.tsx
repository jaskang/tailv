import { useModelValue } from '../use/useModelValue'
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

const checkboxGroupProps = {
  name: String,
  value: Array as PropType<unknown[]>,
  disabled: Boolean,
} satisfies ComponentPropsOptions

export type CheckboxGroupProps = ExtractPublicPropTypes<typeof checkboxGroupProps>

const CheckboxGroupInjectKey: InjectionKey<{
  value: ComputedRef<unknown[]>
  props: CheckboxGroupProps
  insert: (val: unknown) => void
  remove: (val: unknown) => void
}> = Symbol('CheckboxGroupInjectKey')

export const CheckboxGroup = defineComponent({
  name: 'VCheckboxGroup',
  props: checkboxGroupProps,
  emits: {
    'update:value': (value: unknown[]) => true,
    change: (value: any[]) => true,
  },
  setup(props, { emit, slots }) {
    const [state, setState] = useModelValue<unknown[]>(props, {
      defaultValue: [],
      onChange: (val: any[]) => {
        emit('change', val)
      },
    })
    provide(CheckboxGroupInjectKey, {
      value: state,
      props: props,
      insert: (val: unknown) => {
        if (state.value.indexOf(val) === -1) {
          setState([...state.value, val])
        }
      },
      remove: (val: unknown) => {
        const index = state.value.indexOf(val)
        if (index !== -1) {
          const r = [...state.value]
          r.splice(index, 1)
          setState(r)
        }
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

export type CheckboxProps = ExtractPublicPropTypes<typeof props>

export const Checkbox = defineComponent({
  name: 'VCheckbox',
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
    const group = inject(CheckboxGroupInjectKey, null)
    console.log(parent)

    const [innerChecked, setInnerChecked] = useModelValue(props, {
      defaultValue: group ? group.value.value.includes(props.value) : false,
      valuePropName: 'checked',
      onChange: (val: boolean) => {
        emit('change', val)
        if (group) {
          if (val) {
            group.insert(props.value)
          } else {
            group.remove(props.value)
          }
        }
      },
    })
    const checked = computed(() => (group ? group.value.value.includes(props.value) : innerChecked.value))

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      console.log(el.checked)
      setInnerChecked(el.checked)
    }

    return () => (
      <label
        class={[
          'relative inline-flex items-center',
          props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ]}
      >
        <input
          class="form-input h-4 w-4 rounded border-gray-300 text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          style={{ boxShadow: 'none', cursor: 'inherit' }}
          type="checkbox"
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
