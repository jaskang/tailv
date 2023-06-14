import {
  ref,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
  Teleport,
  onBeforeMount,
  onBeforeUnmount,
  shallowRef,
  toRef,
  watchEffect,
  toRefs,
  provide,
} from 'vue'
import {
  useFloating,
  type UseFloatingOptions,
  type Placement,
  type Strategy,
  type Middleware,
  autoUpdate,
  offset,
  shift,
} from '@floating-ui/vue'

const props = {
  reference: { type: Object as PropType<HTMLElement> },
  open: { type: Boolean },
  placement: { type: String as PropType<Placement>, default: 'bottom' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
}

export type PopperProps = ExtractPropTypes<typeof props>

export type PopperPublicProps = ExtractPublicPropTypes<typeof props>

const PopperInjectKey = Symbol('PopperInjectKey')

export type PopperTrigger = 'click' | 'hover' | 'focus'

const usePopperTrigger = trigger => {
  const trigger = ref<HTMLElement | null>(null)
  const setTrigger = (el: HTMLElement | null) => {
    trigger.value = el
  }
  return {
    trigger,
    setTrigger,
  }
}

export const Popper = defineComponent({
  name: 'TPopper',
  props,

  setup(props, { slots, emit, attrs }) {
    let container: HTMLElement
    const { reference, open, placement, strategy } = toRefs(props)
    const floatingEl = shallowRef<HTMLElement | null>(null)
    watchEffect(() => {
      console.log('reference', reference.value)
      console.log('props.open', props.open)
    })

    const { floatingStyles } = useFloating(reference, floatingEl, {
      placement,
      strategy,
      transform: true,
      middleware: [offset(10), shift()],
      whileElementsMounted: autoUpdate,
    })
    watchEffect(() => {
      console.log('floatingStyles', floatingStyles.value)
    })
    onBeforeMount(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
    })
    onBeforeUnmount(() => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    })
    return () => (
      <Teleport to={container}>
        {open.value && (
          <div {...attrs} ref={floatingEl} style={floatingStyles.value}>
            {slots.default?.()}
          </div>
        )}
      </Teleport>
    )
  },
})
