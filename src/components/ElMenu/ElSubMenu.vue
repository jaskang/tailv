<template>
  <li
    :class="{
      'el-submenu': true,
      'is-active': isActive,
      'is-opened': opened,
      'is-disabled': disabled
    }"
    role="menuitem"
    @mouseenter="handleMouseenter"
    @mouseleave="() => handleMouseleave(false)"
    @focus="handleMouseenter"
  >
    <div
      ref="submenuTitleRef"
      class="el-submenu__title"
      :style="[paddingStyle, titleStyle, { backgroundColor }]"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title"></slot>
      <i :class="['el-submenu__icon-arrow', submenuTitleIcon]"></i>
    </div>
    <template v-if="isMenuPopup">
      <div
        v-show="opened"
        ref="menu"
        :class="[`el-menu--${mode}`, popperClass]"
        @mouseenter="$event => handleMouseenter($event, 100)"
        @mouseleave="() => handleMouseleave(true)"
        @focus="$event => handleMouseenter($event, 100)"
      >
        <ul
          role="menu"
          :class="['el-menu el-menu--popup', `el-menu--popup-`]"
          :style="{ backgroundColor: backgroundColor || '' }"
        >
          <slot></slot>
        </ul>
      </div>
    </template>
    <template v-else>
      <ul
        v-show="opened"
        role="menu"
        class="el-menu el-menu--inline"
        :style="{ backgroundColor: backgroundColor || '' }"
      >
        <slot></slot>
      </ul>
    </template>
  </li>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, provide, ref } from 'vue';
import { useElMenu } from './provides';

export default defineComponent({
  name: 'ElSubmenu',
  props: {
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 300
    },
    disabled: { type: Boolean, default: false },
    popperClass: { type: String, default: '' },
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const { rootMenu, parentMenu, parentKey, paddingStyle } = useElMenu();
    const id = Symbol('ElSubmenu');
    const submenuTitleRef = ref(null);
    const state = reactive({
      submenus: [],
      items: []
    });
    provide(parentKey, {
      items: state.items,
      deep: parentMenu.deep + 1,
      isRoot: false
    });

    const isActive = computed(() => {
      return state.items.some(item => item.isActive) || state.submenus.some(item => item.isActive);
    });
    const opened = computed(() => {
      return rootMenu.openedMenus.includes(id);
    });
    const titleStyle = computed(() => {
      if (rootMenu.mode !== 'horizontal') {
        return {
          color: rootMenu.textColor || ''
        };
      }
      return {
        borderBottomColor: isActive.value ? rootMenu.activeTextColor : 'transparent',
        color: isActive.value ? rootMenu.activeTextColor : rootMenu.textColor
      };
    });

    const submenuTitleIcon =
      (rootMenu.mode === 'horizontal' && parentMenu.deep === 0) || (rootMenu.mode === 'vertical' && !rootMenu.collapse)
        ? 'el-icon-arrow-down'
        : 'el-icon-arrow-right';

    const handleClick = () => {
      if (
        (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal') ||
        (rootMenu.collapse && rootMenu.mode === 'vertical') ||
        props.disabled
      ) {
        return;
      }
      rootMenu.openMenu(id);
    };

    const handleMouseenter = () => {
      if (
        (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
        (!rootMenu.collapse && rootMenu.mode === 'vertical') ||
        props.disabled
      ) {
        return;
      }
      rootMenu.openMenu(id);
    };
    const handleMouseleave = () => void 0;

    const handleTitleMouseenter = () => {
      if (rootMenu.mode === 'horizontal' && !rootMenu.backgroundColor) return;
      // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = rootMenu.hoverBackground);
    };
    const handleTitleMouseleave = () => {
      if (rootMenu.mode === 'horizontal' && !rootMenu.backgroundColor) return;
      submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = rootMenu.backgroundColor || '');
    };

    return {
      mode: rootMenu.mode,
      opened: opened,
      isMenuPopup: rootMenu.isMenuPopup,
      isActive,
      titleStyle,
      paddingStyle,
      submenuTitleIcon,
      backgroundColor: rootMenu.backgroundColor,
      handleClick,
      handleMouseenter,
      handleMouseleave,
      handleTitleMouseenter,
      handleTitleMouseleave,
      submenuTitleRef
    };
  }
});
</script>
<style lang="less"></style>
