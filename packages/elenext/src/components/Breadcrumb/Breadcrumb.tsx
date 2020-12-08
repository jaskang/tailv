import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Breadcrumb')
const Breadcrumb = defineComponent({
  name: getCompName('Breadcrumb'),
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  setup(_props, { slots }) {
    return () => <div class={blockCls}>{slots.default?.()}</div>
  }
})

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
