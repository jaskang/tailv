<style lang="scss"> 
.mdp-demo__preview {
  > .e-button:not(:first-child){
    margin-left: 1rem;
  }
  > br + .e-button{
    margin-left: 0 !important;
  }
}
</style>

# Button

## 颜色

```vue preview
<template>
  <EButton>你测sd试好</EButton>
  <EButton color="primary">primary</EButton>
  <EButton color="success">success</EButton>
  <EButton color="warning">warning</EButton>
  <EButton color="error">error</EButton>
  <EButton disabled>默认</EButton>
  <br /><br />
  <EButton plain>你测sd试好</EButton>
  <EButton plain color="primary">primary</EButton>
  <EButton plain color="success">success</EButton>
  <EButton plain color="warning">warning</EButton>
  <EButton plain color="error">error</EButton>
  <EButton plain disabled>默认</EButton>
</template>
```

## 大小

```vue preview
<template>
  <EButton size="xs">button xs</EButton>
  <EButton size="sm">button sm</EButton>
  <EButton>button</EButton>
  <EButton size="lg">button lg</EButton>
  <EButton size="xl">button xl</EButton>
  <br /><br />
  <EButton color="primary" size="xs">button xs</EButton>
  <EButton color="primary" size="sm">button sm</EButton>
  <EButton color="primary">button</EButton>
  <EButton color="primary" size="lg">button lg</EButton>
  <EButton color="primary" size="xl">button xl</EButton>
</template>
```

## 椭圆

```vue preview
<template>
  <EButton shape="round">默认</EButton>
  <EButton color="primary" shape="round">primary</EButton>
  <EButton color="success" shape="round">success</EButton>
  <EButton color="warning" shape="round">warning</EButton>
  <EButton color="error" shape="round">error</EButton>
</template>
```

## 圆形

```vue preview
<template>
  <EButton shape="circle">D</EButton>
  <EButton color="primary" shape="circle">P</EButton>
  <EButton color="success" shape="circle">S</EButton>
  <EButton color="warning" shape="circle">W</EButton>
  <EButton color="error" shape="circle">E</EButton>
</template>
```

## 方形

```vue preview
<template>
  <EButton shape="square">D</EButton>
  <EButton color="primary" shape="square">P</EButton>
  <EButton color="success" shape="square">S</EButton>
  <EButton color="warning" shape="square">W</EButton>
  <EButton color="error" shape="square">E</EButton>
</template>
```

## 禁用

```vue preview
<template>
  <EButton disabled>禁用状态</EButton>
  <EButton shape="round" disabled>圆角按钮-禁用状态</EButton>
  <EButton shape="circle" disabled>D</EButton>
  <EButton shape="square" disabled>链接按钮-禁用状态</EButton>
  <EButton color="primary" disabled>primary</EButton>
</template>
```

## 按钮组

```vue preview
<template>
  <EButtonGroup>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
  </EButtonGroup>
  <br /><br />
  <EButtonGroup>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
  </EButtonGroup>
</template>
```
