<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, RadioGroup, Radio, Select, Switch } from '@/index'
import { InboxIcon } from '@heroicons/vue/24/outline'

import type { ColorAlias } from '@/utils/theme'
defineOptions({ name: 'ButtonBooth' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

// pill: Boolean,
//   square: Boolean,
//   block: Boolean,
//   loading: Boolean,
//   disabled: Boolean,

const variant = ref<'solid' | 'soft' | 'ghost' | 'outline' | 'link'>('solid')
const size = ref<'sm' | 'md' | 'lg'>('sm')
const color = ref<ColorAlias>('primary')
const pill = ref(false)
const square = ref(false)
const block = ref(false)
const loading = ref(false)
const disabled = ref(false)
</script>
<template>
  <div class="flex w-full flex-col rounded-md border md:flex-row-reverse">
    <div class="flex-1 space-y-2 border-l p-6">
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">color:</div>
        <Select
          v-model:value="color"
          class="flex-1"
          :options="[
            { label: 'primary', value: 'primary' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
            // { label: 'slate', value: 'slate' },
            // { label: 'gray', value: 'gray' },
            // { label: 'zinc', value: 'zinc' },
            // { label: 'neutral', value: 'neutral' },
            // { label: 'stone', value: 'stone' },
            // { label: 'red', value: 'red' },
            // { label: 'orange', value: 'orange' },
            // { label: 'amber', value: 'amber' },
            // { label: 'yellow', value: 'yellow' },
            // { label: 'lime', value: 'lime' },
            // { label: 'green', value: 'green' },
            // { label: 'emerald', value: 'emerald' },
            // { label: 'teal', value: 'teal' },
            // { label: 'cyan', value: 'cyan' },
            // { label: 'sky', value: 'sky' },
            // { label: 'blue', value: 'blue' },
            // { label: 'indigo', value: 'indigo' },
            // { label: 'violet', value: 'violet' },
            // { label: 'purple', value: 'purple' },
            // { label: 'fuchsia', value: 'fuchsia' },
            // { label: 'pink', value: 'pink' },
            // { label: 'rose', value: 'rose' },
          ]"
        ></Select>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">variant:</div>
        <RadioGroup v-model:value="variant" class="grid flex-1 grid-cols-3 gap-2 py-2">
          <Radio value="solid" class="col-span-1">solid</Radio>
          <Radio value="soft" class="col-span-1">soft</Radio>
          <Radio value="ghost" class="col-span-1">ghost</Radio>
          <Radio value="outline" class="col-span-1">outline</Radio>
          <Radio value="link" class="col-span-1">link</Radio>
        </RadioGroup>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">size:</div>
        <RadioGroup v-model:value="size" class="grid flex-1 grid-cols-3 py-2">
          <div class=""><Radio value="sm">sm</Radio></div>
          <div class=""><Radio value="md">md</Radio></div>
          <div class=""><Radio value="lg">lg</Radio></div>
        </RadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">pill:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="pill"></Switch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">square:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="square"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">block:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="block"></Switch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">loading:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="loading"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">disabled:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="disabled"></Switch>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center p-6">
      <Button :variant :size :color :pill :square :block :loading :disabled>
        <InboxIcon v-if="square" class="h-4 w-4" />
        <template v-else>Button</template>
      </Button>
    </div>
  </div>
</template>
