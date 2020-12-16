<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="styles">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <ul class="el-menu-item-group__body">
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import comp from '*.md'
import { App, computed, defineComponent, inject } from 'vue'
import { getCompName } from '../../utils'
import { propTypes } from '../../utils/PropTypes'
import { MENU_IJK, MENU_ITEM_PADDING, MENU_TYPE } from './core'

const MenuItemGroup = defineComponent({
  name: getCompName('MenuItemGroup'),
  props: {
    title: propTypes.string('')
  },
  setup(props, { slots }) {
    const state = inject(MENU_IJK)

    const isPopperInner = computed(() => {
      return state.root.mode !== 'vertical' && state.type === MENU_TYPE.SUB
    })
    const styles = computed(() => {
      return {
        paddingLeft: `${(isPopperInner.value ? 1 : state.deep + 1) * MENU_ITEM_PADDING}px`
      }
    })

    return {
      styles
    }
  }
})

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup
</script>
