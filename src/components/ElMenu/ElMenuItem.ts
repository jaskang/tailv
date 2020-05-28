import { defineComponent, h, mergeProps } from 'vue';
import { useElMenuContext, useElMenuItem } from './provides';
import { useRouter, RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'ElMenuItem',
  props: {
    path: [String, Object]
  },
  setup(
    props: {
      path: RouteLocationRaw;
    },
    { attrs, slots }
  ) {
    const { root, state } = useElMenuItem();
    const router = useRouter();
    const handleClick = () => {
      root.select(state.index.value);
      if (props.path) {
        router.push(props.path);
      }
    };

    return () =>
      h(
        'li',
        mergeProps(
          {
            style: [state.style.value],
            class: {
              'el-menu-item': true,
              'is-active': state.isActive.value,
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
