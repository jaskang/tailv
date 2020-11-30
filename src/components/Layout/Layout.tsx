import { computed, defineComponent, getCurrentInstance, InjectionKey, PropType, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { normalizeClass } from '../../utils/dom'

export const LayoutInjectKey: InjectionKey<{
  uid: number
  setAside: () => void
}> = Symbol('Layout')

const blockCls = getBlockCls('Layout')

const Layout = defineComponent({
  name: getCompName('Layout'),
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      required: false
    }
  },
  setup(props, { slots }) {
    const self = getCurrentInstance()
    const data = reactive({
      hasAside: false
    })
    const classes = computed(() =>
      normalizeClass({
        [blockCls]: true,
        'is-horizontal': props.direction === 'horizontal' || data.hasAside
      })
    )
    provide(LayoutInjectKey, {
      uid: self!.uid,
      setAside: () => {
        data.hasAside = true
      }
    })
    return () => {
      return <div class={classes.value}>{slots.default?.()}</div>
    }
  }
  // data() {
  //   return {
  //     hasAside: false
  //   }
  // },
  // methods: {
  //   setHorizontal() {
  //     this.hasAside = true
  //   }
  // },
  // computed: {
  //   isHorizontal(): boolean {
  //     return this.direction === 'horizontal' || this.hasAside
  //   }
  // },
  // render() {
  //   return (
  //     <section
  //       class={{
  //         [blockCls]: true,
  //         'is-horizontal': this.isHorizontal
  //       }}
  //     >
  //       {this.$slots.default?.()}
  //     </section>
  //   )
  // }
})

export default Layout
