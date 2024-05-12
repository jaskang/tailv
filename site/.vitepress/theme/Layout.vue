<script setup lang="ts">
import VPNavBar from './components/VPNavBar.vue'
import VPDoc from './components/VPDoc.vue'
import VPPage from './components/VPPage.vue'
import { ScrollArea, Anchor } from 'tailv'
import { useDataByTheme } from './utils'

const { frontmatter, page, theme } = useDataByTheme()

console.log(page)
</script>

<template>
  <div class="min-h-screen">
    <VPNavBar></VPNavBar>
    <VPDoc v-if="frontmatter.layout !== false"></VPDoc>
    <VPPage v-else></VPPage>
  </div>
</template>
