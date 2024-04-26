---
hello: world
---

# Button

## Variant

### Default

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <Button>button</Button>
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

### solid Variant

```vue{4} demo
<template>
<div class="flex flex-wrap gap-2">
  <Button variant="solid">button</Button>
  <Button variant="solid" color="success">success</Button>
  <Button variant="solid" color="warning">warning</Button>
  <Button variant="solid" color="danger">danger</Button>
</div>
</template>
```

### ghost Variant

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="ghost">button</Button>
    <Button variant="ghost" color="success">success</Button>
    <Button variant="ghost" color="warning">warning</Button>
    <Button variant="ghost" color="danger">danger</Button>
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
      <PaperAirplaneIcon />
    </Button>
    <Button>
      <InboxIcon />
    </Button>
    <Button variant="outline">
      <TrashIcon />
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

| Prop     | Type                   | Default | Description                  |
| -------- | ---------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'ghost' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'    | 'md'    | Size of the button           |
| pill     | boolean                | false   | Pill style of the button     |
| square   | boolean                | false   | Square style of the button   |
| loading  | boolean                | false   | Loading state of the button  |
| disabled | boolean                | false   | Disabled state of the button |
| color    | string                 | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
