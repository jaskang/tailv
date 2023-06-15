# checkbox

```vue preview
<script setup>
import { ref, watchEffect } from 'vue'
const el = ref(null)
const open = ref(false)
watchEffect(() => {
  console.log('el', el.value)
})
const openPopper = e => {
  console.log('openPopper', e)
  open.value = !open.value
}
</script>
<template>
  <div class="space-x-1">
    <TButton ref="el" @click="openPopper">popper</TButton>
    <TPopper :reference="el" v-model:open="open"> 123123123123123 </TPopper>
  </div>
</template>
```
