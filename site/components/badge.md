# Avatar

## 基础用法

```vue demo
<template>
  <div>
    <Badge content="9" color="primary">
      <Avatar src="https://i.pravatar.cc/150?u=1" />
    </Badge>
  </div>
</template>
```

## rounded

```vue demo
<template>
  <div class="flex items-center gap-4">
    <Badge><Avatar rounded src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge color="primary"><Avatar rounded src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge color="success"><Avatar rounded src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge color="warning"><Avatar rounded src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge color="danger"><Avatar rounded src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>
  <div class="mt-4 flex items-center gap-4">
    <Badge content="99"><Avatar rounded src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge content="9" color="primary"><Avatar rounded src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge content="9" color="success"><Avatar rounded src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge content="9" color="warning"><Avatar rounded src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge content="99" color="danger"><Avatar rounded src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>

  <div class="mt-4 flex items-center gap-4">
    <Badge content="99"><Avatar border src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge content="9" color="primary"><Avatar border src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge content="9" color="success"><Avatar border src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge content="9" color="warning"><Avatar border src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge content="99" color="danger"><Avatar border src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>

  <div class="mt-4 flex items-center gap-4">
    <Badge content="99"><Avatar rounded border src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge content="9" color="primary"><Avatar rounded border src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge content="9" color="success"><Avatar rounded border src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge content="9" color="warning"><Avatar rounded border src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge content="99" color="danger"><Avatar rounded border src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>
</template>
```
