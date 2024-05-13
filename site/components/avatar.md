# Avatar

## 基础用法

```vue demo
<template>
  <div>
    <Avatar src="https://i.pravatar.cc/150?u=1" />
  </div>
</template>
```

## rounded

```vue demo
<template>
  <div class="flex items-center gap-4">
    <Avatar rounded src="https://i.pravatar.cc/150?u=1" />
    <Avatar rounded src="https://i.pravatar.cc/150?u=2" />
    <Avatar rounded src="https://i.pravatar.cc/150?u=3" />
  </div>
</template>
```

## border

```vue demo
<template>
  <div class="flex items-center gap-4">
    <Avatar rounded border src="https://i.pravatar.cc/150?u=1" />
    <Avatar rounded border class="border-primary" src="https://i.pravatar.cc/150?u=2" />
    <Avatar rounded border class="border-success" src="https://i.pravatar.cc/150?u=2" />
    <Avatar rounded border class="border-warning" src="https://i.pravatar.cc/150?u=2" />
    <Avatar rounded border class="border-danger" src="https://i.pravatar.cc/150?u=2" />
  </div>
</template>
```

## 基础用法

```vue demo
<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
      <Avatar size="md" src="https://i.pravatar.cc/150?u=2" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?u=3" />
    </div>
    <div class="flex items-center gap-4">
      <Avatar size="sm" rounded src="https://i.pravatar.cc/150?u=1" />
      <Avatar size="md" rounded src="https://i.pravatar.cc/150?u=2" />
      <Avatar size="lg" rounded src="https://i.pravatar.cc/150?u=3" />
    </div>
  </div>
</template>
```
