# Switch

```vue preview
<template>
  <div class="space-x-1">
    <ESwitch v-model="checked">ESwitch</ESwitch>
    <ESwitch v-model="checked" disabled>ESwitch disabled</ESwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```
