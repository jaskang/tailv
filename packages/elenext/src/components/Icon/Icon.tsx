import { defineComponent } from 'vue'
import { injectCss } from '../../utils/dom'

import styles from './Icon.scss'

injectCss(styles, 'ElIcon')

export default defineComponent({
  name: 'ElIcon',
  props: { name: String },
  setup(props) {
    return () => <i class={`el-icon-${props.name}`}></i>
  }
})
