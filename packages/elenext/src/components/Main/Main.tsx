import { defineComponent } from 'vue'
import { injectCss } from '../../utils/dom'

import styles from './Main.scss'

injectCss(styles, 'ElMain')

const ElMain = defineComponent({
  name: 'ElMain',
  setup(_, { slots, attrs }) {
    return () => (
      <main class="el-main" {...attrs}>
        {slots.default?.()}
      </main>
    )
  }
})

export default ElMain
