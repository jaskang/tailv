<script setup lang="ts">
import { Anchor } from 'tailv'
import { useOutline } from '../composables/outline'

defineOptions({ name: 'VPOutline' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const { title, headers, current } = useOutline()
</script>
<template>
  <div>
    <h5 class="text-default-900 mb-4 text-sm font-semibold leading-6">{{ title }}</h5>
    <Anchor :current="current" :items="headers" :offset="135"></Anchor>
  </div>
</template>
