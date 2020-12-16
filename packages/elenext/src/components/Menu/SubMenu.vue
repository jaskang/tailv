<template>
  <li :class="{ 'el-sub-menu': true, 'is-opened': isOpen }" :style="{ backgroundColor: backgroundColor }">
    <div
      ref="titleElRef"
      class="el-sub-menu__title"
      :style="styles"
      @mouseenter="mouseenterHandler"
      @mouseleave="mouseleaveHandler"
      @click="clickHandler"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <span class="el-sub-menu__arrow">
        <IconChevronUp v-if="mode === 'vertical'" />
        <IconChevronRight v-if="mode === 'popper'" />
      </span>
    </div>
    <template v-if="mode === 'popper'">
      <Popper
        popper-class="el-sub-menu"
        placement="right-start"
        trigger="hover"
        mode="outer"
        :visible-arrow="false"
        :reference="titleElRef"
        @change="popperChangneHandler"
      >
        <template #content>
          <ul class="el-sub-menu__body" :style="{ backgroundColor: backgroundColor }">
            <slot />
          </ul>
        </template>
      </Popper>
    </template>
    <template v-else>
      <CollapseTransition>
        <ul v-show="isOpen" class="el-sub-menu__body">
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
  CSSProperties
} from 'vue'
import { mergeClass, colorLighten } from '@elenext/shared'
import { IconChevronUp, IconChevronRight } from '@elenext/icons'
import { CollapseTransition } from '../Transition'
import { Popper } from '../Popper'
import { MENU_IJK, MENU_ITEM_PADDING } from './core'

const SubMenu = defineComponent({
  name: 'SubMenu',
  components: {
    CollapseTransition,
    Popper,
    IconChevronUp,
    IconChevronRight
  },
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    const self = getCurrentInstance()
    const titleElRef = ref()
    const menuProvider = inject(MENU_IJK)
    const state = reactive({
      rootState: menuProvider.state.rootState,
      uid: self.uid,
      uidPath: [...menuProvider.state.uidPath, self.uid],
      isOpen: false,
      deep: menuProvider.state.deep + 1,
      children: []
    })
    const isHover = ref(false)
    const isOpen = computed(() => state.rootState.openedUids.indexOf(state.uid) !== -1)
    const isActive = computed(() => state.rootState.activeUidPath.indexOf(state.uid) !== -1)

    const isPopperVisible = ref(false)
    const isPopper = computed(() => menuProvider.state.rootState.mode !== 'vertical' && state.deep > 1)

    const styles = computed<CSSProperties>(() => {
      const mode = menuProvider.state.rootState.mode
      return {
        color: isActive.value ? menuProvider.state.rootState.activeTextColor : menuProvider.state.rootState.textColor,
        backgroundColor:
          isActive.value || isHover.value || isPopperVisible.value
            ? menuProvider.state.rootState.activeBackgroundColor
            : menuProvider.state.rootState.backgroundColor,
        borderColor: 'transparent',
        paddingLeft: isPopper.value ? MENU_ITEM_PADDING + 'px' : state.deep * MENU_ITEM_PADDING + 'px'
      }
    })

    const clickHandler = (event: MouseEvent) => {
      if (menuProvider.state.rootState.mode === 'vertical') {
        menuProvider.action.select(state)
      }
    }
    const mouseenterHandler = (event: MouseEvent) => (isHover.value = true)
    const mouseleaveHandler = (event: MouseEvent) => (isHover.value = false)

    const popperChangneHandler = (visible: boolean) => {
      isPopperVisible.value = visible
    }

    provide(MENU_IJK, {
      state: state,
      action: {
        select: menuProvider.action.select,
        add: node => {
          state.children.push(node)
        },
        remove: node => {
          const index = state.children.indexOf(node)
          state.children.splice(index, 1)
        }
      }
    })

    onBeforeUnmount(() => {
      menuProvider.action.remove(state)
    })
    menuProvider.action.add(state)

    return {
      mode: menuProvider.state.rootState.mode,
      isOpen,
      styles,
      backgroundColor: menuProvider.state.rootState.backgroundColor,
      titleElRef,
      clickHandler,
      mouseenterHandler,
      mouseleaveHandler,
      popperChangneHandler
    }
  }
})
SubMenu.install = (app: App): void => {
  app.component(SubMenu.name, SubMenu)
}
export default SubMenu
</script>
