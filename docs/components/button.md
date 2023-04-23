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
  <WButton variant="subtle">浅色按钮</WButton>
  <WButton variant="subtle" color="primary">primary</WButton>
  <WButton variant="subtle" color="success">success</WButton>
  <WButton variant="subtle" color="warning">warning</WButton>
  <WButton variant="subtle" color="error">error</WButton>
  <WButton variant="subtle" color="lime">lime</WButton>
  <WButton variant="subtle" color="yellow">yellow</WButton>
  <WButton variant="subtle" color="purple">purple</WButton>
  asdf
</template>
```

## 链接

```vue preview
<template>
  <WButton variant="link">链接按钮</WButton>
  <WButton variant="link" color="primary">primary</WButton>
  <WButton variant="link" color="success">success</WButton>
  <WButton variant="link" color="warning">warning</WButton>
  <WButton variant="link" color="error">error</WButton>
</template>
```

## 禁用

```vue preview
<template>
  <WButton disabled>禁用状态</WButton>
  <WButton disabled>圆角按钮-禁用状态</WButton>
  <WButton circle disabled>D</WButton>
  <WButton variant="link" disabled>链接按钮-禁用状态</WButton>
  <WButton color="primary" disabled>primary</WButton>
</template>
```

## 颜色

```vue preview
<template>
  <WButton>你测sd试好</WButton>
  <WButton color="primary">primary</WButton>
  <WButton color="success">success</WButton>
  <WButton color="warning">warning</WButton>
  <WButton color="error">error</WButton>

  <WButton color="lime">lime</WButton>
  <WButton color="yellow">yellow</WButton>
  <WButton color="purple">purple</WButton>
</template>
```

## 大小

```vue preview
<template>
  <WButton size="xs">button xs</WButton>
  <WButton size="sm">button sm</WButton>
  <WButton>button</WButton>
  <WButton size="lg">button lg</WButton>
  <WButton size="xl">button xl</WButton>
  <br /><br />
  <WButton color="primary" size="xs">button xs</WButton>
  <WButton color="primary" size="sm">button sm</WButton>
  <WButton color="primary">button</WButton>
  <WButton color="primary" size="lg">button lg</WButton>
  <WButton color="primary" size="xl">button xl</WButton>
</template>
```

## 椭圆

```vue preview
<template>
  <WButton rounded>默认</WButton>
  <WButton color="primary" rounded>primary</WButton>
  <WButton color="success" rounded>success</WButton>
  <WButton color="warning" rounded>warning</WButton>
  <WButton color="error" rounded>error</WButton>
</template>
```

## 圆形

```vue preview
<template>
  <WButton circle>D</WButton>
  <WButton color="primary" circle>P</WButton>
  <WButton color="success" circle>S</WButton>
  <WButton color="warning" circle>W</WButton>
  <WButton color="error" circle>E</WButton>
</template>
```

## 方形

```vue preview
<template>
  <WButton square>乾</WButton>
  <WButton square>坤</WButton>
  <WButton color="primary" square>A+</WButton>
  <WButton color="success" square>B</WButton>
  <WButton color="warning" square>C</WButton>
  <WButton color="error" square>SSS</WButton>
</template>
```

## 图标

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <WButton size="xs" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton size="sm" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton size="md" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton size="lg" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton size="xl" color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <br /><br />
  <WButton size="xs" color="primary">
    <WIcon><CogIcon /></WIcon>
    图标按钮
  </WButton>
  <WButton size="sm" color="primary">
    <WIcon><CogIcon /></WIcon>
    图标按钮
  </WButton>
  <WButton size="md" color="primary">
    <WIcon><CogIcon /></WIcon>
    图标按钮
  </WButton>
  <WButton size="lg" color="primary">
    <WIcon><CogIcon /></WIcon>
    图标按钮
  </WButton>
  <WButton size="xl" color="primary">
    <WIcon><CogIcon /></WIcon>
    图标按钮
  </WButton>
</template>
```

`variant` 设置为 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <WButton circle>
    <template #icon>
      <CogIcon />
    </template>
  </WButton>
  <WButton square>
    <template #icon>
      <CogIcon />
    </template>
  </WButton>
  <WButton circle color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </WButton>
  <WButton square color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </WButton>
  <WButton circle color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </WButton>
  <WButton square color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </WButton>
  <WButton circle color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </WButton>
  <WButton square color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </WButton>
  <WButton circle color="error">
    <template #icon>
      <CubeIcon />
    </template>
  </WButton>
  <WButton circle color="error">
    <WIcon><CubeIcon /></WIcon>
  </WButton>
  <span>沙发斯蒂芬</span>
</template>
```
