# Anchor

```vue demo
<script setup>
import { ref } from 'vue'
const current = ref('B-2')
const changeHandler = item => {
  current.value = item.id
}
</script>
<template>
  <div>
    <Anchor
      :current="current"
      @change="changeHandler"
      :items="[
        { title: 'A', id: 'A' },
        {
          title: 'B',
          id: 'B',
          children: [
            { title: 'B-1', id: 'B-1' },
            { title: 'B-2', id: 'B-2' },
            { title: 'B-3', id: 'B-3' },
          ],
        },
        { title: 'C', id: 'C' },
      ]"
    />
  </div>
</template>
```
