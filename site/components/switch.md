# Switch

开关

## Default

```vue demo
<script setup>
import { ref } from 'vue'
const val = ref(true)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <div class=""><Switch v-model:checked="val" /> value: {{ val }}</div>
  </div>
</template>
```

## Icon

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Switch>
      <template #open>
        <svg class="text-primary-500 h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
          />
        </svg>
      </template>
      <template #close>
        <svg class="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 12 12">
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </Switch>
  </div>
</template>
```

## Props

| Prop        | Type    | Default | Description                   |
| ----------- | ------- | ------- | ----------------------------- |
| **checked** | boolean | false   | whether the checkbox checked  |
| name        | string  | -       | input name                    |
| value       | any     | -       | value for group               |
| disabled    | boolean | false   | whether the checkbox disabled |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
