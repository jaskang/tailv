<script setup lang="ts">
import { useData } from 'vitepress'
import { ScrollArea } from 'tailv'
import VPSidebar from './VPSidebar.vue'
import VPOutline from './VPOutline.vue'
import { useDataByTheme } from '../utils'

const { page } = useDataByTheme()
</script>

<template>
  <div class="relative mx-auto flex max-w-8xl flex-nowrap items-stretch">
    <div class="relative hidden w-72 lg:block">
      <div class="fixed top-14 h-[calc(100vh-3.5rem)] w-72">
        <ScrollArea class="h-full border-r border-slate-200">
          <div class="py-10 pl-4">
            <VPSidebar />
          </div>
        </ScrollArea>
      </div>
    </div>
    <div class="relative flex-1 overflow-x-auto px-4 py-10 sm:px-8 lg:px-12">
      <header></header>
      <Content class="vp-doc prose prose-slate max-w-none dark:prose-invert" />
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
