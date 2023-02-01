<style lang="postcss">
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
  <EButton secondary>你测sd试好</EButton>
  <EButton secondary color="primary">primary</EButton>
  <EButton secondary color="success">success</EButton>
  <EButton secondary color="warning">warning</EButton>
  <EButton secondary color="error">error</EButton>
  <EButton secondary disabled>默认</EButton>
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

## 圆角

```vue preview
<template>
  <EButton type="round">默认</EButton>
  <EButton color="primary" type="round">primary</EButton>
  <EButton color="success" type="round">success</EButton>
  <EButton color="warning" type="round">warning</EButton>
  <EButton color="error" type="round">error</EButton>
</template>
```

## 圆形

```vue preview
<template>
  <EButton type="circle">D</EButton>
  <EButton color="primary" type="circle">P</EButton>
  <EButton color="success" type="circle">S</EButton>
  <EButton color="warning" type="circle">W</EButton>
  <EButton color="error" type="circle">E</EButton>
</template>
```

## 链接

```vue preview
<template>
  <div class="space-x-1">
    <EButton type="link">default</EButton>
    <EButton color="primary" type="link">primary</EButton>
    <EButton color="success" type="link">success</EButton>
    <EButton color="warning" type="link">warning</EButton>
    <EButton color="error" type="link">error</EButton>
  </div>
</template>
```

## 禁用

```vue preview
<template>
  <EButton disabled>禁用状态</EButton>
  <EButton type="round" disabled>圆角按钮-禁用状态</EButton>
  <EButton type="circle" disabled>D</EButton>
  <EButton type="link" disabled>链接按钮-禁用状态</EButton>
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
