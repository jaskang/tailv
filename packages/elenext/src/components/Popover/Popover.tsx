import { defineComponent, ref, onMounted, getCurrentInstance, Teleport, PropType, Ref, Fragment } from 'vue'
import { ElPopper } from '../Popper'

import './Popover.scss'

const Popover = defineComponent({
  props: {
    trigger: {
      type: String,
      default: 'click'
    }
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <ElPopper
        popperClass="el-popover"
        trigger={props.trigger}
        render={() => (
          <>
            <div>
              <div class="el-popover__title">title</div>
            </div>
            <div class="popper__arrow" data-popper-arrow></div>
          </>
        )}
      >
        {slots.default?.()}
      </ElPopper>
    )
  }
})

export default Popover
