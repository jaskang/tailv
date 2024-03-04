<script setup lang="ts">
import { ref, type ComponentPublicInstance, PropType, watch } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift, ReferenceElement } from '@floating-ui/vue'
import ElSlot from './ElSlot.vue'

type TooltipTrigger = 'hover' | 'focus' | 'click'

defineOptions({ name: 'TPopover' })

defineProps({
  trigger: {
    type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
    default: 'hover',
  },
})

const reference = ref<ReferenceElement>()
const floating = ref<HTMLElement>()
const innerOpen = ref(true)

const { floatingStyles } = useFloating(reference, floating, {
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift()],
})
</script>
<template>
  <ElSlot @load="el => (reference = el)">
    <slot />
  </ElSlot>
  <div ref="floating" v-if="innerOpen" :style="floatingStyles">
    <slot name="content" />
  </div>
</template>
