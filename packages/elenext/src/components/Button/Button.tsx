import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { mergeClass } from '../../utils/tools'
import { IconArrowClockwise } from '@elenext/icons'
const cls = getBlockCls('Button')
const Button = defineComponent({
  name: getCompName('Button'),
  emits: ['click'],
  props: {
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
      default: 'default'
    },
    type: {
      type: String as PropType<'link' | 'round' | 'circle'>
    },
    size: {
      type: String as PropType<'large' | 'small'>
    },
    nativeType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean }
  },
  setup(props, { slots, emit }) {
    const classes = computed(() =>
      mergeClass(cls, `${cls}-${props.color}`, [
        props.size ? `${cls}-${props.size}` : '',
        props.type ? `is-${props.type}` : '',
        {
          'is-loading': props.loading,
          'is-disabled': props.disabled
        }
      ])
    )
    const onClick = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }
    return () => {
      return (
        <button disabled={props.disabled} type={props.nativeType as 'button'} class={classes.value} onClick={onClick}>
          {props.loading && <IconArrowClockwise spin />}
          {slots.icon && !props.loading && slots.icon()}
          <span>{slots.default?.()}</span>
        </button>
      )
    }
  }
})

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
