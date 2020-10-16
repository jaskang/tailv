import { defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../config'
// import './Container.scss'

const blockCls = getBlockCls('Layout')

const Container = defineComponent({
  name: getCompName('Layout'),
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
      // @ts-ignore
      return this.direction || this.hasAside
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
