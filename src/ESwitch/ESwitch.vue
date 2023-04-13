<script setup lang="ts">
import { useControllable } from '@/hooks/use-controllable'
import { computed, toRef } from 'vue'
import style from './style'

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

const cls = computed(() =>
  style({
    enabled: value.value,
    disabled: props.disabled,
  })
)
console.log(cls.value)
</script>
<template>
  <button type="button" :disabled="disabled" :class="cls.base()" role="switch" @click="() => setValue(!value)">
    <span :class="cls.thumb()"></span>
  </button>
</template>
