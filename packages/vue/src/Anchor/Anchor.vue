<script setup lang="ts">
import { ref, computed, type PropType, toRef, provide, inject, watchEffect } from 'vue'
import { ANCHOR_INJECT_KEY, useActiveAnchor } from './utils'

export type IAnchorItem = {
  title: string
  link: string
  key?: string
  target?: string
  children?: IAnchorItem[]
}

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ item?: (_: IAnchorItem & { deep: number; isActive: boolean }) => any }>()
const props = defineProps({
  items: Array as PropType<IAnchorItem[]>,
  container: { type: Object as PropType<Element>, default: () => document },
  offset: { type: Number, default: 0 },
  range: { type: Array as unknown as PropType<[number, number]>, default: () => [2, 3] },
  deep: { type: Number, default: 0 },
})
const isCustom = computed(() => !!slots.item)
const parent = inject(ANCHOR_INJECT_KEY, null)
const { id } = parent || useActiveAnchor(toRef(props, 'container'), { range: props.range, offset: props.offset })

if (!parent) {
  provide('anchor', {
    id: id,
  })
}
</script>
<template>
  <ul
    class="m-0 list-none p-0 text-sm leading-6 text-slate-700"
    :class="[!isCustom && deep === 0 ? 'border-l border-gray-100' : '']"
  >
    <li v-for="item in items" class="m-0 p-0" :key="item.key" :class="[!isCustom && deep === 0 ? '-ml-px' : '']">
      <div class="py-1">
        <slot name="item" v-bind="item" :deep="deep" :isActive="id === item.link">
          <a
            class="group flex cursor-pointer items-start border-l-2 border-transparent no-underline hover:border-primary-400 hover:text-primary-500 dark:text-primary-400 dark:hover:border-primary-500"
            :class="[
              id === item.link
                ? 'border-primary-400 font-semibold text-primary-500 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
            ]"
            :href="item.link"
            :style="{ paddingLeft: deep + 1 + 'rem' }"
          >
            {{ item.title }}
          </a>
        </slot>
      </div>
      <Anchor v-if="item.children && item.children.length > 0" :items="item.children" :deep="deep + 1">
        <template v-if="slots.item" #item="props">
          <slot name="item" v-bind="props" />
        </template>
      </Anchor>
    </li>
  </ul>
</template>
