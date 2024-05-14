<script setup lang="ts">
import { ref, computed } from 'vue'
import Avatar from './Avatar.vue'
defineOptions({ name: '' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div></div>
</template>
