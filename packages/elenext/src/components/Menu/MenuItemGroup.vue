<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="{ paddingLeft: paddingLeft }">
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
import { App, computed, defineComponent, inject } from 'vue'
import { getCompName } from '../../utils'
import { MENU_IJK, MENU_ITEM_PADDING } from './core'

const MenuItemGroup = defineComponent({
  name: getCompName('MenuItemGroup'),
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const menuProvider = inject(MENU_IJK)

    const isPopper = computed(() => menuProvider.state.rootState.mode !== 'vertical' && menuProvider.state.deep > 0)

    const paddingLeft = computed(() => {
      return isPopper.value ? `${MENU_ITEM_PADDING}px` : `${(menuProvider.state.deep + 1) * MENU_ITEM_PADDING}px`
    })

    return {
      paddingLeft
    }
  }
})

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup
</script>
