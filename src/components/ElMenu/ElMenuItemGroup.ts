import { defineComponent, h } from 'vue';
import { useElMenu } from './provides';

export default defineComponent({
  name: 'ElMenuItemGroup',
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    const { paddingStyle } = useElMenu();
    return () =>
      h(
        'li',
        {
          class: {
            'el-menu-item-group': true
          }
        },
        [
          h(
            'div',
            {
              class: {
                'el-menu-item-group__title': true
              },
              style: {
                ...paddingStyle
              }
            },
            slots.title?.() ?? props.title
          ),
          slots.default?.()
        ]
      );
  }
});
