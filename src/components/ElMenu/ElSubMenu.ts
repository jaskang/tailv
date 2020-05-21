import { defineComponent, h, reactive, computed, provide } from 'vue';
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
    disabled: Boolean,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const { rootMenu, parentMenu, parentKey, paddingStyle } = useElMenu();
    const state = reactive({
      submenus: [],
      items: []
    });
    provide(parentKey, {
      state: {
        items: state.items
      },
      deep: parentMenu.deep + 1,
      isRoot: false
    });
    const isActive = computed(() => {
      return state.items.some(item => item.isActive) || state.submenus.some(item => item.isActive);
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
    return () =>
      h(
        'li',
        {
          class: {
            'el-submenu': true,
            'is-active': isActive,
            'is-opened': false,
            'is-disabled': false
          },
          role: 'menuitem',
          'aria-haspopup': 'true',
          'aria-expanded': false,
          onMouseEnter: () => void 0,
          onMouseLeave: () => void 0,
          onFocus: () => void 0
        },
        [
          h(
            'div',
            {
              class: {
                'el-submenu__title': true
              },
              style: [paddingStyle, titleStyle.value, { backgroundColor: rootMenu.backgroundColor }]
            },
            [slots.title?.(), h('i', { class: 'el-submenu__icon-arrow  el-icon-arrow-down' })]
          ),
          h(
            'ul',
            {
              role: 'menu',
              class: 'el-menu el-menu--inline',
              'v-show': true,
              style: { backgroundColor: rootMenu.backgroundColor || '' }
            },
            slots.default?.()
          )
        ]
      );
  }
});
