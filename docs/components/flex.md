<style>
  .demo > .z-flex{
    @apply rounded-lg font-mono text-sm font-bold leading-6 text-white bg-stripes-blue  [&>div]:flex [&>div]:h-14 [&>div]:items-center [&>div]:justify-center [&>div]:rounded-lg [&>div]:bg-blue-500;
  }
</style>

用于控制弹性项目如何增长和收缩的实用程序。

```vue preview
<template>
  <ZFlex gap="1rem">
    <ZFlexItem class="w-14">w-14</ZFlexItem>
    <ZFlexItem flex="1">1</ZFlexItem>
    <ZFlexItem flex="1">1</ZFlexItem>
  </ZFlex>
</template>
```

```vue preview
<template>
  <ZFlex gap="1rem">
    <ZFlexItem class="w-14 bg-indigo-300">w-14</ZFlexItem>
    <ZFlexItem flex="1" class="">1</ZFlexItem>
    <ZFlexItem flex="1" class="">1</ZFlexItem>
  </ZFlex>
</template>
```

## align 间距

align 值为 `start` | `end` | `center` | `baseline` | `stretch`

```vue preview
<template>
  <h4>start</h4>
  <ZFlex align="start" gap="1rem">
    <ZFlexItem flex="1" class="py-4">01</ZFlexItem>
    <ZFlexItem flex="1" class="py-12">02</ZFlexItem>
    <ZFlexItem flex="1" class="py-8">03</ZFlexItem>
  </ZFlex>
  <h4>end</h4>
  <ZFlex align="end" gap="1rem">
    <ZFlexItem flex="1" class="py-4">01</ZFlexItem>
    <ZFlexItem flex="1" class="py-12">02</ZFlexItem>
    <ZFlexItem flex="1" class="py-8">03</ZFlexItem>
  </ZFlex>
  <h4>center</h4>
  <ZFlex align="center" gap="1rem">
    <ZFlexItem flex="1" class="py-4">01</ZFlexItem>
    <ZFlexItem flex="1" class="py-12">02</ZFlexItem>
    <ZFlexItem flex="1" class="py-8">03</ZFlexItem>
  </ZFlex>
  <h4>baseline</h4>
  <ZFlex align="baseline" gap="1rem">
    <ZFlexItem flex="1" class="pb-6 pt-2">01</ZFlexItem>
    <ZFlexItem flex="1" class="pb-12 pt-8">02</ZFlexItem>
    <ZFlexItem flex="1" class="pb-4 pt-12">03</ZFlexItem>
  </ZFlex>
  <h4>stretch</h4>
  <ZFlex align="stretch" gap="1rem">
    <ZFlexItem flex="1" class="py-4">01</ZFlexItem>
    <ZFlexItem flex="1" class="py-12">02</ZFlexItem>
    <ZFlexItem flex="1" class="py-8">03</ZFlexItem>
  </ZFlex>
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
    <ZRadioGroup v-model:value="gap">
      <ZRadio value="4">1rem</ZRadio>
      <ZRadio value="4rem">4rem</ZRadio>
      <ZRadio value="4vw">10vw</ZRadio>
      <ZRadio value="100px">100px</ZRadio>
    </ZRadioGroup>
  </div>
  <ZFlex :gap="gap">
    <ZFlexItem flex="100px">100px</ZFlexItem>
    <ZFlexItem flex="1">flex 1</ZFlexItem>
    <ZFlexItem flex="1">flex 1</ZFlexItem>
    <ZFlexItem flex="100px">100px</ZFlexItem>
  </ZFlex>
</template>
```
