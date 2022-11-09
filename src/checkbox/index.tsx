import { computed, defineComponent, type PropType } from "vue";
import "./index.scss";

export const ECheckbox = defineComponent({
  name: "ECheckbox",
  props: {
    disabled: Boolean,
  },
  setup(props, { slots }) {
    const cls = computed(() => {
      const ret: string[] = [];
      if (props.disabled) {
        ret.push("is-disabled");
      }
      return ret;
    });
    return () => (
      <button class={`e-checkbox ${cls.value.join(" ")}`}>
        {slots.default?.()}
      </button>
    );
  },
});
