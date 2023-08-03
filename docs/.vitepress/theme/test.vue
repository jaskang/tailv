<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const el1 = ref(null)
const el2 = ref(null)
const el3 = ref(null)
const el4 = ref(null)
const el5 = ref(null)

onMounted(() => {
  console.log(el1.value)
  // <div id="div1"></div>

  console.log(el2.value)
  // <div id="div2"></div>

  console.log(el3.value)
  // <div id="div3"></div>

  console.log(el4.value)
  // null

  console.log(el5.value)
  // null
})
</script>
<template>
  <ElSlot @updateEl="el => (el1 = el)"><div id="div1"></div></ElSlot>
  <ElSlot @updateEl="el => (el2 = el)">
    <div id="div2"></div>
    <div id="div2-1"></div>
  </ElSlot>
  <ElSlot @updateEl="el => (el3 = el)">
    <template>
      <div id="div3"></div>
    </template>
  </ElSlot>
  <ElSlot @updateEl="el => (el4 = el)">
    <!-- comment -->
  </ElSlot>
  <ElSlot @updateEl="el => (el5 = el)">
    <template>
      <!-- comment -->
    </template>
  </ElSlot>
</template>

<!-- onUpdated(async () => {
  await nextTick()
  const instance = getCurrentInstance()
  if (instance && instance.vnode.children) {
    let firstEl = null
    for (let vnode of instance.vnode.children) {
      if (vnode.el && vnode.el.nodeType === 1) {
        firstEl = vnode.el
        break
      }
    }
    if (firstEl) {
      instance.emit('updateEl', firstEl)
    }
  }
}) -->
