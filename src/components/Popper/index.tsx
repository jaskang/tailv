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
  onUnmounted,
  inject,
  type InjectionKey,
  type Ref,
  type ShallowRef,
  onMounted,
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
import { uid } from 'kotl'

const props = {
  reference: { type: Object as PropType<HTMLElement> },
  open: { type: Boolean },
  placement: { type: String as PropType<Placement>, default: 'bottom' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
}

export type PopperProps = ExtractPropTypes<typeof props>

export type PopperPublicProps = ExtractPublicPropTypes<typeof props>

type PopperContext = {
  id: string
  floatingEl: Ref<HTMLElement | null>
  open: Ref<boolean>
}
const popperInjectKey: InjectionKey<{
  append: (child: PopperContext) => void
  remove: (id: string) => void
}> = Symbol('PopperInjectKey')

export type PopperTrigger = 'click' | 'hover' | 'focus'

// const usePopperTrigger = (trigger: PopperTrigger) => {
//   const trigger = ref<HTMLElement | null>(null)
//   const setTrigger = (el: HTMLElement | null) => {
//     trigger.value = el
//   }
//   return {
//     trigger,
//     setTrigger,
//   }
// }

export const Popper = defineComponent({
  name: 'TPopper',
  props,
  emits: ['update:open'],
  setup(props, { slots, emit, attrs }) {
    let container: HTMLElement
    const id = uid(6)
    const { reference, open, placement, strategy } = toRefs(props)
    const floatingEl = shallowRef<HTMLElement | null>(null)

    const parent = inject(popperInjectKey, null)

    const childrens = shallowRef<PopperContext[]>([])
    const blocked = computed(() => {
      return childrens.value.some(item => item.open.value)
    })
    provide(popperInjectKey, {
      append(item) {
        childrens.value.push(item)
      },
      remove(id) {
        childrens.value = childrens.value.filter(item => item.id !== id)
      },
    })
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

    onBeforeMount(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
    })
    onMounted(() => {
      parent?.append({ id, floatingEl, open })
      // click outside floatingEl to close
    })
    const clickOutsideHandler = (e: MouseEvent) => {
      console.log('clickOutsideHandler', e.target)

      if (blocked.value) return
      if (floatingEl.value?.contains(e.target as HTMLElement)) return
      if (open.value) {
        emit('update:open', false)
      }
    }
    watchEffect(
      () => {
        if (floatingEl.value) {
          setTimeout(() => {
            document.addEventListener('click', clickOutsideHandler)
          }, 0)
        } else {
          document.removeEventListener('click', clickOutsideHandler)
        }
      },
      { flush: 'post' }
    )
    onUnmounted(() => {
      parent?.remove(id)
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    })
    return () => (
      <Teleport to={container}>
        {open.value && (
          <div {...attrs} ref={floatingEl} id={`t-popper-${id}`} style={floatingStyles.value}>
            {slots.default?.()}
          </div>
        )}
      </Teleport>
    )
  },
})
