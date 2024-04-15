<script lang="ts" setup>
import { Anchor, Menu } from 'tailv'

import { useSidebar } from '../composables/sidebar'

const { groups, current } = useSidebar()
</script>

<template>
  <div class="">
    <div v-for="group in groups" class="">
      <div class="px-1 pb-2 pt-4 text-xs font-medium leading-6 text-slate-400">{{ group.title }}</div>
      <Anchor :items="group.items" :current></Anchor>
    </div>
  </div>
</template>
