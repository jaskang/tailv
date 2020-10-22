import { defineComponent, PropType } from 'vue'

import { Popper } from '../Popper'

// import './Popover.scss'
import { normalizeClass } from '@/utils/dom'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Popover')

const Popover = defineComponent({
  name: getCompName('Popover'),
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    popperClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <Popper
        popperClass={normalizeClass([blockCls, props.popperClass, props.content && 'el-popover--plain'])}
        trigger={props.trigger}
        v-slots={{
          popper: () => (
            <div ref="popper" style={{ width: props.width + 'px' }} role="tooltip" id="tooltipId">
              {props.title && <div class="el-popover__title">{props.title}</div>}
              {slots.popper ? slots.popper() : props.content}
            </div>
          ),
          default: slots.default
        }}
      ></Popper>
    )
  }
})

export default Popover
