import { defineComponent, PropType } from 'vue'
import './Container.scss'

const ElContainer = defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    }
  },
  setup(props, { slots }) {
    return () => (
      <section
        class={{
          'el-container': true,
          'is-vertical': props.direction === 'vertical'
        }}
      >
        {slots.default?.()}
      </section>
    )
  }
})

export default ElContainer
