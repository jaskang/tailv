import { defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Header')

const Header = defineComponent({
  name: getCompName('Header'),
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <header class={blockCls} style={{ height: props.height }}>
        {slots.default?.()}
      </header>
    )
  }
})

export default Header
