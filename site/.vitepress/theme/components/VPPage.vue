<script setup lang="ts">
import HomeDemo from './HomeDemo.vue'
</script>

<template>
  <div class="max-w-8xl relative mx-auto flex-nowrap items-stretch">
    <div class="relative flex-1 overflow-x-auto py-10 px-4 sm:px-8 lg:px-12">
      <HomeDemo />
      <Content class="vp-doc prose prose-slate dark:prose-invert max-w-none" />
    </div>
  </div>
</template>
