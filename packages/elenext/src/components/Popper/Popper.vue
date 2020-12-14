<template>
  <teleport :to="`#${state.teleportEl.id}`">
    <Transition name="transition">
      <div
        v-show="isVisible"
        ref="popperRef"
        :class="['el-popper', popperClass]"
        :style="state.attrs.styles.popper"
        v-bind="state.attrs.attributes.popper"
      >
        <slot name="content" />
        <div class="el-popper__arrow" :style="state.attrs.styles.arrow" data-popper-arrow />
      </div>
    </Transition>
  </teleport>
  <DomSlot :init="referenceInitHandler">
    <slot />
  </DomSlot>
</template>
<script lang="ts">
import {
  defineComponent,
  Teleport,
  PropType,
  reactive,
  watchEffect,
  cloneVNode,
  getCurrentInstance,
  h,
  Transition,
  onUnmounted,
  App,
  ref,
  Ref,
  onUpdated,
  onMounted
} from 'vue'
import { Modifier } from '@popperjs/core'
import { getBlockCls, getCompName } from '../../utils'
import { uniqueId } from '../../utils/uniqueId'
import { createEl, removeEl } from '../../utils/dom'
import DomSlot from './DomSlot'
import { usePopper, Placement } from './usePopper'

const Popper = defineComponent({
  name: 'Popper',
  components: { DomSlot },
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
      default: null
    },
    transition: {
      type: String,
      default: undefined
    },
    offset: {
      type: Number as PropType<number>,
      default: 0
    },
    mode: {
      type: String as PropType<'outer' | 'inner'>,
      default: 'inner'
    },
    reference: {
      type: Object as PropType<Element>,
      default: undefined
    }
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const referenceRef: Ref<Element> = ref()
    const popperRef: Ref<HTMLElement> = ref()
    const state = usePopper(referenceRef, popperRef, {
      placement: props.placement
    })

    const isVisible = ref(props.modelValue)

    const emitValue = (value: boolean) => {
      isVisible.value = value
      emit('update:modelValue', value)
    }

    const showHandler = () => emitValue(true)
    const hideHandler = () => emitValue(false)

    const clickAwayHandler = (event: any) => {
      if (referenceRef.value && !referenceRef.value.contains(event.target)) {
        hideHandler()
      }
    }
    watchEffect(() => {
      isVisible.value = props.modelValue
    })
    watchEffect(() => {
      if (isVisible.value) {
        state.instance?.update()
      }
    })
    watchEffect(onInvalidate => {
      if (props.trigger === 'hover') {
        if (referenceRef.value) {
          referenceRef.value.addEventListener('mouseenter', showHandler)
          referenceRef.value.addEventListener('mouseleave', hideHandler)
        }
        onInvalidate(() => {
          if (referenceRef.value) {
            referenceRef.value.removeEventListener('mouseenter', showHandler)
            referenceRef.value.removeEventListener('mouseleave', hideHandler)
          }
        })
      }
      if (props.trigger === 'click') {
        if (referenceRef.value) {
          referenceRef.value.addEventListener('click', showHandler)
          document.addEventListener('click', clickAwayHandler)
        }
        onInvalidate(() => {
          if (referenceRef.value) {
            referenceRef.value.removeEventListener('click', showHandler)
            document.removeEventListener('click', clickAwayHandler)
          }
        })
      }
    })
    watchEffect(() => {
      if (props.mode !== 'inner' && props.reference) {
        referenceRef.value = props.reference
        console.log(props.reference)
      }
    })
    const referenceInitHandler = props.mode === 'inner' ? el => (referenceRef.value = el) : undefined

    return {
      isVisible,
      state,
      popperRef,
      referenceInitHandler
    }
  }
})
Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}
export default Popper
</script>
