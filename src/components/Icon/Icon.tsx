import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

// import './Icon.scss'
const cls = getBlockCls('Icon')
const Icon = defineComponent({
  name: getCompName('Icon'),
  props: { name: String },
  setup(props) {
    return () => <i class={`${cls}-${props.name}`}></i>
  }
})

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon
