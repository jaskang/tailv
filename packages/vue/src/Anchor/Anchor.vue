<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

export type IAnchorItem = {
  title: string
  key?: string
  href?: string
  target?: string
  children?: IAnchorItem[]
}

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ click: [any] }>()
const props = defineProps({
  items: Array as PropType<IAnchorItem[]>,
  itemClass: String,
  isGroup: Boolean,
  deep: { type: Number, default: 0 },
  type: { type: String as PropType<'border' | 'arrow'>, default: 'border' },
})

const isBorder = computed(() => props.type === 'border' && !props.isGroup)
</script>
<template>
  <ul class="m-0 list-none p-0 text-sm leading-6 text-slate-700" :class="[isBorder ? 'border-l border-gray-300' : '']">
    <li v-for="item in items" class="m-0 p-0">
      <a
        v-if="isGroup && deep === 0"
        class="block py-1 font-medium no-underline hover:text-primary-500 dark:text-primary-400"
        :href="item.href"
      >
        {{ item.title }}
      </a>
      <a
        v-else
        class="group flex items-start py-1 no-underline hover:text-primary-500 dark:text-primary-400"
        :href="item.href"
        :style="{ paddingLeft: deep + 1 + 'rem' }"
      >
        {{ item.title || item.key }}
      </a>
      <Anchor
        class="-ml-px"
        v-if="item.children && item.children.length > 0"
        :items="item.children"
        :deep="isGroup ? deep : deep + 1"
      />
    </li>
  </ul>
</template>
