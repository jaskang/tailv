<script setup lang="ts">
import Popper from '../Base/Popper.vue'
defineOptions({ name: 'TTooltip' })
</script>
<template>
  <Popper>
    <slot />
    <template #content><div class="z-tooltip">TTooltip</div></template>
  </Popper>
</template>
