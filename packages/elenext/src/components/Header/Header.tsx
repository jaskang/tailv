import { defineComponent } from 'vue'
import { injectCss } from '../../utils'

import styles from './header.scss'

injectCss(styles, 'ElHeader')

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
