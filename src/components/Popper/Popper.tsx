import { defineComponent, Teleport, PropType, reactive, watchEffect, cloneVNode, h, Transition, onUnmounted } from 'vue'
import { Modifier } from '@popperjs/core'
import { getBlockCls, getCompName } from '@/config'
import { uniqueId } from '@/utils/uniqueId'
import { createEl, removeEl } from '@/utils/dom'
import { usePopper } from './usePopper'

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'

const blockCls = getBlockCls('Popper')
const Popper = defineComponent({
  name: getCompName('Popper'),
  emits: ['update:modelValue'],
  props: {
    modelValue: Boolean,
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    transition: {
      type: String,
      default: ''
    },
    modifiers: {
      type: Array as PropType<Partial<Modifier<any, any>>[]>,
      default: []
    },
    strategy: {
      type: String as PropType<'absolute' | 'fixed'>,
      default: 'absolute'
    }
  },
  setup(props, { attrs, slots, emit }) {
    const id = uniqueId('el-popper-teleport')
    const teleportEl = createEl(id)
    const { referenceEl, popperEl, popperRef, state: popperState } = usePopper({
      placement: props.placement,
      strategy: props.strategy,
      modifiers: props.modifiers
    })

    const state = reactive({
      show: false
    })

    const showHandler = () => {
      state.show = true
    }
    const hideHandler = () => {
      state.show = false
    }
    const clickAwayHandler = (event: any) => {
      if (referenceEl.value && !referenceEl.value.contains(event.target)) {
        state.show = false
      }
    }
    watchEffect(() => {
      if (state.show) {
        popperRef.value?.update()
      }
    })
    watchEffect(onInvalidate => {
      if (props.trigger === 'hover') {
        if (referenceEl.value) {
          referenceEl.value.addEventListener('mouseenter', showHandler)
          referenceEl.value.addEventListener('mouseleave', hideHandler)
        }
        onInvalidate(() => {
          if (referenceEl.value) {
            referenceEl.value.removeEventListener('mouseenter', showHandler)
            referenceEl.value.removeEventListener('mouseleave', hideHandler)
          }
        })
      } else {
        if (referenceEl.value) {
          referenceEl.value.addEventListener('click', showHandler)
          document.addEventListener('click', clickAwayHandler)
        }
        onInvalidate(() => {
          if (referenceEl.value) {
            referenceEl.value.removeEventListener('click', showHandler)
            document.removeEventListener('click', clickAwayHandler)
          }
        })
      }
    })
    onUnmounted(() => {
      removeEl(teleportEl)
    })
    return () => {
      const slotContent = slots.default ? slots.default() : []

      const transformedSlotContent = slotContent.map((vnode, index) => {
        if (index === 0) {
          console.log(vnode)
          if (typeof vnode.type === 'string') {
            return cloneVNode(vnode, { ref: referenceEl })
          } else if (typeof vnode.type === 'object') {
            return cloneVNode(vnode, {
              ref: (instance: any) => {
                referenceEl.value = instance?.$el ?? null
              }
            })
          }
          return h('span', { ref: referenceEl }, cloneVNode(vnode))
        }
        return cloneVNode(vnode)
      })

      return (
        <>
          <Teleport to={`#${teleportEl.id}`}>
            <Transition name={props.transition}>
              <div
                class={[blockCls, props.popperClass]}
                ref={popperEl}
                v-show={state.show}
                style={popperState.styles.popper}
                {...popperState.attributes.popper}
              >
                {slots.popper?.()}
                <div class={`${blockCls}__arrow`} style={popperState.styles.arrow} data-popper-arrow></div>
              </div>
            </Transition>
          </Teleport>
          {transformedSlotContent}
        </>
      )
    }
  }
})

export default Popper
