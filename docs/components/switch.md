# Switch

```vue preview
<template>
  <div class="space-x-1">
    <WSwitch v-model="checked">ESwitch</WSwitch>
    <WSwitch v-model="checked" disabled>ESwitch disabled</WSwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```
