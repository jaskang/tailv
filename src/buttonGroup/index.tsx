import { defineComponent } from "vue";
import "./index.scss";

export const EButtonGroup = defineComponent({
  name: "EButtonGroup",
  setup(_, { slots }) {
    return () => <div class="e-button-group">{slots.default?.()}</div>;
  },
});
