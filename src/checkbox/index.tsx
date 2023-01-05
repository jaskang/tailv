import { defineComponent, ref } from 'vue'

export const ECheckbox = defineComponent({
  name: 'ECheckbox',
  props: {
    disabled: Boolean,
    checked: Boolean,
    name: String,
    value: [String, Number],
  },
  emits: ['onUpdate:checked'],
  setup(props, { emit, slots, expose }) {
    const innerChecked = ref(props.checked)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      innerChecked.value = el.checked
    }
    const onClick = (e: Event) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      }
    }

    return () => (
      <label class={['e-checkbox', props.disabled && 'is-disabled']}>
        <input
          class="e-checkbox__input"
          type="checkbox"
          value={props.value}
          name={props.name}
          disabled={props.disabled}
          checked={innerChecked.value}
          onInput={onInput}
          onClick={onClick}
        />
        <span class="e-checkbox__label">{slots.default?.()}</span>
      </label>
    )
  },
})
