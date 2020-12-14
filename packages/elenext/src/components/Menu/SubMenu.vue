<template>
  <li :class="{ 'el-sub-menu': true, 'is-opened': isOpen }">
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
        <IconChevronRight />
      </span>
    </div>
    <template v-if="mode === 'popper'">
      <Popper
        v-model="isOpen"
        placement="right-start"
        trigger="click"
        mode="outer"
        :arrow="false"
        :reference="titleElRef"
      >
        <template #content>
          <ul class="el-menu">
            <slot />
          </ul>
        </template>
      </Popper>
    </template>
    <template v-else>
      <CollapseTransition>
        <ul v-show="isOpen" class="el-menu">
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
import { IconChevronRight } from '@elenext/icons'
import { CollapseTransition } from '../Transition'
import { Popper } from '../Popper'
import { MENU_IJK, MENU_ITEM_PADDING } from './core'

const SubMenu = defineComponent({
  name: 'SubMenu',
  components: {
    CollapseTransition,
    Popper,
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

    const styles = computed<CSSProperties>(() => {
      return {
        color: menuProvider.state.rootState.textColor,
        backgroundColor: isHover.value
          ? menuProvider.state.rootState.activeBackgroundColor
          : menuProvider.state.rootState.backgroundColor,
        borderColor: 'transparent',
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
    return {
      mode: menuProvider.state.rootState.mode,
      isOpen,
      styles,
      titleElRef,
      clickHandler,
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
