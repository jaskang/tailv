import { defineComponent } from 'vue'

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
