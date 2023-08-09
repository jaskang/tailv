import { arrow, autoUpdate, flip, offset, type Placement as _Placement, shift, useFloating } from '@floating-ui/vue'
import { type Flat, uid } from 'kotl'
import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  inject,
  type InjectionKey,
  onBeforeMount,
  onUnmounted,
  type PropType,
  provide,
  ref,
  Teleport,
  toRefs,
  Transition,
  watchEffect,
} from 'vue'

import { ElSlot } from '../_pure/ElSlot'
import { usePopperTrigger } from './Trigger'

export type Placement = Flat<_Placement>
export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'
export type Strategy = 'absolute' | 'fixed'

export const props = {
  open: { type: Boolean, default: undefined },
  trigger: { type: String as PropType<TriggerType>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'top' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
  offset: { type: Number, default: 6 },
  arrow: { type: Boolean },
  width: { type: [Number, String] as PropType<number | string | 'full'> },
}

export type PopperProps = ExtractPublicPropTypes<typeof props>

const popperInjectKey: InjectionKey<{
  id: string
  append: (id: string) => void
  remove: (id: string) => void
}> = Symbol('PopperInjectKey')

export const Popper = defineComponent({
  name: 'TPopper',
  inheritAttrs: false,
  props,
  emits: ['update:open', 'change'],
  directives: {},
  setup(props, { slots, attrs, expose }) {
    let container: HTMLElement
    const id = uid(6)
    const innerOpen = ref(props.open || false)
    const children = ref<Set<string>>(new Set())
    const blocked = computed(() => {
      return children.value.size > 0
    })
    const open = computed(() => {
      return innerOpen.value || blocked.value
    })

    const { placement, strategy, trigger } = toRefs(props)
    const referenceEl = ref<HTMLElement | null>(null)
    const floatingEl = ref<HTMLElement | null>(null)
    const arrowEl = ref<HTMLElement>()

    const parent = inject(popperInjectKey, null)

    provide(popperInjectKey, {
      id: parent?.id || id,
      append: id => children.value.add(id),
      remove: id => children.value.delete(id),
    })

    const {
      floatingStyles: _floatingStyles,
      middlewareData,
      placement: realPlacement,
    } = useFloating(referenceEl, floatingEl, {
      placement,
      strategy,
      transform: true,
      middleware: [offset(props.offset), flip(), shift(), arrow({ element: arrowEl })],
      whileElementsMounted: autoUpdate,
    })
    const arrowStyles = computed(() => {
      // @ts-ignore
      const { x, y } = middlewareData.value.arrow || {}
      const side = realPlacement.value.split('-')[0] as 'top' | 'right' | 'bottom' | 'left'
      const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[side]
      return {
        left: x != null ? `${x}px` : '',
        top: y != null ? `${y}px` : '',
        [staticSide]: '-0.25rem',
      }
    })
    const floatingStyles = computed(() => {
      const fullWidth = referenceEl.value?.offsetWidth ? referenceEl.value.offsetWidth + 'px' : 'auto'
      const userWidth = typeof props.width === 'string' ? `${props.width}px` : props.width
      const width = props.width ? (props.width === 'full' ? fullWidth : userWidth) : 'auto'
      return {
        ..._floatingStyles.value,
        width,
      }
    })
    watchEffect(
      () => {
        open.value ? parent?.append(id) : parent?.remove(id)
      },
      { flush: 'post' }
    )
    onBeforeMount(() => {
      const wrapper = document.getElementById(`t-popper-wrapper-${parent?.id || id}`)
      if (wrapper) {
        container = wrapper
      } else {
        container = document.createElement('div')
        container.setAttribute('id', `t-popper-wrapper-${id}`)
        document.body.appendChild(container)
      }
    })
    onUnmounted(() => {
      if (container.id === `t-popper-wrapper-${id}`) {
        setTimeout(() => {
          if (container && container.parentNode) {
            container.parentNode.removeChild(container)
          }
        }, 2000)
      }
    })

    usePopperTrigger({ referenceEl, floatingEl, trigger, open, delay: 150 }, val => {
      if (val !== innerOpen.value) {
        innerOpen.value = val
      }
    })

    expose({
      id,
      open: () => (innerOpen.value = true),
      close: () => (innerOpen.value = false),
      status: () => open.value,
    })

    return () => (
      <>
        <ElSlot
          elRef={el => {
            referenceEl.value = el
          }}
        >
          {slots.default?.()}
        </ElSlot>
        <Teleport to={container}>
          <Transition
            enter-active-class="transition-opacity ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            {open.value && (
              <div
                ref={floatingEl}
                id={`t-popper-${id}`}
                style={floatingStyles.value}
                class="absolute z-[999]"
                {...attrs}
              >
                {slots.content?.()}
                {props.arrow && (
                  <div
                    ref={arrowEl}
                    class="absolute h-2 w-2 bg-black rotate-45 shadow-lg"
                    style={arrowStyles.value}
                  ></div>
                )}
              </div>
            )}
          </Transition>
        </Teleport>
      </>
    )
  },
})
