import { defineComponent } from 'vue'
import { injectCss } from 'src/utils'

import styles from './Icon.scss'

injectCss(styles, 'ElIcon')

export default defineComponent({
  name: 'ElIcon',
  props: { name: String },
  setup(props) {
    return () => <i class={`el-icon-${props.name}`}></i>
  }
})
