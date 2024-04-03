<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'tailv'
defineOptions({ name: 'DemoWrapper' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; code?(_: {}): any }>()

const props = defineProps({
  lang: { type: String, required: true },
  meta: { type: String, required: true },
  code: { type: String, required: true },
})
const showCode = ref(false)
console.log(props.code)
</script>
<template>
  <div class="vp-preview flex flex-col rounded-md bg-slate-50 ring-1 ring-slate-200 [&+.vp-preview]:mt-8">
    <div
      class="not-prose vp-preview-demo rounded-t-md bg-slate-50 p-4 ring-1 ring-slate-200"
      :style="{
        backgroundPosition: '10px 10px',
      }"
    >
      <slot />
    </div>
    <div v-if="showCode" class="ring-1 ring-slate-200">
      <slot name="code" />
    </div>
    <div class="flex justify-end rounded-b-md p-2">
      <Switch v-model:checked="showCode"></Switch>
    </div>
  </div>
</template>
<style>
.vp-preview-demo {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
