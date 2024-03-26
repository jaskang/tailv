<script lang="ts" setup>
import { Anchor } from 'tailv'

import { useSidebar } from '../composables/sidebar'

const { groups, current } = useSidebar()
</script>

<template>
  <div class="">
    <div v-for="group in groups">
      <h5 class="mt-12 mb-8 font-semibold text-slate-900 lg:mt-8 lg:mb-3">{{ group.title }}</h5>
      <Anchor :items="group.children" :current class=""></Anchor>
    </div>
  </div>
</template>
