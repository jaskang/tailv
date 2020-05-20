import { defineComponent, inject, h, mergeProps, onUnmounted, onMounted, computed } from 'vue';
import { ElMenuSymbol } from './ElMenu';

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { attrs, slots, emit }) {
    const parentMenu = inject(ElMenuSymbol);
    const id = Symbol('ElMenuItem');

    const ownIndex = computed(() => {
      return parentMenu.state.items.indexOf(id);
    });

    const isActive = computed(() => ownIndex.value === parentMenu.state.activeIndex);

    const handleClick = () => {
      parentMenu.selectIndex(ownIndex.value);
    };

    const itemStyle = computed(() => {
      const style: any = {
        color: isActive.value ? parentMenu.activeTextColor : parentMenu.textColor
      };
      if (parentMenu.mode === 'horizontal') {
        style.borderBottomColor = isActive.value ? parentMenu.activeTextColor : 'transparent';
      }
      return style;
    });

    onMounted(() => {
      parentMenu.state.items.push(id);
    });
    onUnmounted(() => {
      if (ownIndex.value >= 0) {
        parentMenu.state.items.splice(ownIndex.value, 1);
      }
    });
    return () =>
      h(
        'li',
        mergeProps(
          {
            style: [itemStyle.value, { backgroundColor: parentMenu.backgroundColor }],
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
