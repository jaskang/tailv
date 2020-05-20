import { defineComponent, PropType, provide, h, mergeProps, InjectionKey, reactive } from 'vue';

export const ElMenuSymbol: InjectionKey<{
  state: {
    items: any[];
    activeIndex: number;
  };
  mode: string;
  backgroundColor: string;
  activeTextColor: string;
  textColor: string;
  selectIndex: (index: number) => void;
}> = Symbol();

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
    const state = reactive({
      activeIndex: -1,
      items: []
    });
    provide(ElMenuSymbol, {
      state,
      mode,
      backgroundColor,
      activeTextColor,
      textColor,
      selectIndex(index: number) {
        state.activeIndex = index;
      }
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
