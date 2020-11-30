import { App, defineComponent } from 'vue'

// import './Icon.scss'

const Icon = defineComponent({
  name: 'ElIcon',
  props: { name: String },
  setup(props) {
    return () => <i class={`el-icon-${props.name}`}></i>
  }
})

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon
