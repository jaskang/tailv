<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

import { isActive, useSidebar } from '../core/sidebar'

const { page } = useData()

const { sidebarGroups, hasSidebar } = useSidebar()

const props = defineProps<{
  open: boolean
}>()

// a11y: focus Nav element when menu has opened
let navEl = ref<HTMLElement | null>(null)

function isActiveLink(link: string) {
  return isActive(page.value.relativePath, link)
}
</script>

<template>
  <aside v-if="hasSidebar" :class="{ open }" class="mt-5 flex-1 space-y-1 px-2" @click.stop>
    <nav class="relative lg:text-sm lg:leading-6" id="VPSidebarNav" tabindex="-1">
      <ul>
        <li v-for="group in sidebarGroups" :key="group.text" class="mt-12 lg:mt-8">
          <h5 class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">{{ group.text }}</h5>
          <ul class="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
            <li v-for="item in group.items" :key="item.link">
              <a
                class="-ml-px block border-l-2 pl-4"
                :class="[
                  isActiveLink(item.link)
                    ? 'border-current font-semibold text-primary-500 dark:text-primary-400'
                    : 'border-transparent text-slate-700 hover:border-slate-400 hover:text-slate-900  dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300',
                ]"
                :href="item.link"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
