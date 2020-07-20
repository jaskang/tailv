import { defineComponent } from 'vue'

import { ElPopper } from '../Popper'

import './Popover.scss'
import { normalizeClass } from '../../utils/dom'

const Popover = defineComponent({
  name: 'ElPopver',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
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
      <ElPopper
        popperClass={normalizeClass([
          'el-popover',
          'el-popper',
          props.popperClass,
          props.content && 'el-popover--plain'
        ])}
        trigger={props.trigger}
        v-model={props.value}
        v-slots={{
          reference: slots.reference,
          default: () => (
            <div
              ref="popper"
              v-show="!disabled && showPopper"
              style={{ width: props.width + 'px' }}
              role="tooltip"
              id="tooltipId"
            >
              {props.title && <div class="el-popover__title">{props.title}</div>}
              {slots.default ? slots.default() : props.content}
            </div>
          )
        }}
      ></ElPopper>
    )
  }
})

export default Popover
