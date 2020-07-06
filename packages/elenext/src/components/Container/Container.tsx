import { defineComponent, PropType } from 'vue'

interface ElContainerProps {
  direction?: 'horizontal' | 'vertical'
}

const ElContainer = defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical' as 'vertical'
    }
  },
  setup(props: ElContainerProps, { slots }) {
    return () => (
      <section class={{ 'el-container': true, 'is-vertical': props.direction === 'vertical' }}>
        {slots.default?.()}
      </section>
    )
  }
})

export default ElContainer
