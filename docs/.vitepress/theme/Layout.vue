<script setup lang="ts">
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <div v-if="page.isNotFound">Custom 404 page!</div>
  <Content v-else />
</template>
