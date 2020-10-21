import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  Teleport,
  PropType,
  reactive,
  watch,
  watchEffect,
  ref,
  cloneVNode,
  createVNode,
  h,
  nextTick
} from 'vue'

import { usePopper } from './usePopper2'
import useClickAway from '../../hooks/useClickAway'
import { Placement } from '@popperjs/core'
import { getBlockCls, getCompName } from '../../config'
import { uniqueId } from '@/utils/uniqueId'
import { createEl } from '@/utils/dom'
// import vClickAway from '../../directives/v-click-away'

// const PopperInner = defineComponent({
//   props: {
//     setRootEl: {
//       type: Function as PropType<(el: HTMLElement | null) => void>,
//       required: true
//     }
//   },
//   setup({ setRootEl }, { slots }) {
//     onMounted(() => {
//       const instance = getCurrentInstance()
//       let node = instance!.vnode.el
//       while (node && !node.tagName) {
//         node = node.nextSibling
//       }
//       setRootEl(node as HTMLElement | null)
//     })
//     return () => (slots.default ? slots.default() : <span></span>)
//   }
// })
const blockCls = getBlockCls('Popper')
const Popper = defineComponent({
  name: getCompName('Popper'),
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    modifiers: { type: Array, default: [] },
    strategy: {
      type: String as PropType<'absolute' | 'fixed'>,
      default: 'bottom'
    }
  },
  setup(props, { attrs, slots, emit }) {
    const id = uniqueId('el-popper-teleport')
    const popperTeleportEl = createEl(id)

    const { referenceEl, popperEl, state: popperState } = usePopper({})
    const state = reactive({
      show: false
    })
    watchEffect(onInvalidate => {
      if (referenceEl.value) {
        console.log('mouseenter')

        referenceEl.value.addEventListener('mouseenter', () => {
          state.show = true
        })
        referenceEl.value.addEventListener('mouseleave', () => {
          state.show = false
        })
      }
    })

    return () => {
      const slotContent = slots.default ? slots.default() : []

      const transformedSlotContent = slotContent.map((vnode, index) => {
        if (index === 0) {
          console.log(vnode)
          if (typeof vnode.type === 'string') {
            return cloneVNode(vnode, { ref: referenceEl })
          } else if (typeof vnode.type === 'object') {
            return cloneVNode(vnode, { ref: referenceEl })
          }
          return h('span', { ref: referenceEl }, cloneVNode(vnode))
        }
        return cloneVNode(vnode)
      })

      return (
        <>
          <Teleport to={`#${popperTeleportEl.id}`}>
            <div
              ref={popperEl}
              v-show={state.show}
              style={popperState.styles.popper}
              {...popperState.attributes.popper}
            >
              {slots.popper?.()}
            </div>
          </Teleport>
          {transformedSlotContent}
        </>
      )
    }
  }
})

export default Popper
