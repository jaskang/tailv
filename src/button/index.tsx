import { computed, defineComponent, type PropType } from "vue";
import "./index.scss";

export const EButton = defineComponent({
  name: "EButton",
  props: {
    type: String as PropType<"round" | "circle" | "link" | "plain">,
    color: String as PropType<"primary" | "success" | "warning" | "error">,
    size: String as PropType<"small" | "large">,
    round: Boolean,
    disabled: Boolean,
  },
  setup(props, { slots }) {
    const cls = computed(() => {
      const ret: string[] = [];
      ret.push(`e-button--${props.color || "default"}`);
      if (props.type) {
        ret.push(`e-button--${props.type}`);
      }
      if (props.size) {
        ret.push(`e-button--${props.size}`);
      }
      if (props.disabled) {
        ret.push("is-disabled");
      }
      return ret;
    });
    return () => (
      <button class={`e-button ${cls.value.join(" ")}`}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
