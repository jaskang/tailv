<template>
  <li
    :class="{
      'el-menu-item': true,
      'is-active': state.isActive
    }"
    :style="styles"
    @mouseenter="mouseenterHandler"
    @mouseleave="mouseleaveHandler"
    @click="clickHandler"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  PropType,
  reactive,
  ref,
  watchEffect
} from 'vue'
import { mergeClass, colorLighten } from '@elenext/shared'
import { getCompName } from '../../utils'
import { MENU_IJK, MENU_ITEM_PADDING, MENU_TYPE } from './core'

const MenuItem = defineComponent({
  name: getCompName('MenuItem'),
  props: {
    to: {
      type: Object as PropType<any>,
      default: null
    }
  },
  setup(props, { emit }) {
    const self = getCurrentInstance()
    const menuProvider = inject(MENU_IJK)

    const state = reactive({
      root: menuProvider.root,
      type: MENU_TYPE.ITEM,
      uid: self.uid,
      uidPath: [...menuProvider.uidPath, self.uid],
      deep: menuProvider.deep + 1,
      isOpen: false,
      isActive: menuProvider.root.activeId === self.uid,
      isPopper: menuProvider.root.mode !== 'vertical' && menuProvider.type === MENU_TYPE.SUB
    })
    watchEffect(() => {
      state.isActive = menuProvider.root.activeId === self.uid
      state.isPopper = menuProvider.root.mode !== 'vertical' && menuProvider.type === MENU_TYPE.SUB
    })
    const isHover = ref(false)

    const styles = computed<CSSProperties>(() => {
      const mode = state.root.mode
      return {
        color: state.isActive ? state.root.activeTextColor : state.root.textColor,
        backgroundColor:
          state.isActive || isHover.value ? state.root.activeBackgroundColor : state.root.backgroundColor,
        borderColor: !state.isPopper && state.isActive ? state.root.activeTextColor : 'transparent',
        paddingLeft: state.isPopper ? MENU_ITEM_PADDING + 'px' : state.deep * MENU_ITEM_PADDING + 'px'
      }
    })

    const clickHandler = (event: MouseEvent) => {
      state.root.methods.select(state)
    }
    const mouseenterHandler = (event: MouseEvent) => (isHover.value = true)
    const mouseleaveHandler = (event: MouseEvent) => (isHover.value = false)

    return {
      state,
      styles,
      clickHandler,
      mouseenterHandler,
      mouseleaveHandler
    }
  }
})

export default MenuItem
</script>
