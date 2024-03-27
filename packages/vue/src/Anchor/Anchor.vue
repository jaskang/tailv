<script setup lang="ts">
import { ref, computed, type PropType, toRef, provide, inject, watchEffect } from 'vue'
import type { AnchorItem } from './types'

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [key: string, item: AnchorItem] }>()
const slots = defineSlots<{ item?: (_: AnchorItem & { deep: number; isActive: boolean }) => any }>()
const props = defineProps({
  current: String,
  items: Array as PropType<AnchorItem[]>,
  deep: { type: Number, default: 0 },
})
const isCustom = computed(() => !!slots.item)
const onSelect = (item: AnchorItem) => {
  emit('change', item.key, item)
}
</script>
<template>
  <ul
    class="m-0 list-none p-0 text-sm leading-6 text-slate-700"
    :class="[!isCustom && deep === 0 ? 'border-l border-slate-200 ' : '']"
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
            class="group flex cursor-pointer items-start border-l no-underline"
            :class="[
              current === item.key
                ? 'border-primary-400 text-primary-500 font-semibold'
                : 'border-transparent text-slate-700 hover:text-slate-900 ',
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
