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

const variant = ref<'outline' | 'solid' | 'soft' | 'text' | 'link'>('outline')
const size = ref<'sm' | 'md' | 'lg'>('md')
const color = ref<'primary' | 'success' | 'warning' | 'danger' | 'none'>('none')
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
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">variant:</div>
        <RadioGroup v-model:value="variant" class="grid flex-1 grid-cols-3 gap-2 py-1.5">
          <Radio value="outline" class="col-span-1">outline</Radio>
          <Radio value="solid" class="col-span-1">solid</Radio>
          <Radio value="soft" class="col-span-1">soft</Radio>
          <Radio value="text" class="col-span-1">text</Radio>
          <Radio value="link" class="col-span-1">link</Radio>
        </RadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">size:</div>
        <RadioGroup v-model:value="size" class="grid flex-1 grid-cols-3 py-2">
          <Radio value="sm">sm</Radio>
          <Radio value="md">md</Radio>
          <Radio value="lg">lg</Radio>
        </RadioGroup>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">color:</div>
        <RadioGroup v-model:value="color" class="grid flex-1 grid-cols-3 py-2">
          <Radio value="primary">primary</Radio>
          <Radio value="success">success</Radio>
          <Radio value="warning">warning</Radio>
          <Radio value="danger">danger</Radio>
          <Radio value="none">none</Radio>
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
        <InboxIcon v-if="square" class="h-[1.2em] w-[1.2em]" />
        <template v-else>Button</template>
      </Button>
    </div>
  </div>
</template>
