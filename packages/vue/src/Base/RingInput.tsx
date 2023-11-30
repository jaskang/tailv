import { defineComponent } from "vue";


const RingInput = defineComponent({
  props:{
    disabled:Boolean,
    status:{
      type: String,
      default:'primary'
    },
  },
  setup(props,{slots}){
  return ()=> <div
  aria-disabled={props.disabled}
  class={[
    'z-input focus-within:ring-primary-500 flex items-center rounded-md text-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-inset',
    'aria-disabled:cursor-not-allowed aria-disabled:bg-gray-50 aria-disabled:text-gray-500 aria-disabled:ring-gray-200',
  ]}
  >
    {slots.default?.()}
  </div>
  }
})

export default RingInput