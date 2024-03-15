<script setup lang="ts">
import { useRoute, useData, type DefaultTheme } from 'vitepress'
import VPNavBar from './components/VPNavBar.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPDocAside from './components/VPDocAside.vue'
import { ScrollArea, Anchor } from 'tailv'
const { frontmatter, page, theme } = useData<DefaultTheme.Config>()
</script>

<template>
  <div v-if="frontmatter.layout !== false" :class="frontmatter.pageClass">
    <VPNavBar class=""></VPNavBar>
    <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <div class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.5rem] z-20 hidden w-[19rem] lg:block">
        <ScrollArea class="h-full border-r">
          <div class="pb-10 pl-8 pr-6">
            <nav class="relative lg:text-sm lg:leading-6">
              <VPSidebar class="" />
            </nav>
          </div>
        </ScrollArea>
      </div>
      <div class="lg:pl-[19.5rem]">
        <main class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
          <header></header>
          <Content class="prose dark:prose-invert" />
          <footer></footer>
          <div class="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] xl:block">
            <ScrollArea class="h-full">
              <VPDocAside class="py-10" />
            </ScrollArea>
          </div>
        </main>
      </div>
    </div>
  </div>
  <Content v-else />
</template>
