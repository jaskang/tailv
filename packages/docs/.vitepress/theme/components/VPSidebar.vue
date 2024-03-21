<script lang="ts" setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { Anchor } from 'tailv'

import { useSidebar } from '../composables/sidebar'

const { groups, current } = useSidebar()
</script>

<template>
  <div class="">
    <div v-for="group in groups">
      <h5 class="mb-8 mt-12 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3 lg:mt-8">{{ group.title }}</h5>
      <Anchor :items="group.children" :current class=""></Anchor>
    </div>
  </div>
</template>
