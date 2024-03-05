<script setup lang="ts">
import { ref, type ComponentPublicInstance, PropType, watch, computed, provide } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift, ReferenceElement } from '@floating-ui/vue'
import ElSlot from './ElSlot.vue'

type TooltipTrigger = 'hover' | 'focus' | 'click'

defineOptions({ name: 'TPopover' })

const props = defineProps({
  reference: Object as PropType<ReferenceElement>,
  trigger: {
    type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
    default: 'hover',
  },
})

const isCustomReference = ref(!!props.reference)
const slotReference = ref<Element>()
const reference = computed(() => (isCustomReference.value ? props.reference : slotReference.value))

const floating = ref<HTMLElement>()
const innerOpen = ref(true)

const { floatingStyles } = useFloating(reference, floating, {
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift()],
})

const onloadHandler = (el: Element) => {
  slotReference.value = el
}
</script>
<template>
  <template v-if="!isCustomReference">
    <ElSlot @load="onloadHandler">
      <slot />
    </ElSlot>
  </template>
  <div ref="floating" v-if="innerOpen" :style="floatingStyles">
    <slot name="content" />
  </div>
</template>
