import { defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Container')

const Container = defineComponent({
  name: getCompName('Container'),
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      required: false
    }
  },
  data() {
    return {
      hasAside: false
    }
  },
  methods: {
    setHorizontal() {
      this.hasAside = true
    }
  },
  computed: {
    isHorizontal(): boolean {
      return this.direction === 'horizontal' || this.hasAside
    }
  },
  render() {
    return (
      <section
        class={{
          [blockCls]: true,
          'is-horizontal': this.isHorizontal
        }}
      >
        {this.$slots.default?.()}
      </section>
    )
  }
})

export default Container
