<template>
  <ul :class="`el-menu el-menu--${mode}`">
    <slot />
  </ul>
</template>

<script lang="ts">
import { mergeClass } from '@elenext/shared'
import { App, computed, defineComponent, getCurrentInstance, PropType, provide, reactive, ref } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { propTypes } from '../../utils/PropTypes'
import { MenuState, MENU_IJK, MENU_TYPE } from './core'

const blockCls = getBlockCls('Menu')
const Menu = defineComponent({
  name: getCompName('Menu'),
  props: {
    mode: propTypes.oneOfString<'horizontal' | 'vertical' | 'popper'>('horizontal'),
    textColor: propTypes.hexColor('#303133'),
    backgroundColor: propTypes.hexColor('#fff'),
    activeTextColor: propTypes.hexColor('#409EFF'),
    activeBackgroundColor: propTypes.hexColor('#ecf5ff'),
    uniqueOpened: Boolean
  },
  setup(props) {
    const self = getCurrentInstance()
    const state = reactive<MenuState>({
      root: {
        mode: props.mode,
        textColor: props.textColor,
        activeTextColor: props.activeTextColor,
        backgroundColor: props.backgroundColor,
        activeBackgroundColor: props.activeBackgroundColor,
        activeId: -1,
        activePath: [],
        openedSet: new Set(),
        methods: {
          select: node => {
            if (node.type === MENU_TYPE.SUB) {
              const isOpened = state.root.openedSet.has(node.uid)
              if (isOpened) {
                state.root.openedSet.delete(node.uid)
              } else {
                if (props.uniqueOpened) {
                  state.root.openedSet = new Set([...node.uidPath])
                } else {
                  state.root.openedSet.add(node.uid)
                }
              }
            } else if (node.type === MENU_TYPE.ITEM) {
              state.root.activePath = [...node.uidPath]
              state.root.activeId = node.uid
            }
          }
        }
      },
      type: MENU_TYPE.ROOT,
      uid: self.uid,
      uidPath: [self.uid],
      deep: 0,
      isPopper: false,
      isOpen: false,
      isActive: false
    })

    provide(MENU_IJK, state)

    return { state }
  }
})

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}
export default Menu
</script>
