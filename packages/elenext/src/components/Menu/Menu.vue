<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>

<script lang="ts">
import { mergeClass } from '@elenext/shared'
import { App, computed, defineComponent, getCurrentInstance, PropType, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { MENU_IJK } from './core'

const blockCls = getBlockCls('Menu')
const Menu = defineComponent({
  name: getCompName('Menu'),
  props: {
    mode: {
      type: String as PropType<'horizontal' | 'vertical' | 'popper'>,
      default: 'horizontal'
    },
    uniqueOpened: Boolean,
    textColor: {
      type: String as PropType<string>,
      default: '#303133'
    },
    backgroundColor: {
      type: String as PropType<string>,
      default: '#fff'
    },
    activeTextColor: {
      type: String as PropType<string>,
      default: '#409EFF'
    },
    activeBackgroundColor: {
      type: String as PropType<string>,
      default: '#ecf5ff'
    }
  },
  setup(props) {
    const self = getCurrentInstance()
    const state = reactive({
      rootState: {
        mode: props.mode,
        textColor: props.textColor,
        activeTextColor: props.activeTextColor,
        backgroundColor: props.backgroundColor,
        activeBackgroundColor: props.activeBackgroundColor,
        activeUid: -1,
        activeUidPath: [],
        openedUids: []
      },
      uid: self.uid,
      uidPath: [self.uid],
      isOpen: false,
      deep: 0,
      children: []
    })
    const classes = computed(() => {
      return mergeClass(blockCls, `${blockCls}--${props.mode}`)
    })
    provide(MENU_IJK, {
      state,
      action: {
        select: (node, childrenVisible) => {
          if (Array.isArray(node.children)) {
            const index = state.rootState.openedUids.indexOf(node.uid)
            if (props.mode === 'vertical') {
              if (index !== -1) {
                state.rootState.openedUids.splice(index, 1)
              } else {
                if (props.uniqueOpened) {
                  state.rootState.openedUids = [...node.uidPath]
                } else {
                  state.rootState.openedUids.push(node.uid)
                }
              }
            } else {
              if (index === -1 && childrenVisible) {
                state.rootState.openedUids.push(node.uid)
              }
              if (index >= 0 && !childrenVisible) {
                state.rootState.openedUids.splice(index, 1)
              }
            }
          } else {
            // is MenuItem
            state.rootState.activeUidPath = [...node.uidPath]
            state.rootState.activeUid = node.uid
          }
        },
        add: node => {
          state.children.push(node)
        },
        remove: node => {
          const index = state.children.indexOf(node)
          state.children.splice(index, 1)
        }
      }
    })
    return {
      classes
    }
  }
})

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}
export default Menu
</script>
