<script setup lang="ts">
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <div></div>
  </div>
  <div
    class="VPContent"
    id="VPContent"
    :class="{
      'is-home': frontmatter.layout === 'home',
    }"
  >
    <Content />
  </div>
</template>
