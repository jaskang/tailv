<script setup lang="ts">
import { type PropType } from 'vue'
import { Popper, type PopperPlacement } from '../Base/Popper'

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
      <div class="z-tooltip ring-opacity-5 rounded bg-white ring-1 shadow-md ring-slate-300">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
