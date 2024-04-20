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
  <div v-if="items.length > 0" class="border-b border-slate-200 dark:border-slate-700">
    <nav class="flex space-x-1">
      <button
        v-for="item in props.items"
        type="button"
        :data-active="currentKey === item.key"
        class="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-2 text-sm text-slate-500 hover:text-primary-500 focus:text-primary-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active='true']:border-primary-500 data-[active='true']:font-semibold data-[active='true']:text-primary-500 dark:text-slate-400 dark:data-[active='true']:text-primary-500"
        role="tab"
        @click="clickHandler(item.key)"
      >
        {{ item.label }}
      </button>
    </nav>
    <div>
      <template v-if="keys.includes(currentKey)">
        <slot name="default" :current="currentKey" />
      </template>
    </div>
  </div>
</template>
