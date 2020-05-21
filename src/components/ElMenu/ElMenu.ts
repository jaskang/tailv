import { defineComponent, PropType, provide, h, mergeProps, InjectionKey, reactive } from 'vue';
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
    activeTextColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { mode, backgroundColor, activeTextColor, textColor } = props;
    const { rootMenu, rootKey, parentKey } = useElMenu();
    const state = reactive({
      activeIndex: -1,
      items: []
    });
    if (!rootMenu) {
      provide(rootKey, {
        state,
        deep: 0,
        mode,
        backgroundColor,
        activeTextColor,
        textColor,
        selectIndex(index: number) {
          state.activeIndex = index;
        }
      });
      provide(parentKey, {
        state,
        deep: 0,
        isRoot: true
      });
    }

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
