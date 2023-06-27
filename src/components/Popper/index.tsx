import { autoUpdate, offset, type Placement, shift, type Strategy, useFloating } from '@floating-ui/vue'
import { clear } from 'console'
import { remove, set, uid } from 'kotl'
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

import { POPPER_TRIGGER_TOKEN, PopperTrigger, type TriggerType, usePopperTrigger } from './trigger'

export const props = {
  open: { type: Boolean, default: undefined },
  trigger: { type: String as PropType<TriggerType>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'bottom' },
  strategy: { type: String as PropType<Strategy>, default: 'absolute' },
}

export type PopperProps = ExtractPropTypes<typeof props>

export type PopperPublicProps = ExtractPublicPropTypes<typeof props>

const popperInjectKey: InjectionKey<{
  id: string
  append: (id: string) => void
  remove: (id: string) => void
}> = Symbol('PopperInjectKey')

export const Popper = defineComponent({
  name: 'TPopper',
  props,
  emits: ['update:open', 'change'],
  directives: {},
  setup(props, { slots, emit, attrs, expose }) {
    let container: HTMLElement
    const id = uid(6)
    const innerOpen = ref(props.open || false)
    const childrens = ref<Set<string>>(new Set())
    const blocked = computed(() => childrens.value.size > 0)
    const open = computed(() => {
      return innerOpen.value || blocked.value
    })

    const { placement, strategy, trigger } = toRefs(props)
    const referenceEl = ref<HTMLElement>()
    const floatingEl = ref<HTMLElement>()
    provide(POPPER_TRIGGER_TOKEN, referenceEl)

    const parent = inject(popperInjectKey, null)

    provide(popperInjectKey, {
      id: parent?.id || id,
      append: id => childrens.value.add(id),
      remove: id => childrens.value.delete(id),
    })

    const { floatingStyles } = useFloating(referenceEl, floatingEl, {
      placement,
      strategy,
      transform: true,
      middleware: [offset(10), shift()],
      whileElementsMounted: autoUpdate,
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

    usePopperTrigger({ referenceEl, floatingEl, trigger, open }, (val, trigger) => {
      if (val !== innerOpen.value) {
        innerOpen.value = val
        console.log(val, trigger, id)
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
        <div>
          {JSON.stringify(
            {
              open: open.value,
              innerOpen: innerOpen.value,
              blocked: blocked.value,
              chiliens: childrens.value.values(),
            },
            null,
            2
          )}
        </div>
        <PopperTrigger>{slots.default?.()}</PopperTrigger>
        <Teleport to={container}>
          <Transition
            enter-active-class="transition-opacity delay-0 duration-100 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity delay-0 duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            {open.value && (
              <div
                {...attrs}
                ref={floatingEl}
                id={`t-popper-${id}`}
                style={floatingStyles.value}
                class="absolute overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {slots.content?.()}
              </div>
            )}
          </Transition>
        </Teleport>
      </>
    )
  },
})
