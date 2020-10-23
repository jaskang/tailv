import { defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { normalizeClass } from '@/utils/dom'
// import './Link.scss'

const blockCls = getBlockCls('Link')
const Link = defineComponent({
  name: getCompName('Link'),
  inheritAttrs: false,
  emits: ['click'],
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
      default: 'default'
    },
    underline: { type: Boolean, default: true },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup(props, { emit, slots, attrs }) {
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        if (!props.href) {
          emit('click', event)
        }
      }
    }
    const clsNames = normalizeClass([
      blockCls,
      `${blockCls}--${props.type}`,
      {
        'is-disabled': !!props.disabled,
        'is-underline': !!props.underline && !props.disabled
      }
    ])
    return () => (
      <a class={clsNames} href={props.disabled ? undefined : props.href} {...attrs} onClick={handleClick}>
        {props.icon && <i class={props.icon}></i>}
        <span class="el-link--inner">{slots.default?.()}</span>
      </a>
    )
  }
})

export default Link
