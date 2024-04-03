<script setup lang="ts">
import { computed, ref } from 'vue'
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
      const arr = item.split('=', 2)
      return { ...prev, [arr[0]]: arr[1] || true }
    },
    {} as Record<string, any>
  )
)

const showCode = ref(false)
console.log(meta.value)
</script>
<template>
  <div class="vp-preview flex flex-col divide-y divide-slate-200 rounded ring-1 ring-slate-200 [&+.vp-preview]:mt-8">
    <div class="flex justify-end rounded-t bg-slate-100 p-2">
      <div class="flex-1 px-2 font-medium">
        {{ meta.title }}
      </div>
      <Switch v-model:checked="showCode"></Switch>
    </div>
    <div class="not-prose vp-preview-demo p-4">
      <slot />
    </div>
    <div v-if="showCode" class="rounded-b">
      <slot name="code" />
    </div>
  </div>
</template>
<style></style>
