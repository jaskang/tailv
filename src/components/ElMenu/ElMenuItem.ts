import { defineComponent, inject, h, mergeProps, onUnmounted, onMounted, computed } from 'vue';
import { useElMenu } from './provides';

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { attrs, slots, emit }) {
    const { parentMenu, rootMenu, paddingStyle } = useElMenu();
    const id = Symbol('ElMenuItem');

    const ownIndex = computed(() => {
      return rootMenu.items.indexOf(id);
    });

    const isActive = computed(() => ownIndex.value === rootMenu.activeIndex);

    const handleClick = () => {
      rootMenu.selectIndex(ownIndex.value);
    };

    const itemStyle = computed(() => {
      const style: any = {
        color: isActive.value ? rootMenu.activeTextColor : rootMenu.textColor,
        ...paddingStyle
      };
      if (rootMenu.mode === 'horizontal') {
        style.borderBottomColor = isActive.value ? rootMenu.activeTextColor : 'transparent';
      }
      return style;
    });

    onMounted(() => {
      if (parentMenu.deep >= 0) {
        if (parentMenu.items.indexOf(id) === -1) {
          parentMenu.items.push(id);
        }
      }

      if (rootMenu.items.indexOf(id) === -1) {
        rootMenu.items.push(id);
      }
    });
    onUnmounted(() => {
      if (parentMenu.deep >= 0) {
        if (parentMenu.items.indexOf(id) === -1) {
          const indexWithParent = parentMenu.items.indexOf(id);
          parentMenu.items.splice(indexWithParent, 1);
        }
      }
      if (ownIndex.value >= 0) {
        rootMenu.items.splice(ownIndex.value, 1);
      }
    });
    return () =>
      h(
        'li',
        mergeProps(
          {
            style: [paddingStyle, itemStyle.value, { backgroundColor: rootMenu.backgroundColor }],
            class: {
              'el-menu-item': true,
              'is-active': isActive.value,
              'is-disabled': false
            },
            role: 'menuitem',
            tabindex: '-1',
            onClick: handleClick
          },
          attrs
        ),
        [slots.default?.(), slots.title?.()]
      );
  }
});
