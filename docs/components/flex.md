<style lang="scss">
  .demo > .t-flex{
    @apply rounded-lg font-mono text-sm font-bold leading-6 text-white bg-stripes-blue  [&>div]:flex [&>div]:h-14 [&>div]:items-center [&>div]:justify-center [&>div]:rounded-lg [&>div]:bg-blue-500;
  }
</style>

用于控制弹性项目如何增长和收缩的实用程序。

```vue preview
<template>
  <TFlex gap="1rem">
    <TFlexItem class="w-14">w-14</TFlexItem>
    <TFlexItem flex="1">1</TFlexItem>
    <TFlexItem flex="1">1</TFlexItem>
  </TFlex>
</template>
```

```vue preview
<template>
  <TFlex gap="1rem">
    <TFlexItem class="w-14 bg-indigo-300">w-14</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
  </TFlex>
</template>
```

## align 间距

align 值为 `start` | `end` | `center` | `baseline` | `stretch`

```vue preview
<template>
  <h4>start</h4>
  <TFlex align="start" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>end</h4>
  <TFlex align="end" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>center</h4>
  <TFlex align="center" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>baseline</h4>
  <TFlex align="baseline" gap="1rem">
    <TFlexItem flex="1" class="pb-6 pt-2">01</TFlexItem>
    <TFlexItem flex="1" class="pb-12 pt-8">02</TFlexItem>
    <TFlexItem flex="1" class="pb-4 pt-12">03</TFlexItem>
  </TFlex>
  <h4>stretch</h4>
  <TFlex align="stretch" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
</template>
```

## gap 间距

gap

```vue preview
<script setup>
import { ref } from 'vue'

const gap = ref('1rem')
</script>
<template>
  <div class="mb-4 space-x-4">
    <TRadioGroup v-model:value="gap">
      <TRadio value="4">1rem</TRadio>
      <TRadio value="4rem">4rem</TRadio>
      <TRadio value="4vw">10vw</TRadio>
      <TRadio value="100px">100px</TRadio>
    </TRadioGroup>
  </div>
  <TFlex :gap="gap">
    <TFlexItem flex="100px">100px</TFlexItem>
    <TFlexItem flex="1">flex 1</TFlexItem>
    <TFlexItem flex="1">flex 1</TFlexItem>
    <TFlexItem flex="100px">100px</TFlexItem>
  </TFlex>
</template>
```
