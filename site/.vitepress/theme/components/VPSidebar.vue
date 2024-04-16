<script lang="ts" setup>
import { Anchor, Menu } from 'tailv'
import { RectangleGroupIcon } from '@heroicons/vue/24/solid'
import { useSidebar } from '../composables/sidebar'

const { groups, current } = useSidebar()
</script>

<template>
  <div class="">
    <div v-for="group in groups" class="">
      <div class="flex items-center gap-x-2 pb-2 pt-4 text-xs font-medium leading-6 text-slate-500">
        <!-- <RectangleGroupIcon class="inline-block h-4 w-4" /> -->
        {{ group.title }}
      </div>
      <div class="">
        <Anchor :items="group.items" :current></Anchor>
      </div>
    </div>
  </div>
</template>
