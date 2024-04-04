<script setup lang="ts">
import { computed, ref } from 'vue'
import { Switch } from 'tailv'
import { CodeBracketIcon } from '@heroicons/vue/24/outline'

defineOptions({ name: 'DemoWrapper' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; code?(_: {}): any }>()

const props = defineProps({
  lang: { type: String, required: true },
  meta: { type: String, required: true },
  code: { type: String, required: true },
})

const meta = computed(() =>
  (props.meta || '').split(' ').reduce(
    (prev, item) => {
      const arr = item.split('=', 2)
      return { ...prev, [arr[0]]: arr[1] || true }
    },
    {} as Record<string, any>
  )
)
const showCode = ref(false)
</script>
<template>
  <div
    class="demo-wrapper flex flex-col divide-y divide-slate-200 rounded ring-1 ring-slate-200 [&+.demo-wrapper]:mt-8 [&>:first-child]:rounded-t [&>:last-child]:rounded-b"
    :style="{
      '--tw-prose-pre-bg': 'transparent',
    }"
  >
    <div class="flex justify-end bg-slate-100 p-2">
      <div class="flex-1 px-2 font-medium">
        {{ meta.title }}
      </div>
      <Switch v-model:checked="showCode">
        <template #open><CodeBracketIcon /></template>
        <template #close><CodeBracketIcon /></template>
      </Switch>
    </div>
    <div class="not-prose p-4">
      <slot />
    </div>
    <div v-if="showCode" class="demo-wrapper-svg-bg bg-white dark:bg-slate-900">
      <slot name="code" />
    </div>
  </div>
</template>
<style>
.demo-wrapper-svg-bg {
  background-position: 8px 8px;
  background-size: 16px 16px;
  /* slate-100 */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.dark .demo-wrapper-svg-bg {
  /* slate-100 */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%231e293b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
