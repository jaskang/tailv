import { defineComponent, reactive, PropType, onMounted, provide } from 'vue'
import { useMenu, MenuConfig, MenuConfigSymbol, recursiveMenus, findMenuData } from './hooks'

// import './Menu.scss'

const ElMenu = defineComponent({
  name: 'ElMenu',
  props: {
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover'
    },
    collapse: { type: Boolean, default: false },
    textColor: { type: String, default: '' },
    activeTextColor: { type: String, default: '' },
    backgroundColor: { type: String, default: '' }
  },
  setup(props, { attrs, slots }) {
    const id = Symbol('ElMenu')

    const config = reactive<MenuConfig>({
      mode: props.mode as 'horizontal' | 'vertical',
      trigger: props.trigger as 'click' | 'hover',
      collapse: props.collapse,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      backgroundColor: props.backgroundColor,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse)
    })

    provide(MenuConfigSymbol, config)

    const { data, emitter } = useMenu(id, true)

    emitter!.on('select', id => {
      recursiveMenus(data.children, item => {
        item.isOwnActive = item.id === id
      })
    })

    emitter!.on('open', id => {
      const targetMenu = findMenuData(id, data.children)
      if (targetMenu) {
        targetMenu.isOwnOpen = true
      }
    })

    emitter!.on('close', id => {
      const targetMenu = findMenuData(id, data.children)
      if (targetMenu) {
        recursiveMenus(targetMenu.children, item => {
          item.isOwnOpen = false
        })
        targetMenu.isOwnOpen = false
      }
    })

    onMounted(() => {
      setTimeout(() => {
        // state.backgroundColor = 'red';
      }, 5000)
    })

    return () => (
      <ul
        role="menubar"
        // key={+collapse}
        style={{ backgroundColor: props.backgroundColor || '' }}
        class={{
          'el-menu': true,
          'el-menu--horizontal': props.mode === 'horizontal',
          'el-menu--collapse': props.collapse
        }}
      >
        {slots.default?.()}
      </ul>
    )
  }
})

export default ElMenu
