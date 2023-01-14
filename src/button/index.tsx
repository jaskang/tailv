import { computed, defineComponent, type PropType } from 'vue'
import { classNames } from '../_utils'

export const EButton = defineComponent({
  name: 'EButton',
  props: {
    type: String as PropType<'round' | 'circle' | 'link'>,
    color: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
    size: String as PropType<'xs' | 'sm' | 'lg' | 'xl'>,
    disabled: Boolean,
    secondary: Boolean,
  },
  setup(props, { slots }) {
    const cls = computed(() =>
      classNames(
        'e-button',
        props.color && `e-button--${props.color}`,
        props.type && `e-button--${props.type}`,
        props.size && `e-button--${props.size}`,
        props.disabled && `is-disabled`,
        props.secondary && `is-secondary`
      )
    )
    return () => (
      <button type="button" disabled={props.disabled} class={cls.value}>
        <span>{slots.default?.()}</span>
      </button>
    )
  },
})
