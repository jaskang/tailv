---
hello: world
---

# Button

## Default

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <Button>Button</Button>
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </div>
</template>
```

## secondary Variant

```vue{4} demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="secondary">Button</Button>
    <Button variant="secondary" color="primary"> Primary </Button>
    <Button variant="secondary" color="success"> Success </Button>
    <Button variant="secondary" color="warning"> Warning </Button>
    <Button variant="secondary" color="danger"> Error </Button>
  </div>
</template>
```

## ghost Variant

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="ghost">Button</Button>
    <Button variant="ghost" color="primary"> Primary </Button>
    <Button variant="ghost" color="success"> Success </Button>
    <Button variant="ghost" color="warning"> Warning </Button>
    <Button variant="ghost" color="danger"> danger </Button>
  </div>
</template>
```

## Pill

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button pill>Button</Button>
    <Button color="primary" pill> Primary </Button>
  </div>
</template>
```

## Square

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button square>D</Button>
    <Button square pill> D </Button>
    <Button color="primary" square> P </Button>

    <Button color="primary" square pill> P </Button>
  </div>
</template>
```

## Sizes

```vue demo
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button color="primary" size="sm"> size: sm </Button>
    <Button color="primary" size="md"> size: md </Button>
    <Button color="primary" size="lg"> size: lg </Button>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button disabled>Button</Button>
    <Button color="primary" disabled> Primary </Button>
    <Button color="danger" disabled> danger </Button>
  </div>
</template>
```

## Loading

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Button loading>Button</Button>
    <Button color="primary" loading> Primary </Button>
    <Button color="lime" loading> Primary </Button>
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
