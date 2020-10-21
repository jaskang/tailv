import { computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { normalizeClass } from '@/utils/dom'

const cls = getBlockCls('Button')
const Button = defineComponent({
  name: getCompName('Button'),
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'>,
      default: 'default'
    },
    plain: {
      type: Boolean
    },
    shape: {
      type: String as PropType<'round' | 'circle'>,
      default: ''
    },
    size: {
      type: String as PropType<'large' | 'small'>,
      default: ''
    },
    nativeType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    icon: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean }
  },
  setup(props, { slots, attrs }) {
    const buttonSize = computed(() => {
      return props.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || false
    })
    const classNames = computed(() =>
      normalizeClass([
        cls,
        `${cls}-${props.type}`,
        buttonSize.value ? `${cls}-${buttonSize.value}` : '',
        props.shape ? `is-${props.shape}` : '',
        {
          'is-disabled': buttonDisabled.value,
          'is-loading': props.loading
        }
      ])
    )
    return () => (
      <button
        disabled={buttonDisabled.value || props.loading}
        type={props.nativeType as 'button'}
        class={classNames.value}
      >
        {props.loading && <i class="el-icon-loading"></i>}
        {props.icon && !props.loading && <i class={props.icon}></i>}
        <span>{slots.default?.()}</span>
      </button>
    )
  }
})

export default Button
