<script setup lang="ts">
import { type PropType } from 'vue'
import { Popper, type PopperPlacement } from '../Base/Popper'

defineOptions({ name: 'TTooltip' })
defineProps({
  content: String,
  placement: { type: String as PropType<PopperPlacement>, default: 'top' },
})
</script>
<template>
  <Popper trigger="hover" :placement="placement">
    <slot />
    <template #content>
      <div class="z-tooltip rounded bg-white shadow-md ring-1 ring-gray-300 ring-opacity-5 dark:ring-gray-700">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
