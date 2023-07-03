<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

defineOptions({ name: 'TVContent' })
</script>
<template>
  <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
    <header id="header" class="relative z-20">
      <div>
        <p class="mb-2 text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400">Official Plugins</p>
        <div class="flex items-center">
          <h1
            class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
          >
            @tailwindcss/typography
          </h1>
        </div>
      </div>
      <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">
        Beautiful typographic defaults for HTML you don't control.
      </p>
    </header>
    <div class="dark:prose-dark prose prose-slate relative z-20 mt-8">
      <Content />
    </div>
    <footer class="mt-12 text-sm leading-6">
      <div class="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
        <a class="group flex items-center hover:text-slate-900 dark:hover:text-white" href="/docs/screen-readers">
          Screen Readers
        </a>
        <a
          class="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
          href="https://github.com/tailwindlabs/tailwindcss-forms"
          >Forms
        </a>
      </div>
      <div class="justify-between border-t border-slate-200 pb-28 pt-10 text-slate-500 dark:border-slate-200/5 sm:flex">
        <div class="mb-6 sm:mb-0 sm:flex">
          <p>Copyright © 2023 Tailwind Labs Inc.</p>
          <p class="sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-slate-200/5">
            <a class="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Trademark Policy</a>
          </p>
        </div>
        <a
          class="hover:text-slate-900 dark:hover:text-slate-400"
          href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/typography-plugin.mdx"
          >Edit this page on GitHub</a
        >
      </div>
    </footer>
    <div
      class="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block"
    >
      <div class="px-8">
        <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">On this page</h5>
        <ul class="text-sm leading-6 text-slate-700">
          <li>
            <a href="#installation" class="flex items-center py-1 font-medium text-primary-500 dark:text-primary-400"
              >Installation</a
            >
          </li>
          <li class="ml-4">
            <a
              href="#choosing-a-gray-scale"
              class="group flex items-center py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <ChevronRightIcon
                class="mr-2 h-4 w-4 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              />
              Choosing a gray scale
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
