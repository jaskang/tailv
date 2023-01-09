<script setup lang="ts">
import { resolveComponent } from 'vue'
import MdvueDemoBlock from './MdvueDemoBlock.vue'
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    required: true,
  },
  component: {
    type: String,
  },
})

const DemoBlock = props.component ? resolveComponent(props.component) : MdvueDemoBlock
</script>
<template>
  <component
    :is="DemoBlock"
    v-bind="{
      code: decodeURIComponent(props.code),
      lang: decodeURIComponent(props.lang),
      meta: decodeURIComponent(props.meta),
    }"
  >
    <slot />
    <template #code>
      <slot name="code" />
    </template>
  </component>
</template>
