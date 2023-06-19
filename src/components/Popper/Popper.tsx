import { type Placement, type Strategy, autoUpdate, offset, shift, useFloating } from '@floating-ui/vue'
import { remove, uid } from 'kotl'
import {
  type ComputedRef,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type InjectionKey,
  type PropType,
  type Ref,
  Teleport,
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  onUnmounted,
  provide,
  ref,
  toRefs,
  watchEffect,
} from 'vue'
import PopperTrigger, { POPPER_TRIGGER_TOKEN, type TriggerType, usePopperTrigger } from './PopperTrigger'

const props = {
  open: { type: Boolean },
  trigger: { type: String as PropType<TriggerType>, default: 'click' },
  placement: { type: String as PropType<Placement>, default: 'bottom' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
}

export type PopperProps = ExtractPropTypes<typeof props>

export type PopperPublicProps = ExtractPublicPropTypes<typeof props>

type PopperContext = ComputedRef<{
  id: string
  floatingEl: Ref<HTMLElement | undefined>
  open: Ref<boolean>
}>
const popperInjectKey: InjectionKey<{
  append: (id: string) => void
  remove: (id: string) => void
}> = Symbol('PopperInjectKey')

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
  directives: {},
  setup(props, { slots, emit, attrs }) {
    let container: HTMLElement
    const id = uid(6)
    const innerOpen = ref(props.open)
    const childrens = ref<string[]>([])
    const blocked = computed(() => childrens.value.length > 0)
    const open = computed(() => {
      return innerOpen.value || blocked.value
    })

    const { placement, strategy, trigger } = toRefs(props)
    const referenceEl = ref<HTMLElement>()
    const floatingEl = ref<HTMLElement>()
    provide(POPPER_TRIGGER_TOKEN, referenceEl)

    const parent = inject(popperInjectKey, null)

    provide(popperInjectKey, {
      append: id => childrens.value.push(id),
      remove: id => remove(childrens.value, id),
    })

    const { floatingStyles } = useFloating(referenceEl, floatingEl, {
      placement,
      strategy,
      transform: true,
      middleware: [offset(10), shift()],
      whileElementsMounted: autoUpdate,
    })

    watchEffect(() => {
      open.value ? parent?.append(id) : parent?.remove(id)
    })
    onBeforeMount(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
    })
    onUnmounted(() => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    })

    usePopperTrigger(
      {
        referenceEl,
        floatingEl,
        trigger,
        open,
      },
      (val, trigger) => {
        if (val !== innerOpen.value) {
          innerOpen.value = val
        }
      }
    )

    return () => (
      <>
        <PopperTrigger>{slots.default?.()}</PopperTrigger>
        <Teleport to={container}>
          {open.value && (
            <div {...attrs} ref={floatingEl} id={`t-popper-${id}`} style={floatingStyles.value}>
              {slots.content?.()}
            </div>
          )}
        </Teleport>
      </>
    )
  },
})
