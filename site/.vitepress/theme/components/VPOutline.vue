<script setup lang="ts">
import { Anchor } from 'tailv'
import { useOutline } from '../composables/outline'

defineOptions({ name: 'VPOutline' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const { title, items, current } = useOutline()
</script>
<template>
  <div>
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900">{{ title }}</h5>
    <Anchor :current="current?.id" :items="items" :offset="135">
      <template #item="{ label, key, link, deep, isActive }">
        <a
          :href="link"
          class="group flex items-start"
          :class="[isActive ? 'font-semibold  text-primary-500' : 'hover:text-slate-900 ']"
          :style="{
            paddingLeft: deep * 0.5 + 'rem',
          }"
        >
          <svg
            v-if="deep > 0"
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600"
          >
            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
          {{ label || key }}
        </a>
      </template>
    </Anchor>
  </div>
</template>
