import { defineComponent } from 'vue'
import './Link.scss'

const Link = defineComponent({
  name: 'ElLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup(props, { emit, slots, attrs }) {
    const handleClick = e => {
      if (!props.disabled) {
        if (!props.href) {
          emit('click', event)
        }
      }
    }

    return () => (
      <a
        class={[
          'el-link',
          props.type ? `el-link--${props.type}` : '',
          props.disabled && 'is-disabled',
          props.underline && !props.disabled && 'is-underline'
        ]}
        href={props.disabled ? undefined : props.href}
        {...attrs}
        onClick={handleClick}
      >
        {props.icon && <i class={props.icon}></i>}
        <span class="el-link--inner">{slots.default?.()}</span>
      </a>
    )
  }
})

export default Link
