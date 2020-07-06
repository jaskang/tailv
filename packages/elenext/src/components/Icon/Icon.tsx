import { defineComponent } from 'vue'

import './Icon.scss'

export default defineComponent({
  name: 'ElIcon',
  props: { name: String },
  setup(props) {
    return () => <i class={`el-icon-${props.name}`}></i>
  }
})
