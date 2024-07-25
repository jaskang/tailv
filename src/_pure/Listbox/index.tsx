import { defineComponent, type SlotsType } from 'vue'

const Listbox = defineComponent(
  (props: { type: string }) => {
    return () => <ul class=""></ul>
  },
  {
    name: 'TListbox',
    props: ['type'],
    emits: ['change'],
  }
)

const ListboxOption = defineComponent({
  name: 'TListboxOption',
  props: {
    value: { type: null },
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number } // i want : default: { foo: T; bar: number };
  }>,
  setup(props) {
    return () => <></>
  },
})
