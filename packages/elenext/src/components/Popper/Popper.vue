<template>
  <teleport to="body">
    <transition :name="transition">
      <div
        v-show="realVisible"
        :id="state.popperId"
        :ref="popperRefInitHandler"
        :class="['el-popper', popperClass]"
        :style="{ ...state.attrs.styles.popper, ...{ backgroundColor: backgroundColor } }"
        v-bind="state.attrs.attributes.popper"
      >
        <slot name="content" />
        <div v-if="visibleArrow" class="el-popper__arrow-shadow" :style="state.attrs.styles.arrow" data-popper-arrow />
        <div
          v-if="visibleArrow"
          :ref="arrowRefInitHandler"
          class="el-popper__arrow"
          :style="{ ...state.attrs.styles.arrow, ...arrowColorStyle }"
          data-popper-arrow
        />
      </div>
    </transition>
  </teleport>
  <e-dom-slot v-if="$slots.default" :init="referenceRefInitHandler">
    <slot />
  </e-dom-slot>
</template>
<script lang="ts">
import {
  defineComponent,
  watchEffect,
  InjectionKey,
  provide,
  inject,
  onUnmounted,
  App,
  ref,
  watch,
  computed,
  isRef
} from 'vue'
import { prop } from '../../utils'
import { PlacementType, TriggerType, usePopper } from './core'
import EDomSlot from './DomSlot'

const POPPER_IJK: InjectionKey<{
  action: {
    addHoldChild: (teleportId: string) => void
    removeHoldChild: (teleportId: string) => void
  }
}> = Symbol('Popper')

const EPopper = defineComponent({
  name: 'EPopper',
  components: { EDomSlot },
  props: {
    modelValue: prop.bool(),
    popperClass: prop.string(),
    visibleArrow: prop.bool({ default: true }),
    offset: prop.number({ default: 0 }),
    // TODO: oneOf
    // placement: prop.oneOf(placements, { default: 'top' }),
    // trigger: prop.oneOf(triggers, { default: 'hover' }),
    placement: prop.string<PlacementType>({ default: 'top' }),
    trigger: prop.string<TriggerType>({ default: 'hover' }),
    transition: prop.string({ default: 'el-popper-fade' }),
    backgroundColor: prop.string(),
    reference: prop.object()
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    const parentProvider = inject(POPPER_IJK, {
      action: { addHoldChild: teleportId => {}, removeHoldChild: teleportId => {} }
    })
    const referenceRef = ref<Element>(null)
    const popperRef = ref<HTMLElement>(null)
    const arrowRef = ref<HTMLElement>(null)

    // 打开状态子 popper
    const holdChildren = ref<string[]>([])
    // 本体 visible 状态
    const innerValue = ref(!!props.modelValue)
    // 最终 visible 状态
    const realVisible = computed<boolean>(() => {
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

    const arrowColorStyle = computed(() => {
      if (props.backgroundColor) {
        const _placement: string = state.attrs.attributes.popper?.['data-popper-placement']
        if (_placement) {
          const _pos = _placement.split('-')[0]
          return {
            [`border-${_pos}-color`]: props.backgroundColor
          }
        }
      }
      return {}
    })

    // 状态变化
    watch(realVisible, () => {
      emit('change', realVisible.value)
      emit('update:modelValue', realVisible.value)
      if (realVisible.value) {
        // 更新样式
        state.instance?.update()
      }
    })

    watch(
      () => props.modelValue,
      (val, oldVal) => {
        if (val !== oldVal) {
          holdChildren.value = []
          innerValue.value = props.modelValue
        }
      }
    )
    // 内部 reference 模式
    watchEffect(() => {
      if (props.reference) {
        if (isRef(props.reference) && props.reference.value) {
          referenceRef.value = props.reference.value as Element
        } else {
          referenceRef.value = props.reference
        }
      }
    })

    const referenceRefInitHandler = props.reference
      ? undefined
      : el => {
          referenceRef.value = el
        }
    const popperRefInitHandler = el => (popperRef.value = el || null)
    const arrowRefInitHandler = el => (arrowRef.value = el || null)

    provide(POPPER_IJK, {
      action: {
        addHoldChild: popperId => {
          const index = holdChildren.value.indexOf(popperId)
          if (index === -1) {
            holdChildren.value.push(popperId)
          }
        },
        removeHoldChild: popperId => {
          const index = holdChildren.value.indexOf(popperId)
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
      parentProvider.action.removeHoldChild(state.popperId)
    })
    return {
      realVisible,
      holdChildren,
      state,
      referenceRefInitHandler,
      popperRefInitHandler,
      arrowRefInitHandler,
      arrowColorStyle
    }
  }
})
EPopper.install = (app: App): void => {
  app.component(EPopper.name, EPopper)
}
export default EPopper
</script>
