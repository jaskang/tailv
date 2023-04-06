<style lang="scss"> 
.mdp-demo__preview {
  > .e-btn{
    margin-left: 1rem;
    /* margin-top: 1rem; */
    &:first-child{
      margin-left: 0;
    }
  } 
  > br + .e-btn{
    margin-left: 0 !important;
  }
}
</style>

# Button

## 浅色按钮

```vue preview
<template>
  <EButton variant="subtle">浅色按钮</EButton>
  <EButton variant="subtle" color="primary">primary</EButton>
  <EButton variant="subtle" color="success">success</EButton>
  <EButton variant="subtle" color="warning">warning</EButton>
  <EButton variant="subtle" color="error">error</EButton>
</template>
```

## 链接

```vue preview
<template>
  <EButton variant="link">链接按钮</EButton>
  <EButton variant="link" color="primary">primary</EButton>
  <EButton variant="link" color="success">success</EButton>
  <EButton variant="link" color="warning">warning</EButton>
  <EButton variant="link" color="error">error</EButton>
</template>
```

## 禁用

```vue preview
<template>
  <EButton disabled>禁用状态</EButton>
  <EButton disabled>圆角按钮-禁用状态</EButton>
  <EButton circle disabled>D</EButton>
  <EButton variant="link" disabled>链接按钮-禁用状态</EButton>
  <EButton color="primary" disabled>primary</EButton>
</template>
```

## 颜色

```vue preview
<template>
  <EButton>你测sd试好</EButton>
  <EButton color="primary">primary</EButton>
  <EButton color="success">success</EButton>
  <EButton color="warning">warning</EButton>
  <EButton color="error">error</EButton>
  <br /><br />
  <EButton plain>你测sd试好</EButton>
  <EButton plain color="primary">primary</EButton>
  <EButton plain color="success">success</EButton>
  <EButton plain color="warning">warning</EButton>
  <EButton plain color="error">error</EButton>
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
  <EButton rounded>默认</EButton>
  <EButton color="primary" rounded>primary</EButton>
  <EButton color="success" rounded>success</EButton>
  <EButton color="warning" rounded>warning</EButton>
  <EButton color="error" rounded>error</EButton>
</template>
```

## 圆形

```vue preview
<template>
  <EButton circle>D</EButton>
  <EButton color="primary" circle>P</EButton>
  <EButton color="success" circle>S</EButton>
  <EButton color="warning" circle>W</EButton>
  <EButton color="error" circle>E</EButton>
</template>
```

## 方形

```vue preview
<template>
  <EButton square>乾</EButton>
  <EButton square>坤</EButton>
  <EButton color="primary" square>A+</EButton>
  <EButton color="success" square>B</EButton>
  <EButton color="warning" square>C</EButton>
  <EButton color="error" square>SSS</EButton>
</template>
```

## 图标

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <EButton size="xs">
    <template #icon>
      <CubeIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="sm">
    <template #icon>
      <CubeIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="md">
    <template #icon>
      <CubeIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="lg">
    <template #icon>
      <CubeIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="xl">
    <template #icon>
      <CubeIcon />
    </template>
    图标按钮
  </EButton>
  <br /><br />
  <EButton size="xs" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="sm" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="md" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="lg" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </EButton>
  <EButton size="xl" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </EButton>
</template>
```

`variant` 设置为 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <EButton circle>
    <template #icon>
      <CogIcon />
    </template>
  </EButton>
  <EButton square>
    <template #icon>
      <CogIcon />
    </template>
  </EButton>
  <EButton circle color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </EButton>
  <EButton square color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </EButton>
  <EButton circle color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </EButton>
  <EButton square color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </EButton>
  <EButton circle color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </EButton>
  <EButton square color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </EButton>
  <EButton circle color="error">
    <template #icon>
      <CubeIcon />
    </template>
  </EButton>
  <EButton circle color="error">
    <CubeIcon />
  </EButton>
  <span>沙发斯蒂芬</span>
</template>
```
