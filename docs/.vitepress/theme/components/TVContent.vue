<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { onContentUpdated, useData } from 'vitepress'
import { computed, ref, shallowRef } from 'vue'

import { useEditLink } from '../core/edit-link'
import { usePrevNext } from '../core/prev-next'
import { normalizeLink } from '../core/shared'
import { getHeaders, resolveTitle } from '../core/toc'
import { type MenuItem } from '../types'
import TVDocAside from './TVDocAside.vue'

defineOptions({ name: 'TVContent' })

const { theme, page, frontmatter, lang } = useData()

const editLink = useEditLink()
const control = usePrevNext()

const hasEditLink = computed(() => {
  return theme.value.editLink && frontmatter.value.editLink !== false
})
const lastUpdatedDate = computed(() => {
  if (page.value.lastUpdated && frontmatter.value.lastUpdated !== false) {
    const date = new Date(page.value.lastUpdated)
    return date.toLocaleString(lang.value)
  }
  return ''
})

const headers = shallowRef<MenuItem[]>([])
onContentUpdated(() => {
  headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
})
</script>
<template>
  <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
    <div class="prose prose-slate relative z-20 dark:prose-invert">
      <Content />
    </div>
    <footer class="mt-12 text-sm leading-6">
      <div
        v-if="control.prev?.link || control.next?.link"
        class="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200"
      >
        <a
          v-if="control.prev?.link"
          class="group flex items-center hover:text-slate-900 dark:hover:text-white"
          :href="normalizeLink(control.prev.link)"
        >
          <ChevronLeftIcon class="h-4 w-4 text-current" />
          {{ control.prev.text }}
        </a>
        <a
          v-if="control.next?.link"
          class="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
          :href="normalizeLink(control.next.link)"
        >
          {{ control.next.text }}
          <ChevronRightIcon class="h-4 w-4 text-current" />
        </a>
      </div>
      <div
        v-if="hasEditLink || lastUpdatedDate"
        class="justify-between border-t border-slate-200 pb-28 pt-10 text-slate-500 dark:border-slate-200/5 sm:flex"
      >
        <div v-if="lastUpdatedDate" class="mb-6 sm:mb-0 sm:flex">
          <p>Last updated: {{ lastUpdatedDate }}</p>
        </div>
        <a v-if="hasEditLink" class="hover:text-slate-900 dark:hover:text-slate-400" :href="editLink.url">
          {{ editLink.text }}
        </a>
      </div>
    </footer>
    <div
      ref="container"
      class="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block"
    >
      <div class="px-8">
        <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
          {{ resolveTitle(theme) }}
        </h5>
        <TVDocAside :headers="headers"></TVDocAside>
      </div>
    </div>
  </div>
</template>
