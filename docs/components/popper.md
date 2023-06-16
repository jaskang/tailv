# checkbox

```vue preview
<script setup>
import { ref, watchEffect } from 'vue'

const open = ref(false)

const openPopper = e => {
  open.value = !open.value
  console.log('openPopper', open.value)
}
</script>
<template>
  <div class="space-x-1">
    <TPopper>
      <TButton @click="openPopper">popper</TButton>
      <template #content> 1234 </template>
    </TPopper>
  </div>
</template>
```
