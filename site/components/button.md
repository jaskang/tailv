---
hello: world
---

<script>
  import ButtonBooth from './booth/button.vue'
</script>

# Button

## 基础用法

<ButtonBooth/>

## 风格

Button 组件支持五种风格，通过 `variant` 属性设置。

分别为: `solid` | `outline` | `soft` | `text` | `default`, 默认为 `default`

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <TButton>default</TButton>
    <TButton variant="solid">primary</TButton>
    <TButton variant="outline">primary</TButton>
    <TButton variant="soft">soft</TButton>
    <TButton variant="text">text</TButton>
  </div>
</template>
```

## 颜色

样式 `primary` | `success` | `warning` | `danger`, 四种颜色可选

```vue demo title=默认样式
<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <span class="w-16 shrink-0 text-right font-medium">solid:</span>
      <div class="grid flex-1 grid-cols-5 gap-4">
        <TButton variant="solid" color="primary">primary</TButton>
        <TButton variant="solid" color="success">success</TButton>
        <TButton variant="solid" color="warning">warning</TButton>
        <TButton variant="solid" color="danger">danger</TButton>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="w-16 shrink-0 text-right font-medium">outline:</span>
      <div class="grid flex-1 grid-cols-5 gap-4">
        <TButton variant="outline" color="primary">primary</TButton>
        <TButton variant="outline" color="success">success</TButton>
        <TButton variant="outline" color="warning">warning</TButton>
        <TButton variant="outline" color="danger">danger</TButton>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="w-16 text-right font-medium">soft:</span>
      <div class="grid flex-1 grid-cols-5 gap-4">
        <TButton variant="soft" color="primary">primary</TButton>
        <TButton variant="soft" color="success">success</TButton>
        <TButton variant="soft" color="warning">warning</TButton>
        <TButton variant="soft" color="danger">danger</TButton>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="w-16 text-right font-medium">text:</span>
      <div class="grid flex-1 grid-cols-5 gap-4">
        <TButton variant="text" color="primary">primary</TButton>
        <TButton variant="text" color="success">success</TButton>
        <TButton variant="text" color="warning">warning</TButton>
        <TButton variant="text" color="danger">danger</TButton>
      </div>
    </div>
  </div>
</template>
```

### outline

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <TButton variant="outline">button</TButton>
  </div>
</template>
```

### text Variant

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton variant="text">button</TButton>
    <TButton variant="text" color="success">success</TButton>
    <TButton variant="text" color="warning">warning</TButton>
    <TButton variant="text" color="danger">danger</TButton>
  </div>
</template>
```

## Pill

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton pill>button</TButton>
    <TButton variant="solid" color="primary" pill>Primary</TButton>
  </div>
</template>
```

## Square

```vue demo
<template>
  <div class="flex items-center gap-2">
    <TButton square size="sm">D</TButton>
    <TButton square>D</TButton>
    <TButton square size="lg">D</TButton>
  </div>
</template>
```

## block

```vue demo
<template>
  <div class="space-y-2">
    <TButton variant="solid" color="primary" size="lg" block>block button</TButton>
  </div>
</template>
```

## Sizes

```vue demo
<template>
  <div class="flex flex-wrap items-center gap-2">
    <TButton variant="solid" color="primary" size="sm">size: sm</TButton>
    <TButton variant="solid" color="primary" size="md">size: md</TButton>
    <TButton variant="solid" color="primary" size="lg">size: lg</TButton>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton disabled>button</TButton>
    <TButton variant="solid" color="primary" disabled>Primary</TButton>
    <TButton variant="solid" color="danger" disabled>danger</TButton>
  </div>
</template>
```

## Loading

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton loading>button</TButton>
    <TButton variant="solid" color="primary" loading>Primary</TButton>
    <TButton variant="solid" color="lime" loading>Primary</TButton>
  </div>
</template>
```

## Icon

```vue demo
<script setup>
import { PaperAirplaneIcon, InboxIcon, TrashIcon, ArchiveBoxIcon, CircleStackIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="flex items-center gap-2">
    <TButton square>
      <TrashIcon class="h-4 w-4" />
    </TButton>
    <TButton square variant="soft">
      <TrashIcon class="h-4 w-4" />
    </TButton>
    <TButton square variant="text">
      <TrashIcon class="h-4 w-4" />
    </TButton>
    <TButton square variant="outline">
      <TrashIcon class="h-4 w-4" />
    </TButton>
  </div>
</template>
```

## SpaceCompact

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <SpaceCompact>
      <Tooltip content="Like">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Comment">
        <TButton variant="soft" color="primary">button</TButton>
      </Tooltip>
      <Tooltip content="Star">
        <TButton variant="soft" color="success">button</TButton>
      </Tooltip>
      <Tooltip content="Heart">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Share">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Download">
        <TButton>button</TButton>
      </Tooltip>
    </SpaceCompact>
  </div>
</template>
```

## Props

| Prop     | Type                  | Default | Description                  |
| -------- | --------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'text' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'   | 'md'    | Size of the button           |
| pill     | boolean               | false   | Pill style of the button     |
| square   | boolean               | false   | Square style of the button   |
| loading  | boolean               | false   | Loading state of the button  |
| disabled | boolean               | false   | Disabled state of the button |
| color    | string                | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
