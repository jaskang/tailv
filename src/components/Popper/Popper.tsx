import { type Placement, type Strategy, autoUpdate, offset, shift, useFloating } from '@floating-ui/vue'

import { onClickOutside, useEventListener } from '@vueuse/core'
import { uid } from 'kotl'
import {
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
  ref,
  shallowRef,
  toRefs,
  watchEffect,
} from 'vue'
import PopperTrigger, { POPPER_TRIGGER_TOKEN } from './PopperTrigger'

const props = {
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
  directives: {
    onClickOutside: vOnClickOutside,
  },
  setup(props, { slots, emit, attrs }) {
    let container: HTMLElement
    const id = uid(6)
    const open = ref(props.open)

    const { placement, strategy } = toRefs(props)
    const referenceEl = ref<HTMLElement>()
    const floatingEl = shallowRef<HTMLElement | null>(null)
    provide(POPPER_TRIGGER_TOKEN, referenceEl)

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
    onMounted(() => {
      parent?.append({ id, floatingEl, open })
    })

    onUnmounted(() => {
      parent?.remove(id)
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    })

    useEventListener(referenceEl, 'mouseenter', handleTriggerEnter)
    useEventListener(referenceEl, 'mouseleave', handleTriggerLeave)
    useEventListener(referenceEl, 'click', handleTriggerClick)
    useEventListener(referenceEl, 'focus', handleTriggerFocus)
    useEventListener(referenceEl, 'blur', handleTriggerBlur)
    onClickOutside(
      referenceEl,
      (e: MouseEvent) => {
        console.log('clickOutsideHandler', e.target)
        if (blocked.value) return
        if (floatingEl.value?.contains(e.target as HTMLElement)) return
        if (open.value) {
          open.value = false
        }
      },
      { ignore: [] }
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
