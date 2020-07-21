import { defineComponent, watchEffect } from 'vue'

import { ElPopper } from '../Popper'

import './Popover.scss'
import { normalizeClass } from '../../utils/dom'

const Popover = defineComponent({
  name: 'ElPopver',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
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
    const onUpdate = (value: boolean) => {
      emit('update:modelValue', value)
    }
    return () => (
      <ElPopper
        popperClass={normalizeClass([
          'el-popover',
          'el-popper',
          props.popperClass,
          props.content && 'el-popover--plain'
        ])}
        trigger={props.trigger}
        modelValue={props.modelValue}
        on={{
          'update:modelValue': onUpdate
        }}
        // TODO: vueComponent/jsx parseEvents ?
        // vOn={[onUpdate,'update:modelValue']}
        v-slots={{
          popper: () => (
            <div
              ref="popper"
              v-show="!disabled && showPopper"
              style={{ width: props.width + 'px' }}
              role="tooltip"
              id="tooltipId"
            >
              {props.title && <div class="el-popover__title">{props.title}</div>}
              {slots.popper ? slots.popper() : props.content}
            </div>
          ),
          default: slots.default
        }}
      ></ElPopper>
    )
  }
})

export default Popover
