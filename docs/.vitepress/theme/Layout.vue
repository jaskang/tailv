<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { useCloseSidebarOnEscape, useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { provide, ref, watch } from 'vue'

import TVContent from './components/TVContent.vue'
import TVSidebar from './components/TVSidebar.vue'
import { useDark } from '@vueuse/core'

const { page, site } = useData()

const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar()
const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)
provide('close-sidebar', closeSidebar)
provide('is-sidebar-open', isSidebarOpen)

const isDark = useDark()
const { frontmatter } = useData()
</script>

<template>
  <div
    class="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-8xl">
      <div class="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
        <div class="relative flex items-center">
          <a class="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto" href="/">
            <span class="sr-only">Tailwind CSS home page</span>
          </a>

          <div class="relative ml-auto hidden items-center lg:flex">
            <nav class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200" translate="no">
              <ul class="flex space-x-8">
                <li>
                  <a class="hover:text-primary-500 dark:hover:text-primary-400" href="/docs/installation">Docs</a>
                </li>
                <li>
                  <a href="/components/button" class="hover:text-primary-500 dark:hover:text-primary-400">
                    Components
                  </a>
                </li>
                <li><a class="hover:text-primary-500 dark:hover:text-primary-400" href="/blog">Blog</a></li>
                <li><a class="hover:text-primary-500 dark:hover:text-primary-400" href="/showcase">Showcase</a></li>
                <li>
                  <TSwitch v-model:checked="isDark">
                    <template #on><MoonIcon class="text-gray-900" /></template>
                    <template #off><SunIcon /></template>
                  </TSwitch>
                </li>
              </ul>
            </nav>
          </div>
          <button
            type="button"
            class="-my-1 ml-auto flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
          >
            <span class="sr-only">Search</span
            ><svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </button>
          <div class="-my-1 ml-2 lg:hidden">
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Navigation</span
              ><svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
                display: none;
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
        <button type="button" class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
          <span class="sr-only">Navigation</span
          ><svg width="24" height="24">
            <path
              d="M5 6h14M5 12h14M5 18h14"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
        <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
          <li class="flex items-center">
            Getting Started<svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-slate-400">
              <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>
          </li>
          <li class="truncate font-semibold text-slate-900 dark:text-slate-200">Installation</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="overflow-hidden">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <div
        class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block"
      >
        <TVSidebar :open="isSidebarOpen">
          <template #sidebar-nav-before><slot name="sidebar-nav-before" /></template>
          <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
        </TVSidebar>
      </div>
      <div class="lg:pl-[19.5rem]">
        <TVContent />
      </div>
    </div>
  </div>
</template>
