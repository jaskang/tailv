<script setup lang="ts">
import { computed, type PropType, ref, toRef } from 'vue'
import { useModelValue } from '../../use/useModelValue'
import { type PopperPlacement, type PopperTrigger, type PopperVirtualElement, usePopper } from './core'
import ElSlot from './ElSlot.vue'

defineOptions({ name: 'Popper' })

const props = defineProps({
  open: { type: Boolean, default: undefined },
  reference: Object as PropType<HTMLElement | PopperVirtualElement>,
  trigger: {
    type: [String, Array] as PropType<PopperTrigger | PopperTrigger[]>,
    default: 'hover',
  },
  arrow: Boolean,
  sizeMode: String as PropType<'min-width'>,
  placement: {
    type: String as PropType<PopperPlacement>,
    default: 'bottom',
  },
})
const emit = defineEmits<{ 'update:open': [open: boolean]; change: [open: boolean] }>()

const isCustomReference = ref(!!props.reference)
const slotReference = ref<Element>()
const reference = computed(() => (isCustomReference.value ? props.reference : slotReference.value))
const floating = ref<HTMLElement>()
const floatingArrow = ref<HTMLElement>()

const [open, setOpen] = useModelValue<boolean>(props, {
  valuePropName: 'open',
  onChange: v => emit('change', v),
})
const { floatingStyles, arrowStyle } = usePopper({
  open,
  reference,
  floating,
  floatingArrow,
  placement: toRef(props, 'placement'),
  trigger: computed(() => (Array.isArray(props.trigger) ? props.trigger : [props.trigger])),
  sizeMode: toRef(props, 'sizeMode'),
  onChange: (val, e) => setOpen(val),
})

const onloadHandler = (el: Element) => {
  slotReference.value = el
}

defineExpose({
  open,
  toggle: () => setOpen(!open.value),
})
</script>
<template>
  <template v-if="!isCustomReference">
    <ElSlot @load="onloadHandler">
      <slot />
    </ElSlot>
  </template>
  <Teleport to="body">
    <Transition
      leave-active-class="transition duration-100 ease-in "
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div ref="floating" v-if="open" class="z-[99]" :style="floatingStyles">
        <slot name="content" />
        <!-- arrow -->
        <div v-if="arrow" ref="floatingArrow" class="h-2 w-2 bg-red-500" :style="arrowStyle"></div>
      </div>
    </Transition>
  </Teleport>
</template>
