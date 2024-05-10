<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

defineOptions({ name: 'Tabs' })
const emit = defineEmits<{ change: [key: string] }>()
const slots = defineSlots<{ default?(props: { current: string }): any }>()
const props = defineProps({
  current: { type: String, default: '' },
  items: {
    type: Array as PropType<
      {
        key: string
        label: string
      }[]
    >,
    default: () => [],
  },
  type: { type: String as PropType<'line' | 'card'>, default: 'line' },
})

const keys = computed(() => props.items.map(item => item.key))

const currentKey = ref(keys.value.includes(props.current) ? props.current : keys.value[0])

const clickHandler = (key: string) => {
  if (currentKey.value !== key) {
    currentKey.value = key
    emit('change', key)
  }
}
</script>
<template>
  <nav v-if="type === 'line'" class="flex gap-x-2">
    <button
      v-for="item in props.items"
      type="button"
      role="tab"
      :data-state="currentKey === item.key ? 'active' : ''"
      class="hover:text-primary-500 focus:text-primary-500 data-[state=active]:border-b-primary-500 data-[state=active]:text-primary-500 dark:data-[state=active]:text-primary-500 inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-t-2 border-b-transparent border-t-transparent px-1 py-2 text-sm text-slate-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:font-semibold dark:text-slate-400"
      tabindex="-1"
      @click="clickHandler(item.key)"
    >
      {{ item.label }}
    </button>
  </nav>
  <nav
    v-if="type === 'card'"
    class="grid h-9 w-full items-center justify-center rounded-lg bg-accent p-1"
    :style="{ gridTemplateColumns: `repeat(${keys.length}, minmax(0, 1fr))` }"
  >
    <button
      v-for="item in props.items"
      type="button"
      role="tab"
      :data-state="currentKey === item.key ? 'active' : ''"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
      tabindex="-1"
      @click="clickHandler(item.key)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>
