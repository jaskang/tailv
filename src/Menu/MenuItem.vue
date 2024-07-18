<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { Popper } from '../Base'
import Menu from './Menu.vue'
import type { MenuItemRawType } from './types'

defineOptions({ name: 'MenuItem' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  item: { type: Object as PropType<MenuItemRawType>, required: true },
  current: String,
})

const elRef = ref<HTMLElement>()
</script>
<template>
  <a
    ref="elRef"
    :href="item.link"
    :target="item.target"
    :class="[
      'group inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
      current === item.key
        ? 'bg-primary text-white'
        : 'text-default hover:bg-default-soft-hover hover:text-primary-hover',
      item.disabled ? '' : 'cursor-pointer',
    ]"
  >
    <component :is="item.icon" class="mr-2 h-4 w-4" />
    <span class="flex-1">
      {{ item.label }}
    </span>
    <span v-if="item.children && item.children.length > 0" class="-mr-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </span>
  </a>
  <Popper
    v-if="elRef && item.children && item.children.length > 0"
    trigger="hover"
    placement="right-start"
    :reference="elRef"
  >
    <template #content>
      <div class="z-popover ring-base-border ring-opacity-50 rounded bg-white ring-1 shadow-md">
        <Menu :items="item.children"></Menu>
      </div>
    </template>
  </Popper>
</template>
