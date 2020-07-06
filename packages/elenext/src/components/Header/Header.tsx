import { defineComponent } from 'vue'

const ElHeader = defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots, attrs }) {
    return () => (
      <header class="el-header" style={{ height: props.height }}>
        {slots.default?.()}
      </header>
    )
  }
})

export default ElHeader
