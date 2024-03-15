<script setup lang="ts">
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<template>
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
