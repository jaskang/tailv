# RadioGroup

```vue demo
<script setup>
import { ref } from 'vue'

const picked = ref('A')
</script>
<template>
  <div>
    picked: {{ picked }}
    <RadioGroup class="mt-2 flex gap-4" v-model:value="picked">
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
    </RadioGroup>
  </div>
</template>
```

## Default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Radio value="A">checkbox</Radio>
    <Radio value="B" checked>checkbox</Radio>
  </div>
</template>
```

## RadioCard

```vue demo
<template>
  <div class="flex flex-col gap-4">
    <RadioGroup class="flex gap-4">
      <RadioCard value="A" class="flex flex-col">
        <span class="font-semibold">8-core CPU</span>
        <span>32 GB RAM</span>
      </RadioCard>
      <RadioCard value="B" class="flex flex-col">
        <span class="font-semibold">6-core CPU</span>
        <span>24 GB RAM</span>
      </RadioCard>
      <RadioCard value="C" class="flex flex-col">
        <span class="font-semibold">4-core CPU</span>
        <span>16 GB RAM</span>
      </RadioCard>
    </RadioGroup>
  </div>
</template>
```

## RadioCard size

```vue demo
<template>
  <div class="flex flex-col gap-4">
    <RadioGroup class="flex gap-4" size="sm">
      <RadioCard value="A">value A</RadioCard>
      <RadioCard value="B">value B</RadioCard>
      <RadioCard value="C">value B</RadioCard>
    </RadioGroup>
    <RadioGroup class="flex gap-4" size="lg">
      <RadioCard value="A">value A</RadioCard>
      <RadioCard value="B">value B</RadioCard>
      <RadioCard value="C">value B</RadioCard>
    </RadioGroup>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Radio value="A" disabled checked> checked </Radio>
    <Radio value="B" disabled>unchecked</Radio>
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
