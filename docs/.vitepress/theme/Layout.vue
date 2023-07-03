<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { useCloseSidebarOnEscape, useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { provide, ref, watch } from 'vue'

import VPSidebar from './components/VPSidebar.vue'

const { page, site } = useData()

const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar()
const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)
provide('is-sidebar-open', isSidebarOpen)

const { frontmatter } = useData()
</script>

<template>
  <div>
    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div class="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
          <div class="flex flex-shrink-0 items-center px-4 text-4xl font-bold">Tailvui</div>
          <VPSidebar :open="isSidebarOpen">
            <template #sidebar-nav-before><slot name="sidebar-nav-before" /></template>
            <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
          </VPSidebar>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->

            <div v-if="page.isNotFound">Custom 404 page!</div>
            <Content v-else />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
