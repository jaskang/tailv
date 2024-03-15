<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import VPContent from './components/VPContent.vue'
import VPFooter from './components/VPFooter.vue'
import VPNavBar from './components/VPNavBar.vue'
import VPSidebar from './components/VPSidebar.vue'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="mx-auto max-w-7xl" :class="frontmatter.pageClass">
    <VPNavBar class=""></VPNavBar>

    <VPSidebar class=""> </VPSidebar>

    <VPContent></VPContent>

    <VPFooter />
  </div>
  <Content v-else />
</template>
