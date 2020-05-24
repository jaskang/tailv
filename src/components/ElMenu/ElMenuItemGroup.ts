import { defineComponent, h } from 'vue';
import { useElMenuContext } from './provides';

export default defineComponent({
  name: 'ElMenuItemGroup',
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    const { root } = useElMenuContext();
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
                paddingLeft: ''
              }
            },
            slots.title?.() ?? props.title
          ),
          slots.default?.()
        ]
      );
  }
});
