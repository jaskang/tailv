import { defineComponent } from 'vue'

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
export default ButtonGroup
