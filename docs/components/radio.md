# radio

```vue preview
<script setup>
import { ref } from 'vue'

const val = ref('radio4')
</script>
<template>
  <div class="space-x-1">
    <TRadioGroup v-model:value="val">
      <TRadio value="radio1">Radio 1</TRadio>
      <TRadio value="radio2">Radio 2</TRadio>
      <TRadio value="radio3">Radio 3</TRadio>
      <TRadio value="radio4" disabled>Radio 4</TRadio>
    </TRadioGroup>
  </div>
</template>
```
