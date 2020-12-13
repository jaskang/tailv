<template>
  <li
    ref="elRef"
    :class="classes"
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
  reactive,
  ref
} from 'vue'
import { mergeClass, colorLighten } from '@elenext/shared'
import { getBlockCls, getCompName } from '../../utils'
import { MENU_IJK, MENU_ITEM_PADDING } from './core'

const blockCls = getBlockCls('MenuItem')
const MenuItem = defineComponent({
  name: getCompName('MenuItem'),
  setup() {
    const self = getCurrentInstance()
    const elRef = ref()
    const menuProvider = inject(MENU_IJK)

    const state = reactive({
      rootState: menuProvider.state.rootState,
      uid: self.uid,
      uidPath: [...menuProvider.state.uidPath, self.uid],
      isOpen: false,
      deep: menuProvider.state.deep + 1,
      children: undefined
    })
    const isHover = ref(false)
    const isActive = computed(() => menuProvider.state.rootState.activeUid === self.uid)

    const classes = computed(() => {
      return mergeClass(blockCls, {
        'is-active': isActive.value
      })
    })

    const styles = computed<CSSProperties>(() => {
      return {
        color: isActive.value ? menuProvider.state.rootState.activeTextColor : menuProvider.state.rootState.textColor,
        backgroundColor: isActive.value
          ? menuProvider.state.rootState.activeBackgroundColor
          : isHover.value
          ? menuProvider.state.rootState.activeBackgroundColor
          : menuProvider.state.rootState.backgroundColor,
        borderColor: isActive.value ? menuProvider.state.rootState.activeTextColor : 'transparent',
        paddingLeft: state.deep * MENU_ITEM_PADDING + 'px'
      }
    })

    const clickHandler = (event: MouseEvent) => {
      menuProvider.action.select(state)
    }
    const mouseenterHandler = (event: MouseEvent) => (isHover.value = true)
    const mouseleaveHandler = (event: MouseEvent) => (isHover.value = false)

    onBeforeUnmount(() => {
      menuProvider.action.remove(state)
    })
    menuProvider.action.add(state)

    return {
      elRef,
      classes,
      styles,
      clickHandler,
      mouseenterHandler,
      mouseleaveHandler
    }
  }
})

export default MenuItem
</script>
