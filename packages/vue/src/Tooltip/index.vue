<script setup lang="ts">
import { type PropType } from 'vue'
import Popper from '../Base/Popper'
import type { PopperPlacement } from '@/Base/Popper/core'

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
      <div class="z-tooltip rounded bg-white shadow-md ring-1 ring-black ring-opacity-5">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
