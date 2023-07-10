<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'CodePreview' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{
  default?(props: unknown): any
  code?(props: unknown): any
}>()
const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: 'vue' },
  meta: { type: String, default: '' },
})

const dark = ref(false)

const showCode = ref(false)

defineExpose({ dark, showCode })
</script>
<template>
  <div>
    <div
      :class="{
        dark: dark,
      }"
      class="relative mt-4 overflow-hidden rounded-xl border dark:border-slate-500/50"
    >
      <div class="bg-slate-50 transition-colors dark:bg-slate-800">
        <div class="flex justify-end gap-2 border-b bg-slate-100 p-2 dark:border-slate-500/50 dark:bg-slate-700/50">
          <TSwitch v-model:checked="dark">
            <template #on><MoonIcon class="text-gray-900" /></template>
            <template #off><SunIcon /></template>
          </TSwitch>
          <TSwitch :checked="showCode" @update:checked="v => (showCode = v)">
            <template #on><CodeBracketIcon /></template>
            <template #off><CodeBracketIcon /></template>
          </TSwitch>
        </div>
        <div class="relative overflow-hidden">
          <div
            class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
            style="background-position: 10px 10px"
          ></div>
          <div class="demo relative overflow-auto p-4 text-sm">
            <slot name="default"></slot>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showCode" class="relative overflow-hidden [&>div>button]:hidden [&>div>span]:hidden">
      <slot name="code"></slot>
    </div>
  </div>
</template>
