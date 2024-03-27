<script setup lang="ts">
import VPNavBar from './components/VPNavBar.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPOutline from './components/VPOutline.vue'
import { ScrollArea, Anchor } from 'tailv'
import { useDataByTheme } from './utils'

const { frontmatter, page, theme } = useDataByTheme()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="bg-[--theme-bg] text-slate-700 antialiased">
    <VPNavBar class=""></VPNavBar>
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="fixed inset-0 top-[3.5rem] right-auto left-[max(0px,calc(50%-45rem))] z-20 hidden w-[19rem] lg:block">
        <ScrollArea class="h-full border-r border-slate-200">
          <div class="pr-6 pb-10 pl-8">
            <nav class="relative lg:text-sm lg:leading-6">
              <VPSidebar class="" />
            </nav>
          </div>
        </ScrollArea>
      </div>
      <div class="lg:pl-[19.5rem]">
        <main class="mx-auto max-w-3xl pt-10 xl:mr-[15.5rem] xl:ml-0 xl:max-w-none xl:pr-16">
          <header></header>
          <Content class="vp-doc prose" />
          <footer></footer>
          <div class="fixed top-[3.8125rem] right-[max(0px,calc(50%-45rem))] bottom-0 z-20 hidden w-[19.5rem] xl:block">
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
