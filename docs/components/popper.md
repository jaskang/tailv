# checkbox

```vue preview
<script setup>
import { ref, watchEffect } from 'vue'
const el = ref(null)
const open = ref(false)
watchEffect(() => {
  console.log('el', el.value)
})
setInterval(() => {
  open.value = !open.value
}, 3000)
</script>
<template>
  <div class="space-x-1">
    <TButton ref="el" :data-open="open ? 'open' : 'close'">M</TButton>
    <TPopper :reference="el" :open="open">Checkbox</TPopper>
  </div>
</template>
```
