<script setup lang="ts">
import { type PropType } from 'vue'
import { Popper, type PopperPlacement } from '../Base'

defineOptions({ name: 'Tooltip' })
defineProps({
  content: String,
  placement: { type: String as PropType<PopperPlacement>, default: 'top' },
})
</script>
<template>
  <Popper trigger="hover" :placement="placement">
    <slot />
    <template #content>
      <div class="z-tooltip ring-base-border ring-opacity-50 rounded bg-white ring-1 shadow-md">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
