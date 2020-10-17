import { defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Footer')

const Footer = defineComponent({
  name: getCompName('Footer'),
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <footer class={blockCls} style={{ height: props.height }}>
        {slots.default?.()}
      </footer>
    )
  }
})
export default Footer
