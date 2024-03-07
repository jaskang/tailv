<script setup lang="ts">
import { ref, PropType, computed, watch } from 'vue'
import { type VirtualElement } from '@floating-ui/vue'
import ElSlot from './ElSlot.vue'
import { PopperTrigger, usePopper } from './core'
import { useModelValue } from '../../use/useModelValue'

defineOptions({ name: 'TPopover' })

const props = defineProps({
  open: { type: Boolean, default: undefined },
  reference: Object as PropType<HTMLElement | VirtualElement>,
  trigger: {
    type: [String, Array] as PropType<PopperTrigger | PopperTrigger[]>,
    default: 'hover',
  },
})
const emit = defineEmits<{
  'update:open': [open: boolean]
  change: [open: boolean]
}>()

const isCustomReference = ref(!!props.reference)
const slotReference = ref<Element>()
const reference = computed(() => (isCustomReference.value ? props.reference : slotReference.value))
const floating = ref<HTMLElement>()

const [selfOpen, setSelfOpen] = useModelValue<boolean>(props, {
  valuePropName: 'open',
})
const { floatingStyles, open } = usePopper({
  reference,
  floating,
  trigger: computed(() => (Array.isArray(props.trigger) ? props.trigger : [props.trigger])),
  open: selfOpen,
  onChange(val) {
    setSelfOpen(val)
  },
})

watch(open, v => {
  emit('change', v)
})

const onloadHandler = (el: Element) => {
  slotReference.value = el
}

defineExpose({
  open,
  toggle: () => {
    // manual
    setSelfOpen(!open.value)
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
