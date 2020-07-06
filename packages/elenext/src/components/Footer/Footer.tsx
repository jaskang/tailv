import { defineComponent } from 'vue'
import { injectCss } from '../../utils'

import styles from './Footer.scss'

injectCss(styles, 'ElFooter')

const ElFooter = defineComponent({
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
export default ElFooter
