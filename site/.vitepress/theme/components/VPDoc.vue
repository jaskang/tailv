<script setup lang="ts">
import { ScrollArea } from 'tailv'
import { useDataByTheme } from '../utils'
import VPOutline from './VPOutline.vue'
import VPSidebar from './VPSidebar.vue'
const { page } = useDataByTheme()
</script>

<template>
  <div class="max-w-8xl relative mx-auto flex flex-nowrap items-stretch">
    <div class="relative hidden w-72 lg:block">
      <div class="fixed top-14 h-[calc(100vh-3.5rem)] w-72 pl-8">
        <ScrollArea class="h-full border-r">
          <VPSidebar class="py-10" />
        </ScrollArea>
      </div>
    </div>
    <div class="relative flex-1 overflow-x-auto py-10 px-4 sm:px-8 lg:px-12">
      <header></header>
      <Content class="vp-doc prose prose-slate dark:prose-invert max-w-none" />
      <footer></footer>
    </div>
    <div class="relative hidden w-72 xl:block">
      <div class="fixed top-14 h-[calc(100vh-3.5rem)] w-72">
        <ScrollArea class="h-full">
          <VPOutline class="py-10" />
        </ScrollArea>
      </div>
    </div>
  </div>
</template>
