<script setup lang="ts">
import { type PropType, ref } from 'vue'

import { type MenuItem } from '../types'

defineOptions({ name: 'TVDocAside' })
const props = defineProps({
  headers: Array as PropType<MenuItem[]>,
  root: Boolean,
})

function onClick({ target: el }: Event) {
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.querySelector<HTMLAnchorElement>(decodeURIComponent(id))
  heading?.focus()
}
</script>
<template>
  <ul :class="root ? 'root' : 'nested'" class="text-sm leading-6 text-slate-700">
    <li v-for="{ children, link, title } in headers" :key="title">
      <a
        class="flex items-center py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        :href="link"
        @click="onClick"
      >
        {{ title }}
      </a>
      <template v-if="children?.length">
        <TVDocAside class="ml-4" :headers="children" />
      </template>
    </li>
  </ul>
</template>
