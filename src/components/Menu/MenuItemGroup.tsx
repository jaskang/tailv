import { App, computed, defineComponent, inject } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { MENU_INJKEY, MENU_ITEM_PADDING } from './Menu'

const blockCls = getBlockCls('MenuItemGroup')

const MenuItemGroup = defineComponent({
  name: getCompName('MenuItemGroup'),
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const parent = inject(MENU_INJKEY)
    const padding = computed(() => {
      return (parent?.state.padding || 0) + MENU_ITEM_PADDING
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

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup
