import { App, defineComponent, inject } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { LayoutInjectKey } from './Layout'

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
    const layout = inject(LayoutInjectKey)
    layout?.setAside()
    return () => (
      <aside class={blockCls} style={{ width: props.width }}>
        {slots.default?.()}
      </aside>
    )
  }
})

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

export default Aside
