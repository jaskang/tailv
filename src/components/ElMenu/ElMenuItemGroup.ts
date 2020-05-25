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
    const { parent } = useElMenuContext();
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
                paddingLeft: (parent.deep.value + 1) * 20 + 'px'
              }
            },
            slots.title?.() ?? props.title
          ),
          slots.default?.()
        ]
      );
  }
});
