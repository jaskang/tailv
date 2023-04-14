<script setup lang="ts">
import { useControllable } from '@/hooks/use-controllable'
import { provide, ref } from 'vue'

const props = defineProps({
  value: [String, Number],
  name: String,
  disabled: Boolean,
})

const emit = defineEmits(['onUpdate:value'])

const focus = ref(false)
</script>
<template>
  <slot />
</template>
