<script setup lang="ts">
import { ref, type ComponentPublicInstance, PropType } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'
import { PrimitiveSlot } from '../Base/PrimitiveSlot'

type TooltipTrigger = 'hover' | 'focus' | 'click'

defineOptions({ name: 'TPopover' })

defineProps({
  trigger: {
    type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
    default: 'hover',
  },
})

const reference = ref(null)
const floating = ref(null)
const innerOpen = ref(false)

const forwardRef = (_ref: Element | ComponentPublicInstance | null) => {
  // $el could be text/comment for non-single root normal or text root, thus we retrieve the nextElementSibling
  // @ts-expect-error
  const el = ['#text', '#comment'].includes(_ref?.$el.nodeName)
    ? // @ts-expect-error
      _ref?.$el.nextElementSibling
    : // @ts-expect-error
      _ref?.$el || _ref
  reference.value = el
}

const { floatingStyles } = useFloating(reference, floating, {
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift()],
})
</script>
<template>
  <PrimitiveSlot :ref="forwardRef">
    <slot />
  </PrimitiveSlot>
  <div ref="floating" v-if="innerOpen" :style="floatingStyles">
    <slot name="content" />
  </div>
</template>
