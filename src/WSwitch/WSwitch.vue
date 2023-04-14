<script setup lang="ts">
import { useControllable } from '@/hooks/use-controllable'
import { computed, toRef } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
})

const emits = defineEmits(['update:modelValue', 'change'])

const [value, setValue] = useControllable(
  computed(() => props.modelValue),
  val => {
    emits('update:modelValue', val)
    emits('change', val)
  },
  computed(() => false)
)
</script>
<template>
  <button
    type="button"
    class="w-switch"
    :class="[value && 'is-checked']"
    :disabled="disabled"
    role="switch"
    @click="() => setValue(!value)"
  >
    <span class="w-switch_thumb"></span>
  </button>
</template>
