<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'TCheckboxGroup' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({ name: String, value: Array as PropType<unknown[]>, disabled: Boolean })

const [state, setState] = useModelValue<unknown[]>(props, {
  defaultValue: [],
  onChange: (val: any[]) => {
    emit('change', val)
  },
})
provide(CheckboxGroupInjectKey, {
  value: state,
  props: props,
  insert: (val: unknown) => {
    if (state.value.indexOf(val) === -1) {
      setState([...state.value, val])
    }
  },
  remove: (val: unknown) => {
    const index = state.value.indexOf(val)
    if (index !== -1) {
      const r = [...state.value]
      r.splice(index, 1)
      setState(r)
    }
  },
})
</script>
<template>
  <div></div>
</template>
<style lang="scss"></style>
