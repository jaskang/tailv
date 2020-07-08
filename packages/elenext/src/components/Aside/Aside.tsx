import { defineComponent } from 'vue'

import './Aside.scss'

const ElAside = defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '250px'
    }
  },
  setup(props, { slots, attrs }) {
    return () => (
      <aside class="el-aside" style={{ width: props.width }} {...attrs}>
        {slots.default?.()}
      </aside>
    )
  }
})

export default ElAside
