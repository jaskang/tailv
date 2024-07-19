<script setup lang="ts">
import { computed, ref } from 'vue'
import { CodeBracketIcon } from '@heroicons/vue/24/outline'
import { Switch } from 'tailv'

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
      const arr = item.split('=', 2) as [string, string]
      return { ...prev, [arr[0]]: arr[1] || true }
    },
    {} as Record<string, any>
  )
)
const showCode = ref(false)
</script>
<template>
  <div
    class="demo-wrapper ring-line divide-line flex flex-col divide-y rounded ring-1 shadow [&+.demo-wrapper]:mt-8 [&>:first-child]:rounded-t [&>:last-child]:rounded-b"
    :style="{
      '--tw-prose-pre-bg': 'transparent',
    }"
  >
    <div class="flex items-center justify-end py-1 px-2">
      <div class="flex-1">
        <svg viewBox="0 0 32 32" class="h-4 w-4">
          <path fill="#41b883" d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"></path>
          <path fill="#41b883" d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"></path>
          <path fill="#35495e" d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"></path>
        </svg>
      </div>
      <div class="flex items-center">
        <Switch v-model:value="showCode">
          <template #open><CodeBracketIcon /></template>
          <template #close><CodeBracketIcon /></template>
        </Switch>
      </div>
    </div>
    <div class="not-prose demo-wrapper-svg-bg p-4">
      <slot />
    </div>

    <div v-if="showCode">
      <slot name="code" />
    </div>
  </div>
</template>
<style>
.demo-wrapper {
  background: var(--color-slate-50);
}
.dark .demo-wrapper {
  background: var(--color-slate-900);
}
.demo-wrapper-svg-bg {
  background-position: 8px 8px;
  background-size: 16px 16px;
  background-color: var(--color-white);
  /* default-100 */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.dark .demo-wrapper-svg-bg {
  background-color: var(--color-gray-950);
  /* default-100 */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
