import { defineComponent, getCurrentInstance } from 'vue'

const ElAside = defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '250px'
    }
  },
  setup(props, { slots, attrs }) {
    const self = getCurrentInstance()
    console.log(self?.parent)
    // @ts-ignore
    if (self?.parent?.ctx.setHorizontal) {
      // @ts-ignore
      self.parent.ctx.setHorizontal()
    }
    return () => (
      <aside class="el-aside" style={{ width: props.width }} {...attrs}>
        {slots.default?.()}
      </aside>
    )
  }
})

export default ElAside
