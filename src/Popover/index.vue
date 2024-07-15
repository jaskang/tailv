<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { Popper, type PopperPlacement, type PopperSizeMode, type PopperTrigger } from '../Base'

defineOptions({ name: 'Popover' })
defineProps({
  content: String,
  trigger: {
    type: String as PropType<PopperTrigger>,
    default: 'click',
  },
  placement: {
    type: String as PropType<PopperPlacement>,
    default: 'top',
  },
  sizeMode: String as PropType<PopperSizeMode>,
})
const emit = defineEmits<{
  'update:open': [open: boolean]
  change: [open: boolean]
}>()

const popperRef = ref<InstanceType<typeof Popper>>()

defineExpose({
  toggle: () => popperRef.value?.toggle(),
})
</script>
<template>
  <Popper :trigger :sizeMode :placement ref="popperRef" @change="emit('change', $event)">
    <slot />
    <template #content>
      <div class="z-popover border-ring rounded-md border bg-white shadow-lg">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
