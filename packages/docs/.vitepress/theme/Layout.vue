<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import VPNavBar from './components/VPNavBar.vue'
import VPSidebar from './components/VPSidebar.vue'
import { ScrollArea } from 'tailv'
const { frontmatter, theme } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" :class="frontmatter.pageClass">
    <VPNavBar class=""></VPNavBar>
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.5rem] z-20 hidden w-[19rem] lg:block">
        <ScrollArea class="h-full">
          <div class="pb-10 pl-8 pr-6">
            <nav class="relative lg:text-sm lg:leading-6">
              <VPSidebar class="" />
            </nav>
          </div>
        </ScrollArea>
      </div>
      <div class="lg:pl-[19.5rem]">
        <main class="relative z-20 mx-auto max-w-3xl pt-10 xl:max-w-none">
          <Content />
        </main>
      </div>
    </div>
  </div>
  <Content v-else />
</template>
