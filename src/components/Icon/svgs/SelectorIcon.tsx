import { defineComponent, type SlotsType, type VNode } from 'vue'

export const SelectorIcon = defineComponent({
  name: 'TSelectorIcon',
  setup() {
    return () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    )
  },
})
