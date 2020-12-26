<template>
  <li
    :class="{ 'el-sub-menu': true, 'is-opened': state.isOpen }"
    :style="{ backgroundColor: state.root.backgroundColor }"
  >
    <div
      ref="titleElRef"
      class="el-sub-menu__title"
      :style="styles"
      @mouseenter="mouseenterHandler"
      @mouseleave="mouseleaveHandler"
      @click="titleClickHandler"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <span class="el-sub-menu__arrow">
        <IconChevronUp v-if="state.root.mode === 'vertical'" />
        <IconChevronRight v-if="state.root.mode === 'popper'" />
      </span>
    </div>
    <template v-if="state.root.mode !== 'vertical'">
      <Popper
        popper-class="el-sub-menu"
        trigger="hover"
        mode="outer"
        :placement="state.root.mode === 'popper' || state.deep > 1 ? 'right-start' : 'bottom'"
        :visible-arrow="false"
        :reference="titleElRef"
        @change="popperChangneHandler"
      >
        <template #content>
          <ul class="el-sub-menu__body" :style="{ backgroundColor: state.root.backgroundColor }">
            <slot />
          </ul>
        </template>
      </Popper>
    </template>
    <template v-else>
      <CollapseTransition>
        <ul v-show="state.isOpen" class="el-sub-menu__body">
          <slot />
        </ul>
      </CollapseTransition>
    </template>
  </li>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  provide,
  reactive,
  ref,
  onBeforeUnmount,
  App,
  PropType,
  CSSProperties,
  watch,
  watchEffect
} from 'vue'
import { mergeClass, colorLighten } from '@elenext/shared'
import { IconChevronUp, IconChevronRight } from '@elenext/icons'
import { CollapseTransition } from '../Transition'
import { Popper } from '../Popper'
import { MenuState, MENU_IJK, MENU_ITEM_PADDING, MENU_TYPE } from './core'
import { propTypes } from '../../utils/PropTypes'

const SubMenu = defineComponent({
  name: 'SubMenu',
  components: {
    CollapseTransition,
    Popper,
    IconChevronUp,
    IconChevronRight
  },
  props: {
    title: propTypes.string('')
  },
  setup(props, { attrs, slots, emit }) {
    const self = getCurrentInstance()
    const titleElRef = ref()
    const menuProvider = inject(MENU_IJK)
    const state = reactive<MenuState>({
      root: menuProvider.root,
      type: MENU_TYPE.SUB,
      uid: self.uid,
      uidPath: [...menuProvider.uidPath, self.uid],
      deep: menuProvider.deep + 1,
      isOpen: menuProvider.root.openedSet.has(self.uid),
      isHover: false,
      isActive: menuProvider.root.activePath.indexOf(self.uid) !== -1,
      isPopper: menuProvider.root.mode !== 'vertical' && menuProvider.deep + 1 > 1
    })
    watchEffect(() => {
      state.isOpen = menuProvider.root.openedSet.has(self.uid)
      state.isActive = menuProvider.root.activePath.indexOf(self.uid) !== -1
      state.isPopper = menuProvider.root.mode !== 'vertical' && menuProvider.deep + 1 > 1
    })

    const styles = computed<CSSProperties>(() => {
      const mode = state.root.mode
      return {
        color: state.isActive ? state.root.activeTextColor : state.root.textColor,
        backgroundColor:
          state.root.mode === 'vertical'
            ? state.isHover
              ? state.root.activeBackgroundColor
              : state.root.backgroundColor
            : state.isActive || state.isOpen || state.isHover
            ? state.root.activeBackgroundColor
            : state.root.backgroundColor,
        borderColor: mode === 'horizontal' && state.isActive ? state.root.activeTextColor : 'transparent',
        paddingLeft: `${(state.isPopper ? 1 : state.deep) * MENU_ITEM_PADDING}px`
      }
    })

    const mouseenterHandler = (event: MouseEvent) => (state.isHover = true)
    const mouseleaveHandler = (event: MouseEvent) => (state.isHover = false)

    const titleClickHandler = (event: MouseEvent) => {
      if (state.root.mode === 'vertical') {
        state.root.methods.select(state)
      }
    }
    const popperChangneHandler = (visible: boolean) => {
      state.root.methods.select(state)
    }

    provide(MENU_IJK, state)

    return {
      state,
      styles,
      titleElRef,
      titleClickHandler,
      popperChangneHandler,
      mouseenterHandler,
      mouseleaveHandler
    }
  }
})
SubMenu.install = (app: App): void => {
  app.component(SubMenu.name, SubMenu)
}
export default SubMenu
</script>
