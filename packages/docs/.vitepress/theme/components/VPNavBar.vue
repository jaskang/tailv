<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { useData } from 'vitepress'
import { computed, ref, watchPostEffect } from 'vue'

defineEmits<{
  (e: 'toggle-screen'): void
}>()

const { frontmatter } = useData()

const hasNavbar = computed(() => {
  return frontmatter.value.navbar !== false
})

const { theme } = useData()
</script>

<template>
  <div
    v-if="hasNavbar"
    class="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8"
  >
    <div class="relative flex items-center">
      <div class="mr-3 flex-none overflow-hidden md:w-auto"></div>
      <div class="relative ml-auto hidden w-full items-center justify-end lg:flex">
        <template v-for="item in theme.nav" :key="item.text">
          <div>
            {{ item.text }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
