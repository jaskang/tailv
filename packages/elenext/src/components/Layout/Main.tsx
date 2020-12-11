import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '../../config'

const blockCls = getBlockCls('Main')

const Main = defineComponent({
  name: getCompName('Main'),
  setup(_, { slots }) {
    return () => <main class={blockCls}>{slots.default?.()}</main>
  }
})

Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

export default Main
