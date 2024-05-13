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
    <Badge content="99"><Avatar rounded src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge content="99" color="primary"><Avatar rounded src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge content="99" color="success"><Avatar rounded src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge content="99" color="warning"><Avatar rounded src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge content="99" color="danger"><Avatar rounded src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>
</template>
```

## rounded

```vue demo
<template>
  <div class="flex items-center gap-4">
    <Badge shape="circle"><Avatar rounded src="https://i.pravatar.cc/150?u=0" /></Badge>
    <Badge shape="circle" color="primary"><Avatar rounded src="https://i.pravatar.cc/150?u=1" /></Badge>
    <Badge shape="circle" color="success"><Avatar rounded src="https://i.pravatar.cc/150?u=2" /></Badge>
    <Badge shape="circle" color="warning"><Avatar rounded src="https://i.pravatar.cc/150?u=3" /></Badge>
    <Badge shape="circle" color="danger"><Avatar rounded src="https://i.pravatar.cc/150?u=4" /></Badge>
  </div>
</template>
```
