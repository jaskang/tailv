<script setup lang="ts">
import { ref, computed, type PropType, toRef, provide, inject, watchEffect } from 'vue'

export type IAnchorItem = {
  key: string
  label?: string
  link?: string
  target?: string
  children?: IAnchorItem[]
}

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [key: string, item: IAnchorItem] }>()
const slots = defineSlots<{ item?: (_: IAnchorItem & { deep: number; isActive: boolean }) => any }>()
const props = defineProps({
  current: String,
  items: Array as PropType<IAnchorItem[]>,
  deep: { type: Number, default: 0 },
})
const isCustom = computed(() => !!slots.item)
const onSelect = (item: IAnchorItem) => {
  emit('change', item.key, item)
}
</script>
<template>
  <ul
    class="m-0 list-none p-0 text-sm leading-6 text-slate-700"
    :class="[!isCustom && deep === 0 ? 'border-l border-slate-100 dark:border-slate-800' : '']"
  >
    <li
      v-for="item in items"
      class="m-0 p-0"
      :key="item.key"
      :class="[!isCustom && deep === 0 ? '-ml-px' : '']"
      @click="onSelect(item)"
    >
      <div class="py-1">
        <slot name="item" v-bind="item" :deep="deep" :isActive="current === item.key">
          <a
            class="group flex cursor-pointer items-start border-l-2 no-underline"
            :class="[
              current === item.key
                ? 'border-primary-400 font-semibold text-primary-500 dark:text-primary-400'
                : 'border-transparent text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-400 dark:hover:text-slate-300',
            ]"
            :href="item.link"
            :style="{ paddingLeft: deep + 1 + 'rem' }"
          >
            {{ item.label || item.key }}
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
