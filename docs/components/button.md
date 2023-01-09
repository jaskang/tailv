# Button

## 颜色

```vue demo
<template>
  <div class="space-x-1">
    <EButton>你测sd试好</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="success">success</EButton>
    <EButton color="warning">warning</EButton>
    <EButton color="error">error</EButton>
    <EButton disabled>默认</EButton>
    <EButton color="primary" disabled>primary</EButton>
  </div>
</template>
```

aaa

## 大小

```vue demo
<template>
  <div class="space-x-1">
    <EButton size="xs">button xs</EButton>
    <EButton size="sm">button sm</EButton>
    <EButton>button</EButton>
    <EButton size="lg">button lg</EButton>
    <EButton size="xl">button xl</EButton>
  </div>
  <br />
  <div class="space-x-1">
    <EButton color="primary" size="xs">primary xs</EButton>
    <EButton color="primary" size="sm">primary sm</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="primary" size="lg">primary lg</EButton>
    <EButton color="primary" size="xl">primary xl</EButton>
  </div>
</template>
```

## 圆角

```vue demo
<template>
  <div class="space-x-1">
    <EButton type="round">默认</EButton>
    <EButton color="primary" type="round">primary</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="warning" type="round">warning</EButton>
    <EButton color="error" type="round">error</EButton>
  </div>
</template>
```

## 圆形

```vue demo
<template>
  <div class="space-x-1">
    <EButton type="circle">D</EButton>
    <EButton color="primary" type="circle">P</EButton>
    <EButton color="success" type="circle">S</EButton>
    <EButton color="warning" type="circle">W</EButton>
    <EButton color="error" type="circle">E</EButton>
  </div>
</template>
```

## 链接

```vue demo
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

```vue demo
<template>
  <div class="space-x-1">
    <EButton disabled>禁用</EButton>
    <EButton color="primary" disabled>primary 禁用</EButton>
    <EButton type="round" disabled>默认</EButton>
    <EButton type="circle" disabled>D</EButton>
    <EButton type="link" disabled>primary</EButton>
  </div>
</template>
```

## 按钮组

```vue demo
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
