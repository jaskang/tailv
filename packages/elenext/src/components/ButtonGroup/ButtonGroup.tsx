import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElButtonGroup',
  setup(props, { attrs, slots }) {
    return () => (
      <div class="el-button-group" {...attrs}>
        {slots.default?.()}
      </div>
    )
  }
})
