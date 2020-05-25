<template>
  <li
    :class="{
      'el-submenu': true,
      'is-active': state.isActive,
      'is-opened': state.isOpen,
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
      :style="[state.style]"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title"></slot>
      <i :class="['el-submenu__icon-arrow', state.icon]"></i>
    </div>
    <template v-if="isPopup">
      <teleport :to="`#${teleportId}`">
        <ul
          role="menu"
          :class="`el-menu el-menu--popup el-menu--popup-${state.placement}`"
          :style="{ backgroundColor: state.style.backgroundColor }"
        >
          <slot></slot>
        </ul>
      </teleport>
    </template>
    <template v-else>
      <ul
        v-show="state.isOpen"
        role="menu"
        class="el-menu el-menu--inline"
        :style="{ backgroundColor: state.style.backgroundColor }"
      >
        <slot></slot>
      </ul>
    </template>
  </li>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { usePopper } from '../../hooks/usePopper';
import { useElSubMenu } from './provides';

export default defineComponent({
  name: 'ElSubmenu',
  props: {
    disabled: { type: Boolean, default: false },
    popperClass: { type: String, default: '' }
  },
  setup(props) {
    const { root, parent, state } = useElSubMenu();
    const { referenceRef: submenuTitleRef, teleportId, show, hide } = usePopper('ElMenuPopover', {
      placement: parent.isRoot.value ? 'bottom-start' : 'right-start',
      modifiers: [{ name: 'offset', options: { offset: parent.isRoot.value ? [0, 0] : [0, 4] } }],
      class: ['el-popper', `el-menu--${root.state.mode}`, props.popperClass]
    });
    watch(state.isOpen, value => {
      if (value) {
        show();
      } else {
        hide();
      }
    });
    const handleClick = () => {
      if (
        (root.state.trigger === 'hover' && root.state.mode === 'horizontal') ||
        (root.state.collapse && root.state.mode === 'vertical') ||
        props.disabled
      ) {
        return;
      }
      if (state.isOpen.value) {
        root.close(state.id.value);
      } else {
        root.open(state.id.value);
      }
    };

    const handleMouseenter = () => {
      if (
        (root.state.trigger === 'click' && root.state.mode === 'horizontal') ||
        (!root.state.collapse && root.state.mode === 'vertical') ||
        props.disabled
      ) {
        return;
      }
      root.open(state.id.value);
    };
    const handleMouseleave = () => {
      if (
        (root.state.trigger === 'click' && root.state.mode === 'horizontal') ||
        (!root.state.collapse && root.state.mode === 'vertical')
      ) {
        return;
      }
      root.close(state.id.value);
    };

    const handleTitleMouseenter = () => {
      if (root.state.mode === 'horizontal' && !root.state.backgroundColor) return;
      // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root.hoverBackground);
    };
    const handleTitleMouseleave = () => {
      if (root.state.mode === 'horizontal' && !root.state.backgroundColor) return;
      submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root.state.backgroundColor || '');
    };
    return {
      teleportId,
      state,
      isPopup: root.state.isPopup,
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
