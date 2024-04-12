<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
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
  <div class="text-sm leading-6 text-slate-700" :class="[!isCustom && deep === 0 ? 'border-l border-slate-200 ' : '']">
    <div
      v-for="item in items"
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
                ? 'border-primary-400 font-semibold text-primary-500'
                : 'border-transparent text-slate-700 hover:text-slate-900 ',
            ]"
            :href="item.link"
            :style="{ paddingLeft: deep + 1 + 'rem' }"
          >
            {{ item.title || item.key }}
          </a>
        </slot>
      </div>
      <Anchor v-if="item.children && item.children.length > 0" :items="item.children" :deep="deep + 1">
        <template v-if="slots.item" #item="props">
          <slot name="item" v-bind="props" />
        </template>
      </Anchor>
    </div>
  </div>
</template>
