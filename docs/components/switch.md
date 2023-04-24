# Switch

```vue preview
<template>
  <div class="space-x-1">
    <TSwitch v-model="checked">Switch</TSwitch>
    <TSwitch v-model="checked" disabled>Switch disabled</TSwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```
