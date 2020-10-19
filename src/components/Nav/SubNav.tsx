import { defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { normalizeClass } from '@/utils/dom'

const blockCls = getBlockCls('SubItem')

const SubItem = defineComponent({
  name: getCompName('SubItem'),
  props: { name: String },
  setup(props) {
    const clsNames = normalizeClass(blockCls)
    return () => <div class={clsNames}></div>
  }
})

export default SubItem
