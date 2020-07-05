import { defineComponent } from 'vue'

import './Main.scss'

export default defineComponent({
  name: 'ElMain',
  setup(_, { slots, attrs }) {
    return () => (
      <main class="el-main" {...attrs}>
        {slots.default?.()}
      </main>
    )
  }
})
