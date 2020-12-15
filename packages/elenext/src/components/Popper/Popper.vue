<template>
  <teleport :to="`#${state.teleportEl.id}`">
    <Transition name="transition">
      <div
        v-show="isVisible || holdChildren.length > 0"
        :ref="popperInitHandler"
        :class="['el-popper', popperClass]"
        :style="state.attrs.styles.popper"
        v-bind="state.attrs.attributes.popper"
      >
        <slot name="content" />
        <div v-if="arrow" class="el-popper__arrow" :style="state.attrs.styles.arrow" data-popper-arrow />
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
  InjectionKey,
  provide,
  inject,
  h,
  Transition,
  onUnmounted,
  App,
  ref,
  Ref,
  onUpdated,
  onMounted,
  isReadonly,
  watch,
  computed
} from 'vue'
import { Modifier } from '@popperjs/core'
import { getCompName } from '../../utils'
import DomSlot from './DomSlot'
import { usePopper, PlacementType, TriggerType } from './core'

const POPPER_IJK: InjectionKey<{
  action: {
    addHoldChild: (teleportId: string) => void
    removeHoldChild: (teleportId: string) => void
  }
}> = Symbol('Popper')

const Popper = defineComponent({
  name: 'Popper',
  components: { DomSlot },
  props: {
    modelValue: Boolean,
    popperClass: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    placement: {
      type: String as PropType<PlacementType>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'hover'
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
    const parentProvider = inject(POPPER_IJK, {
      action: { addHoldChild: teleportId => {}, removeHoldChild: teleportId => {} }
    })
    const referenceRef: Ref<Element> = ref(null)
    const popperRef: Ref<HTMLElement> = ref(null)

    const holdChildren = ref<string[]>([])
    const innerValue = ref(false)

    const isVisible = computed({
      get: () => {
        if (props.trigger === 'manual') {
          return props.modelValue
        }
        return innerValue.value
      },
      set: val => {
        if (props.trigger === 'manual') {
          emit('update:modelValue', val)
        }
        innerValue.value = val
      }
    })

    const state = usePopper({
      referenceRef,
      popperRef,
      placement: props.placement,
      offset: props.offset,
      trigger: props.trigger,
      onTrigger(teleportId, val) {
        const realVal = typeof val === 'undefined' ? !isVisible.value : val
        isVisible.value = realVal
        if (realVal) {
          parentProvider.action.addHoldChild(teleportId)
        } else {
          parentProvider.action.removeHoldChild(teleportId)
        }
      }
    })

    watch(isVisible, () => {
      state.instance?.update()
    })
    watchEffect(() => {
      isVisible.value = props.modelValue
    })
    watchEffect(() => {
      if (props.mode !== 'inner' && props.reference) {
        referenceRef.value = props.reference
        console.log(props.reference)
      }
    })
    const popperInitHandler = el => (popperRef.value = el || null)
    const referenceInitHandler = props.mode === 'inner' ? el => (referenceRef.value = el) : undefined

    provide(POPPER_IJK, {
      action: {
        addHoldChild: teleportId => {
          const index = holdChildren.value.indexOf(teleportId)
          if (index === -1) {
            holdChildren.value.push(teleportId)
          }
        },
        removeHoldChild: teleportId => {
          const index = holdChildren.value.indexOf(teleportId)
          if (index !== -1) {
            holdChildren.value.splice(index, 1)
          }
        }
      }
    })

    onUnmounted(() => {
      parentProvider.action.removeHoldChild(state.teleportEl.id)
    })
    return {
      isVisible,
      holdChildren,
      state,
      popperInitHandler,
      referenceInitHandler
    }
  }
})
Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}
export default Popper
</script>
