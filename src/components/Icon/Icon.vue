<script setup lang="ts">
defineOptions({ name: 'TIcon' })
defineProps({ spin: Boolean })
</script>
<template>
  <span
    role="img"
    class="t-icon inline-flex w-[1em] items-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
    :class="[spin ? 'animate-spin' : '']"
  >
    <slot />
  </span>
</template>
