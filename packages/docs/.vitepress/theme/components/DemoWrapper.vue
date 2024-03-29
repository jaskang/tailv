<script setup lang="ts">
defineOptions({ name: 'DemoWrapper' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  lang: { type: String, required: true },
  meta: { type: String, required: true },
  code: { type: String, required: true },
})
console.log(props.code)
</script>
<template>
  <div class="flex-col">
    <div>
      <slot />
    </div>
    <div>{{ lang }} {{ meta }} {{ code }}</div>
  </div>
</template>
