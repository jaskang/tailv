<script setup lang="ts">
import { type PropType, ref } from 'vue'
import Popper from '../Base/Popper'
import { type PopperSizer, type PopperTrigger } from '../Base/Popper/core'
defineOptions({ name: 'TPopover' })
defineProps({
  content: String,
  sizer: Function as PropType<PopperSizer>,
  trigger: {
    type: String as PropType<PopperTrigger>,
    default: 'click',
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
  <Popper :trigger="trigger" :sizer="sizer" ref="popperRef" @change="emit('change', $event)">
    <slot />
    <template #content>
      <div class="z-popover rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
