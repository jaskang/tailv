# radio

```vue preview
<script setup>
import { ref } from 'vue'

const val = ref('radio4')
</script>
<template>
  <div class="space-x-1">
    <ZRadioGroup v-model:value="val">
      <ZRadio value="radio1">Radio 1</ZRadio>
      <ZRadio value="radio2">Radio 2</ZRadio>
      <ZRadio value="radio3">Radio 3</ZRadio>
      <ZRadio value="radio4" disabled>Radio 4</ZRadio>
    </ZRadioGroup>
  </div>
</template>
```
