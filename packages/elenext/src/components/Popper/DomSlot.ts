import { App, defineComponent, getCurrentInstance, onMounted, onUpdated, PropType, Ref, VNode } from 'vue'
import { getCompName } from '../../utils'

const DomSlot = defineComponent({
  name: getCompName('DomSlot'),
  emits: ['root-init'],
  setup(props, { slots, emit }) {
    onMounted(() => {
      const self = getCurrentInstance()
      // @ts-ignore
      // console.log(self.ctx.$el.nextElementSibling)
      // @ts-ignore
      if (typeof self.ctx.$el.wholeText === 'string' && self.ctx.$el.wholeText.trim()) {
        // @ts-ignore
        // emit('root-init', self.ctx.$el.nextElementSibling)
      } else {
        // @ts-ignore
        emit('root-init', self.ctx.$el.nextElementSibling)
      }
    })
    return () => {
      return slots.default()
    }
  }
})

DomSlot.install = (app: App): void => {
  app.component(DomSlot.name, DomSlot)
}

export default DomSlot
