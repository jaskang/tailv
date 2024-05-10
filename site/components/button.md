---
hello: world
---

<script>
  import ButtonBooth from './booth/button.vue'
</script>

# Button

## 基础用法

<ButtonBooth/>

```ts
import { Button } from 'tailv'
```

## 风格

Button 组件支持五种风格，通过 `variant` 属性设置。

分别为: `outline` | `solid` | `soft` | `text` | `link` , 默认为 `outline`

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <Button>default</Button>
    <Button variant="solid">primary</Button>
    <Button variant="soft">soft</Button>
    <Button variant="text">text</Button>
    <Button variant="link">link</Button>
  </div>
</template>
```

## 颜色

样式 `primary`| `soft`| `text` 支持自定义颜色

```vue demo title=默认样式
<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-wrap items-center gap-2">
      <span class="w-12 text-right font-medium">outline:</span>
      <Button variant="outline">button</Button>
      <Button variant="outline" color="primary">primary</Button>
      <Button variant="outline" color="success">success</Button>
      <Button variant="outline" color="warning">warning</Button>
      <Button variant="outline" color="danger">danger</Button>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <span class="w-12 text-right font-medium">solid:</span>
      <Button variant="solid">button</Button>
      <Button variant="solid" color="primary">primary</Button>
      <Button variant="solid" color="success">success</Button>
      <Button variant="solid" color="warning">warning</Button>
      <Button variant="solid" color="danger">danger</Button>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <span class="w-12 text-right font-medium">soft:</span>
      <Button variant="soft">button</Button>
      <Button variant="soft" color="primary">primary</Button>
      <Button variant="soft" color="success">success</Button>
      <Button variant="soft" color="warning">warning</Button>
      <Button variant="soft" color="danger">danger</Button>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <span class="w-12 text-right font-medium">text:</span>
      <Button variant="text">button</Button>
      <Button variant="text" color="primary">primary</Button>
      <Button variant="text" color="success">success</Button>
      <Button variant="text" color="warning">warning</Button>
      <Button variant="text" color="danger">danger</Button>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <span class="w-12 text-right font-medium">link:</span>
      <Button variant="link">button</Button>
      <Button variant="link" color="primary">primary</Button>
      <Button variant="link" color="success">success</Button>
      <Button variant="link" color="warning">warning</Button>
      <Button variant="link" color="danger">danger</Button>
    </div>
  </div>
</template>
```

### outline

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="outline">button</Button>
  </div>
</template>
```

### text Variant

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="text">button</Button>
    <Button variant="text" color="success">success</Button>
    <Button variant="text" color="warning">warning</Button>
    <Button variant="text" color="danger">danger</Button>
  </div>
</template>
```

### link Variant

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="link">button</Button>
    <Button variant="link" color="success">success</Button>
    <Button variant="link" color="warning">warning</Button>
    <Button variant="link" color="danger">danger</Button>
  </div>
</template>
```

## Pill

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button pill>button</Button>
    <Button variant="solid" color="primary" pill>Primary</Button>
  </div>
</template>
```

## Square

```vue demo
<template>
  <div class="flex items-center gap-2">
    <Button square size="sm">D</Button>
    <Button square>D</Button>
    <Button square size="lg">D</Button>
  </div>
</template>
```

## block

```vue demo
<template>
  <div class="space-y-2">
    <Button variant="solid" size="lg" block>block button</Button>
  </div>
</template>
```

## Sizes

```vue demo
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button variant="solid" color="primary" size="sm">size: sm</Button>
    <Button variant="solid" color="primary" size="md">size: md</Button>
    <Button variant="solid" color="primary" size="lg">size: lg</Button>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button disabled>button</Button>
    <Button variant="solid" color="primary" disabled>Primary</Button>
    <Button variant="solid" color="danger" disabled>danger</Button>
  </div>
</template>
```

## Loading

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button loading>button</Button>
    <Button variant="solid" color="primary" loading>Primary</Button>
    <Button variant="solid" color="lime" loading>Primary</Button>
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
    <Button square>
      <TrashIcon class="h-4 w-4" />
    </Button>
    <Button square variant="soft">
      <TrashIcon class="h-4 w-4" />
    </Button>
    <Button square variant="text">
      <TrashIcon class="h-4 w-4" />
    </Button>
    <Button square variant="outline">
      <TrashIcon class="h-4 w-4" />
    </Button>
  </div>
</template>
```

## SpaceCompact

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <SpaceCompact>
      <Tooltip content="Like">
        <Button>button</Button>
      </Tooltip>
      <Tooltip content="Comment">
        <Button>button</Button>
      </Tooltip>
      <Tooltip content="Star">
        <Button>button</Button>
      </Tooltip>
      <Tooltip content="Heart">
        <Button>button</Button>
      </Tooltip>
      <Tooltip content="Share">
        <Button>button</Button>
      </Tooltip>
      <Tooltip content="Download">
        <Button>button</Button>
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
