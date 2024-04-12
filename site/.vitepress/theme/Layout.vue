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
  <div class="min-h-screen bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300">
    <VPNavBar></VPNavBar>
    <VPDoc v-if="frontmatter.layout !== false"></VPDoc>
    <VPPage v-else></VPPage>
  </div>
</template>
