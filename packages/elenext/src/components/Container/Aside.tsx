import { defineComponent, getCurrentInstance } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { Container } from '.'

const blockCls = getBlockCls('Aside')

const Aside = defineComponent({
  name: getCompName('Aside'),
  props: {
    width: {
      type: String,
      default: '250px'
    }
  },
  created() {
    const parent: any = this.$parent || null
    if (parent?.setHorizontal) {
      parent.setHorizontal()
    }
  },
  render() {
    return (
      <aside class={blockCls} style={{ width: this.width }}>
        {this.$slots.default?.()}
      </aside>
    )
  }
  // setup(props, { slots }) {
  //   const self = getCurrentInstance()
  //   // @ts-ignore
  //   if (self?.parent?.ctx.setHorizontal) {
  //     // @ts-ignore
  //     self.parent.ctx.setHorizontal()
  //   }
  //   return () => (
  //     <aside class={blockCls} style={{ width: props.width }}>
  //       {slots.default?.()}
  //     </aside>
  //   )
  // }
})

export default Aside
