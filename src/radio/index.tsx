import {
  computed,
  defineComponent,
  ref,
  watchEffect,
  type PropType,
} from "vue";
import { classNames } from "../_utils";
import "./index.scss";

export const ERadio = defineComponent({
  name: "ERadio",
  props: {
    disabled: Boolean,
    checked: Boolean,
    name: String,
    value: [String, Number],
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
    const onChange = (e: Event) => {
      console.log("change", e);
    };

    return () => (
      <label class={["e-radio", props.disabled && "is-disabled"]}>
        <input
          ref="inputRef"
          class="e-radio__input"
          type="radio"
          value={props.value}
          name={props.name}
          disabled={props.disabled}
          checked={innerChecked.value}
          onInput={onInput}
          onClick={onClick}
          onChange={onChange}
        />
        <span class="e-radio__label">{slots.default?.()}</span>
      </label>
    );
  },
});
