import { defineComponent, getCurrentInstance } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Aside')

const Aside = defineComponent({
  name: getCompName('Aside'),
  props: {
    width: {
      type: String,
      default: '250px'
    }
  },
  setup(props, { slots }) {
    const self = getCurrentInstance()
    console.log(self?.parent)
    // @ts-ignore
    if (self?.parent?.ctx.setHorizontal) {
      // @ts-ignore
      self.parent.ctx.setHorizontal()
    }
    return () => (
      <aside class={blockCls} style={{ width: props.width }}>
        {slots.default?.()}
      </aside>
    )
  }
})

export default Aside
