import { defineComponent } from 'vue'

const Listbox = defineComponent({
  name: 'TListbox',
  props: {
    list: {
      type: Array,
      required: true,
    },
    render: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return props.list.map(item => props.render(item))
    }
  },
})
