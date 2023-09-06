# Switch

```vue preview
<template>
  <div class="space-x-1">
    <ZSwitch v-model:checked="checked">Switch</ZSwitch>
    <ZSwitch v-model:checked="checked" disabled>Switch disabled</ZSwitch>
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
    <ZSwitch v-model:checked="checked">
      Switch
      <template #on><SpeakerWaveIcon /></template>
      <template #off><SpeakerXMarkIcon /></template>
    </ZSwitch>
    <ZSwitch v-model:checked="checked">
      Switch
      <template #on><CheckIcon class="text-green-500" /></template>
      <template #off><XMarkIcon class="text-red-500" /></template>
    </ZSwitch>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```
