<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { Popper, type PopperPlacement, type PopperWidthMode, type PopperTrigger } from '../Base/Popper'

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
  widthModel: String as PropType<PopperWidthMode>,
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
  <Popper :trigger :widthModel :placement ref="popperRef" @change="emit('change', $event)">
    <slot />
    <template #content>
      <div class="z-popover ring-opacity-5 rounded-md bg-white ring-1 shadow-lg ring-slate-200">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
