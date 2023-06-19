import { type Placement, type Strategy, autoUpdate, offset, shift, useFloating } from '@floating-ui/vue'
import { uid } from 'kotl'
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
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
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
  append: (child: PopperContext) => void
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
    const childrens = ref<PopperContext[]>([])
    const blocked = computed(() =>
      childrens.value.some(item => {
        console.log('item', item.value.open)
        return item.value.open
      })
    )
    const open = computed(() => {
      return innerOpen.value && !blocked.value
    })
    watchEffect(() => {
      console.log('innerOpen', innerOpen.value)
      console.log('blocked', blocked.value)
    })
    const { placement, strategy, trigger } = toRefs(props)
    const referenceEl = ref<HTMLElement>()
    const floatingEl = ref<HTMLElement>()
    provide(POPPER_TRIGGER_TOKEN, referenceEl)

    const parent = inject(popperInjectKey, null)

    provide(popperInjectKey, {
      append(item) {
        childrens.value.push(item)
      },
      remove(id) {
        childrens.value.splice(
          childrens.value.findIndex(item => item.value.id === id),
          1
        )
      },
    })

    const { floatingStyles } = useFloating(referenceEl, floatingEl, {
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

    const item = computed(() => ({ id, floatingEl, open }))
    onMounted(() => {
      parent?.append(item)
    })

    onUnmounted(() => {
      parent?.remove(id)
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
