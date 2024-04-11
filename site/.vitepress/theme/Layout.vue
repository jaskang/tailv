<script setup lang="ts">
import VPNavBar from './components/VPNavBar.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPOutline from './components/VPOutline.vue'
import { ScrollArea, Anchor } from 'tailv'
import { useDataByTheme } from './utils'

const { frontmatter, page, theme } = useDataByTheme()
</script>

<template>
  <div
    class="min-h-screen bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300"
    v-if="frontmatter.layout !== false"
  >
    <VPNavBar class=""></VPNavBar>
    <div class="relative mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <div class="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-72 lg:block">
        <ScrollArea class="h-full border-r border-slate-200">
          <div class="pb-10 pl-8 pr-6">
            <nav class="relative lg:text-sm lg:leading-6">
              <VPSidebar class="" />
            </nav>
          </div>
        </ScrollArea>
      </div>

      <div class="py-10 pl-72">
        <main class="mx-auto xl:mr-72 xl:max-w-none xl:px-16">
          <header></header>
          <Content class="vp-doc prose prose-slate max-w-none dark:prose-invert" />
          <footer></footer>
          <div></div>
          <div class="fixed bottom-0 right-0 top-14 z-20 hidden w-72 xl:block">
            <ScrollArea class="h-full">
              <VPOutline class="py-10" />
            </ScrollArea>
          </div>
        </main>
      </div>
    </div>
  </div>
  <Content v-else />
</template>
