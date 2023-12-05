import { computed, defineComponent } from 'vue'
import { createRingInputStyle } from '../../../style/src/Input'

const RingInput = defineComponent({
  props: {
    disabled: Boolean,
    status: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, { slots }) {
    const css = computed(() =>
      createRingInputStyle({
        disabled: props.disabled,
      })
    )
    return () => <div class={css.value}>{slots.default?.()}</div>
  },
})

export default RingInput
