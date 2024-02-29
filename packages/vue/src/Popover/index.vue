<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'
import { PrimitiveSlot } from '../Base/PrimitiveSlot'
import { useForwardExpose } from '../shared/useForwardExpose'

defineOptions({ name: 'TPopover' })

const props = defineProps({})

const floating = ref(null)

const { forwardRef, currentElement } = useForwardExpose()

const { floatingStyles } = useFloating(currentElement, floating, {
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift()],
})
</script>
<template>
  <PrimitiveSlot :ref="forwardRef">
    <slot />
  </PrimitiveSlot>
  <div ref="floating" :style="floatingStyles">Tooltip</div>
</template>
