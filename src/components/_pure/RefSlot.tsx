import { cloneVNode, type ComponentPublicInstance, defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'

import { extractSingleChild } from '@/utils/vnode'

export const RefSlot = defineComponent({
  name: 'TRefSlot',
  emits: {
    updateEl: (el: HTMLElement | null) => true,
  },
  setup(props, { slots, emit }) {
    const childRef = ref<HTMLElement | ComponentPublicInstance | null>(null)
    watch(childRef, child => {
      if (child) {
        if ('$el' in child) {
          emit('updateEl', child.$el || null)
        } else {
          emit('updateEl', child)
        }
      } else {
        emit('updateEl', null)
      }
    })
    onUnmounted(() => {
      childRef.value = null
    })
    return () => {
      const slotVNodes = slots.default?.() ?? []
      const child = extractSingleChild(slotVNodes)

      const childWithRef =
        child &&
        cloneVNode(
          child,
          {
            ref: el => {
              // @ts-expect-error
              childRef.value = el
            },
          },
          true
        )
      return childWithRef
    }
  },
})
