<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { Popper, type PopperPlacement, type PopperSizer, type PopperTrigger } from '../Base/Popper'

defineOptions({ name: 'TPopover' })
defineProps({
  content: String,
  sizer: Function as PropType<PopperSizer>,
  trigger: {
    type: String as PropType<PopperTrigger>,
    default: 'click',
  },
  placement: {
    type: String as PropType<PopperPlacement>,
    default: 'top',
  },
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
  <Popper :trigger :sizer :placement ref="popperRef" @change="emit('change', $event)">
    <slot />
    <template #content>
      <div class="z-popover ring-opacity-5 rounded-md bg-white ring-1 shadow-lg ring-slate-300">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
