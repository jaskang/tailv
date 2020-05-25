import { defineComponent, h, mergeProps, reactive, PropType, Prop, watchEffect, onMounted } from 'vue';
import { useElMenu } from './provides';

export interface ElMenuProps {
  mode?: 'horizontal' | 'vertical';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  trigger?: 'click' | 'hover';
  collapse?: boolean;
}

export interface ElMenuOptions extends Required<ElMenuProps> {
  isPopup: boolean;
  activeIndex: number;
  items: any[];
  openedMenus: any[];
}

export default defineComponent({
  name: 'Elmenu',
  props: {
    mode: String,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    trigger: String,
    collapse: Boolean
  },
  setup(props: ElMenuProps, { attrs, slots, emit }) {
    const state = reactive<ElMenuOptions>({
      mode: props.mode || 'vertical',
      backgroundColor: props.backgroundColor || '',
      textColor: props.textColor || '',
      activeTextColor: props.activeTextColor || '',
      trigger: props.trigger || 'hover',
      collapse: props.collapse || false,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse),
      activeIndex: -1,
      items: [],
      openedMenus: []
    });

    useElMenu(state);

    onMounted(() => {
      setTimeout(() => {
        // state.backgroundColor = 'red';
      }, 5000);
    });
    return () => {
      return h(
        'ul',
        mergeProps(
          {
            style: { backgroundColor: state.backgroundColor || '' },
            class: { 'el-menu--horizontal': state.mode === 'horizontal', 'el-menu': true }
          },
          attrs
        ),
        slots.default?.()
      );
    };
  }
});
