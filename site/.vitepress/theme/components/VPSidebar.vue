<script lang="ts" setup>
import { Anchor } from 'tailv'
import { useSidebar } from '../composables/sidebar'

const { groups, current } = useSidebar()
</script>

<template>
  <div class="">
    <div v-for="group in groups" class="">
      <div class="text-default-500 flex items-center gap-x-2 pt-4 pb-2 text-xs font-medium leading-6">
        <!-- <RectangleGroupIcon class="inline-block h-4 w-4" /> -->
        {{ group.title }}
      </div>
      <div class="">
        <Anchor :items="group.items" :current></Anchor>
      </div>
    </div>
  </div>
</template>
