import { defineComponent } from 'vue'

export const EButtonGroup = defineComponent({
  name: 'EButtonGroup',
  setup(_, { slots }) {
    return () => <div class="e-button-group">{slots.default?.()}</div>
  },
})
