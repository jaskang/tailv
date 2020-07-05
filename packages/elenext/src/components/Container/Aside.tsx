import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '250px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <aside class="el-aside" style={{ width: props.width }}>
        {slots.default?.()}
      </aside>
    )
  }
})
