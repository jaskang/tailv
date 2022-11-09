import {
  computed,
  defineComponent,
  ref,
  watchEffect,
  type PropType,
} from "vue";
import { classNames } from "../_utils";
import "./index.scss";

export const ECheckbox = defineComponent({
  name: "ECheckbox",
  props: {
    disabled: Boolean,
    checked: Boolean,
  },
  emits: ["onUpdate:checked"],
  setup(props, { emit, slots, expose }) {
    const innerChecked = ref(props.checked);

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement;
      innerChecked.value = el.checked;
      console.log(el.checked);
    };
    const onClick = (e: Event) => {
      console.log(e);

      if (props.disabled) {
        e.preventDefault();
        return false;
      }
    };
    const cls = computed(() =>
      classNames("e-checkbox", props.disabled && "is-disabled")
    );
    return () => (
      <label class={cls.value}>
        <input
          class="e-checkbox__input"
          type="checkbox"
          checked={innerChecked.value}
          onInput={onInput}
          onClick={onClick}
        />
        <span class="e-checkbox__label">{slots.default?.()}</span>
      </label>
    );
  },
});
