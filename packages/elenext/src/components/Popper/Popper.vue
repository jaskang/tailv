<template>
  <teleport :to="`#${teleportEl.id}`">
    <Transition name="transition">
      <div
        v-show="isVisible"
        ref="popperEl"
        :class="['el-popper', popperClass]"
        :style="popperState.styles.popper"
        v-bind="popperState.attributes.popper"
      >
        <slot name="popper" />
        <div class="el-popper__arrow" :style="popperState.styles.arrow" data-popper-arrow />
      </div>
    </Transition>
  </teleport>
  <DomSlot @root-init="initReference">
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
  onUpdated,
  onMounted
} from 'vue'
import { Modifier } from '@popperjs/core'
import { getBlockCls, getCompName } from '../../utils'
import { uniqueId } from '../../utils/uniqueId'
import { createEl, removeEl } from '../../utils/dom'
import DomSlot from './DomSlot'
import { usePopper } from './usePopper'
import { Placement } from './core'

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
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const self = getCurrentInstance()
    const id = uniqueId('el-popper-teleport')
    const teleportEl = createEl(id)
    const { referenceEl, popperEl, popperRef, state: popperState } = usePopper({
      placement: props.placement,
      strategy: props.strategy,
      modifiers: props.modifiers
    })

    const isVisible = ref(false)

    const showHandler = () => (isVisible.value = true)
    const hideHandler = () => (isVisible.value = false)

    const clickAwayHandler = (event: any) => {
      if (referenceEl.value && !referenceEl.value.contains(event.target)) {
        isVisible.value = false
      }
    }
    watchEffect(() => {
      if (isVisible.value) {
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

    const initReference = el => {
      console.log(el)
      referenceEl.value = el
    }
    onUnmounted(() => {
      removeEl(teleportEl)
    })

    return {
      isVisible,
      teleportEl,
      popperEl,
      popperState,
      initReference
    }
  }
})
Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}
export default Popper
</script>
