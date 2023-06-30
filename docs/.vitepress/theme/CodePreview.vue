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
</script>
<template>
  <div>
    <div
      :class="{
        dark: dark,
      }"
      class="relative overflow-hidden rounded-xl"
    >
      <div class="bg-slate-50 transition-colors dark:bg-slate-800/25">
        <div
          class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
          style="background-position: 10px 10px"
        ></div>
        <div class="demo relative overflow-auto rounded-xl p-4">
          <slot name="default"></slot>
        </div>
        <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
        <div class="absolute right-4 top-4 space-x-4">
          <TSwitch v-model:checked="dark">
            <template #on><MoonIcon class="text-gray-900" /></template>
            <template #off><SunIcon /></template>
          </TSwitch>
          <TSwitch v-model:checked="showCode">
            <template #on><CodeBracketIcon /></template>
            <template #off><CodeBracketIcon /></template>
          </TSwitch>
        </div>
      </div>
    </div>
    <div
      v-if="showCode"
      class="relative overflow-hidden rounded-xl bg-slate-900 p-4 [&>div>button]:hidden [&>div>span]:hidden"
    >
      <slot name="code"></slot>
    </div>
  </div>
</template>
<style lang="scss"></style>
