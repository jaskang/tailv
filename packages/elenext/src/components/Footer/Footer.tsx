import { defineComponent } from 'vue'

import './Footer.scss'

export default defineComponent({
  name: 'ElFooter',
  componentName: 'ElFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots, attrs }) {
    return () => (
      <footer class="el-footer" style={{ height: props.height }} {...attrs}>
        {slots.default?.()}
      </footer>
    )
  }
})
