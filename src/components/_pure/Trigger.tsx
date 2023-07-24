import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  inject,
  type InjectionKey,
  type PropType,
  type Ref,
  ref,
  type SlotsType,
} from 'vue'

import { useEventListener } from '@/hooks/useEventListener'
import { type ColorKey } from '@/theme'
import { useColorVar } from '@/utils/style'

import { ElSlot } from './ElSlot'

const props = {
  color: {
    type: String as PropType<ColorKey>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export const POPPER_TRIGGER_TOKEN: InjectionKey<Ref> = Symbol('popper-trigger')

export const Trigger = defineComponent({
  name: 'TTrigger',
  props,
  setup(props, { slots, attrs }) {
    const triggerRef = inject(POPPER_TRIGGER_TOKEN, ref(null)) as Ref<HTMLElement | null>
    return (
      <ElSlot
        elRef={(el: HTMLElement | null) => {
          triggerRef.value = el
        }}
      >
        {slots.default?.()}
      </ElSlot>
    )
  },
})
