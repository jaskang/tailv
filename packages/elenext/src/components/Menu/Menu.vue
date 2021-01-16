<template>
  <ul :class="`el-menu el-menu--${mode}`">
    <slot />
  </ul>
</template>

<script lang="ts">
import { App, defineComponent, getCurrentInstance, provide, reactive, watchEffect } from 'vue'
import { MenuState, MENU_IJK, MENU_TYPE } from './core'
import { prop } from '../../utils'

const EMenu = defineComponent({
  name: 'EMenu',
  props: {
    mode: prop.oneOf(['horizontal', 'vertical', 'popper'] as const).def('horizontal'),
    textColor: prop.hexColor().def('#303133'),
    backgroundColor: prop.hexColor().def('#fff'),
    activeTextColor: prop.hexColor().def('#409EFF'),
    activeBackgroundColor: prop.hexColor().def('#ecf5ff'),
    uniqueOpened: prop.bool(),
    currentPath: prop.string()
  },
  setup(props) {
    const instance = getCurrentInstance()
    const state = reactive<MenuState>({
      root: {
        mode: props.mode,
        textColor: props.textColor,
        activeTextColor: props.activeTextColor,
        backgroundColor: props.backgroundColor,
        activeBackgroundColor: props.activeBackgroundColor,
        children: [],
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
      uid: instance!.uid,
      uidPath: [instance!.uid],
      deep: 0,
      isOpen: false,
      isHover: false,
      isActive: false,
      isPopper: false
    })
    watchEffect(() => {
      const activeChild = state.root.children.filter(item => item.path === props.currentPath)
      if (props.currentPath && activeChild.length > 0) {
        state.root.methods.select(activeChild[0])
      }
    })
    provide(MENU_IJK, state)
    return { state }
  }
})

EMenu.install = (app: App): void => {
  app.component(EMenu.name, EMenu)
}
export default EMenu
</script>
