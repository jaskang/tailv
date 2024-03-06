<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
import { type VirtualElement } from '@floating-ui/vue'
import ElSlot from './ElSlot.vue'
import { PopperTrigger, usePopper } from './core'

defineOptions({ name: 'TPopover' })

const props = defineProps({
  reference: Object as PropType<HTMLElement | VirtualElement>,
  trigger: {
    type: [String, Array] as PropType<PopperTrigger | PopperTrigger[]>,
    default: 'hover',
  },
})

const isCustomReference = ref(!!props.reference)
const slotReference = ref<Element>()
const reference = computed(() => (isCustomReference.value ? props.reference : slotReference.value))

const floating = ref<HTMLElement>()

const { floatingStyles, open, onOpenChange } = usePopper({
  reference,
  floating,
  trigger: computed(() => (Array.isArray(props.trigger) ? props.trigger : [props.trigger])),
})

const onloadHandler = (el: Element) => {
  slotReference.value = el
}

defineExpose({
  open,
  toggle: () => {
    onOpenChange(!open.value, 'manual')
  },
})
</script>
<template>
  <template v-if="!isCustomReference">
    <ElSlot @load="onloadHandler">
      <slot />
    </ElSlot>
  </template>
  <div ref="floating" v-if="open" :style="floatingStyles">
    <slot name="content" />
  </div>
</template>
