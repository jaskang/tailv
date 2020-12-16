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
  PropType,
  reactive,
  ref
} from 'vue'
import { mergeClass, colorLighten } from '@elenext/shared'
import { getBlockCls, getCompName } from '../../utils'
import { MENU_IJK, MENU_ITEM_PADDING } from './core'

const blockCls = getBlockCls('MenuItem')
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

    const isPopper = computed(() => menuProvider.state.rootState.mode !== 'vertical' && state.deep > 1)

    const classes = computed(() => {
      return mergeClass(blockCls, {
        'is-active': isActive.value
      })
    })

    const styles = computed<CSSProperties>(() => {
      const mode = menuProvider.state.rootState.mode
      return {
        color: isActive.value ? menuProvider.state.rootState.activeTextColor : menuProvider.state.rootState.textColor,
        backgroundColor: isActive.value
          ? menuProvider.state.rootState.activeBackgroundColor
          : isHover.value
          ? menuProvider.state.rootState.activeBackgroundColor
          : menuProvider.state.rootState.backgroundColor,
        borderColor: !isPopper.value && isActive.value ? menuProvider.state.rootState.activeTextColor : 'transparent',
        paddingLeft: isPopper.value ? MENU_ITEM_PADDING + 'px' : state.deep * MENU_ITEM_PADDING + 'px'
      }
    })

    const clickHandler = (event: MouseEvent) => {
      menuProvider.action.select(state)
      const { to } = props
      console.log(self)
    }
    const mouseenterHandler = (event: MouseEvent) => (isHover.value = true)
    const mouseleaveHandler = (event: MouseEvent) => (isHover.value = false)

    onBeforeUnmount(() => {
      menuProvider.action.remove(state)
    })
    menuProvider.action.add(state)

    return {
      elRef,
      state,
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
