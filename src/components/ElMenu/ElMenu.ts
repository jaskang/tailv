import { defineComponent, PropType, provide, h, mergeProps, InjectionKey, reactive, computed } from 'vue';
import { useElMenu } from './provides';

export default defineComponent({
  name: 'Elmenu',
  props: {
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    menuTrigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    collapse: {
      type: Boolean,
      default: false
    },
    activeTextColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { mode, backgroundColor, activeTextColor, textColor, collapse, menuTrigger } = props;
    const { rootMenu, rootKey, parentKey } = useElMenu();
    const state = reactive({
      activeIndex: -1,
      items: [],
      openedMenus: []
    });
    const isMenuPopup = computed(() => {
      return mode === 'horizontal' || !!(mode === 'vertical' && collapse);
    });
    provide(rootKey, {
      items: state.items,
      collapse: !!collapse,
      isMenuPopup: isMenuPopup.value,
      activeIndex: state.activeIndex,
      menuTrigger,
      deep: 0,
      mode,
      backgroundColor,
      activeTextColor,
      textColor,
      openedMenus: state.openedMenus,
      openMenu(id: any) {
        if (state.openedMenus.indexOf(id) === -1) {
          state.openedMenus.push(id);
        }
      },
      closeMenu(id: any) {
        const menuIndex = state.openedMenus.indexOf(id);
        if (menuIndex >= 0) {
          state.openedMenus.splice(menuIndex, 1);
        }
      },
      selectIndex(index: number) {
        state.activeIndex = index;
      }
    });
    provide(parentKey, {
      items: state.items,
      deep: 0,
      isRoot: true
    });

    return () =>
      h(
        'ul',
        mergeProps(
          {
            style: { backgroundColor: backgroundColor || '' },
            class: { 'el-menu--horizontal': mode === 'horizontal', 'el-menu': true }
          },
          attrs
        ),
        slots.default?.()
      );
  }
});
