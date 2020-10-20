import { computed, defineComponent, inject } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { NAV_INJKEY, NAV_ITEM_PADDING } from './Nav'

const blockCls = getBlockCls('NavItemGroup')

const NavItemGroup = defineComponent({
  name: getCompName('NavItemGroup'),
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const parent = inject(NAV_INJKEY)
    const padding = computed(() => {
      return (parent?.state.padding || 0) + NAV_ITEM_PADDING
    })
    return () => (
      <li class={blockCls}>
        <div class={`${blockCls}__title`} style={{ paddingLeft: padding.value + 'px' }}>
          {slots.title ? slots.title() : <>{props.title}</>}
        </div>
        <ul>{slots.default?.()}</ul>
      </li>
    )
  }
})

export default NavItemGroup
