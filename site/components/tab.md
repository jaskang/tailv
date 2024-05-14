# Tab

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'

const items = [
  { key: '1', label: 'Tab 1' },
  { key: '2', label: 'Tab 2' },
  { key: '3', label: 'Tab 3' },
]

const current = ref('1')
</script>
<template>
  <Tabs class="border-b  px-2" :items="items" @change="current = $event"></Tabs>
  current: Tab {{ current }}
</template>
```

## 内容插槽

```vue demo
<script setup>
const items = [
  { key: '1', label: 'Tab 1' },
  { key: '2', label: 'Tab 2' },
  { key: '3', label: 'Tab 3' },
]
</script>
<template>
  <Tabs :items="items" class="rounded"></Tabs>
</template>
```

## card

```vue demo
<script setup>
const items = [
  { key: '1', label: 'Tab 1' },
  { key: '2', label: 'Tab 2' },
  { key: '3', label: 'Tab 3' },
]
</script>
<template>
  <Tabs type="card" :items="items" class=""></Tabs>
</template>
```
