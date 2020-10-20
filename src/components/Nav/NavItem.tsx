import { computed, defineComponent, inject } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { uniqueId } from '@/utils/uniqueId'
import { NAV_INJKEY, NAV_ITEM_PADDING } from './Nav'

const blockCls = getBlockCls('nav-item')

const Navitem = defineComponent({
  name: getCompName('NavItem'),
  props: { name: String },
  setup(props, { slots }) {
    const id = uniqueId('NavItem')
    const parent = inject(NAV_INJKEY)
    const onClickHandler = () => {
      parent?.action.select(id)
    }
    const padding = computed(() => {
      return (parent?.state.padding || 0) + NAV_ITEM_PADDING
    })
    const isActive = computed(() => {
      return (parent?.state?.activeId || -1) === id
    })
    return () => (
      <div
        class={[blockCls, { 'is-active': isActive.value }]}
        style={{ paddingLeft: padding.value + 'px' }}
        onClick={onClickHandler}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Navitem
