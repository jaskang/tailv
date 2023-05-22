# Switch

```vue preview
<template>
  <div class="space-x-1">
    <TSwitch v-model:checked="checked">Switch</TSwitch>
    <TSwitch v-model:checked="checked" disabled>Switch disabled</TSwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```

## 自定义图标

```vue preview
<template>
  <div class="space-x-1">
    <TSwitch v-model:checked="checked">
      Switch
      <template #on><SpeakerWaveIcon /></template>
      <template #off><SpeakerXMarkIcon /></template>
    </TSwitch>
    <TSwitch v-model:checked="checked">
      Switch
      <template #on><CheckIcon class="text-green-500" /></template>
      <template #off><XMarkIcon class="text-red-500" /></template>
    </TSwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```
