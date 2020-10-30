import { defineComponent, provide, getCurrentInstance } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Breadcrumb')
const Breadcrumb = defineComponent({
  name: getCompName('Breadcrumb'),
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  setup(prop, { slots }) {
    return () => <div class={blockCls}>{slots.default?.()}</div>
  }
})

export default Breadcrumb
