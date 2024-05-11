# Tooltip

## default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Tooltip content="content">
      <Button>Button</Button>
    </Tooltip>
  </div>
</template>
```

## nested

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <Tooltip trigger="click">
      <Button>Button</Button>
      <template #content>
        content
        <Tooltip>
          <Button>Button</Button>
          <template #content> content </template>
        </Tooltip>
      </template>
    </Tooltip>
  </div>
</template>
```
