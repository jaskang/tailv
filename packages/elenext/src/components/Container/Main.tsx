import { defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Main')

const ElMain = defineComponent({
  name: getCompName('Main'),
  setup(_, { slots }) {
    return () => <main class={blockCls}>{slots.default?.()}</main>
  }
})

export default ElMain
