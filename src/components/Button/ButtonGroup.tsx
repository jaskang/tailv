import { App, defineComponent } from 'vue'

const ButtonGroup = defineComponent({
  name: 'ElButtonGroup',
  setup(props, { attrs, slots }) {
    return () => (
      <div class="el-button-group" {...attrs}>
        {slots.default?.()}
      </div>
    )
  }
})

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
