import { App, computed, defineComponent, getCurrentInstance, InjectionKey, PropType, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { mergeClass } from '@elenext/shared'

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
      mergeClass({
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
})

Layout.install = (app: App): void => {
  app.component(Layout.name, Layout)
}

export default Layout
