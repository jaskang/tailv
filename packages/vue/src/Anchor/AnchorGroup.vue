<script setup lang="ts">
import { type PropType } from 'vue'
import type { AnchorItem} from './type'
import Anchor from './Anchor.vue'
import { useControllableValue } from '../utils/useControllableValue'

defineOptions({ name: 'Anchor' })
const props = defineProps({
  selectedKey: String,
  items: {
    type: Array as PropType<{
    key: string
    title: string
    children: AnchorItem[]
  }[]>,
    default:()=>[]
  }
})
const emit = defineEmits<{ 'update:selectedKey': [string] }>()

const [state, setState] = useControllableValue<string>(props, {
  valuePropName: 'selectedKey',
})

const onChange = (key: string) => setState(key)

</script>
<template>
  <div class="z-anchor-group" >
        <div v-for="item in items" class="mt-12 lg:mt-8" :key="item.key || item.title">
          <div class="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            {{item.title}}
          </div>
          <Anchor :items="item.children" :selectedKey="state" @change="onChange" />
        </div>
    </div>
</template>

