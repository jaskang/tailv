<script setup lang="ts">
import Popper from '../Base/Popper'

defineOptions({ name: 'TTooltip' })
defineProps({
  content: String,
})
</script>
<template>
  <Popper trigger="hover">
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
