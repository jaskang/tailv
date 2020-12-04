import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { mergeCls } from '@/utils/tools'
// import './Link.scss'

const blockCls = getBlockCls('Link')
const Link = defineComponent({
  name: getCompName('Link'),
  inheritAttrs: false,
  emits: ['click'],
  props: {
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
      default: 'default'
    },
    underline: { type: Boolean, default: true },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        if (!props.href) {
          emit('click', event)
        }
      }
    }
    const classes = computed(() =>
      mergeCls([
        blockCls,
        `${blockCls}--${props.color}`,
        {
          'is-disabled': !!props.disabled,
          'is-underline': !!props.underline && !props.disabled
        }
      ])
    )
    return () => (
      <a class={classes.value} href={props.disabled ? undefined : props.href} onClick={handleClick}>
        {props.icon && <i class={props.icon}></i>}
        <span class="el-link--inner">{slots.default?.()}</span>
      </a>
    )
  }
})

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

export default Link
