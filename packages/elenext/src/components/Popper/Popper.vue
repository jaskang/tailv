<template>
  <teleport :to="`#${state.teleportEl.id}`">
    <Transition name="transition">
      <div
        v-show="realVisible"
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
  watch,
  computed
} from 'vue'
import { usePopper, PlacementType, TriggerType } from './core'
import DomSlot from './DomSlot'

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
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    const parentProvider = inject(POPPER_IJK, {
      action: { addHoldChild: teleportId => {}, removeHoldChild: teleportId => {} }
    })
    const referenceRef = ref<Element>(null)
    const popperRef = ref<HTMLElement>(null)
    // 打开状态子 popper
    const holdChildren = ref<string[]>([])
    // 本体 visible 状态
    const innerValue = ref(false)
    // 最终 visible 状态
    const realVisible = computed<boolean>(() => {
      if (props.trigger === 'manual') {
        return props.modelValue
      }
      return innerValue.value || holdChildren.value.length > 0
    })

    const state = usePopper({
      referenceRef,
      popperRef,
      placement: props.placement,
      offset: props.offset,
      trigger: props.trigger,
      onTrigger(teleportId, val) {
        const realVal = typeof val === 'undefined' ? !innerValue.value : val
        innerValue.value = realVal
        if (realVal) {
          parentProvider.action.addHoldChild(teleportId)
        } else {
          parentProvider.action.removeHoldChild(teleportId)
        }
      }
    })

    // 状态变化
    watch(realVisible, () => {
      // 事件
      emit('change', realVisible.value)
      // 更新样式
      state.instance?.update()
    })

    watch([() => props.modelValue, () => props.trigger], () => {
      if (props.trigger === 'manual') {
        holdChildren.value = []
        innerValue.value = props.modelValue
      }
    })
    watchEffect(() => {
      if (props.mode !== 'inner' && props.reference) {
        referenceRef.value = props.reference
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
      // 销毁的时候 change false
      emit('change', false)
      // 溢出 hold 数组
      parentProvider.action.removeHoldChild(state.teleportEl.id)
    })
    return {
      realVisible,
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
