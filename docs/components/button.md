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

## 禁用

```vue preview
<template>
  <EButton disabled>禁用状态</EButton>
  <EButton variant="round" disabled>圆角按钮-禁用状态</EButton>
  <EButton variant="circle" disabled>D</EButton>
  <EButton variant="square" disabled>链接按钮-禁用状态</EButton>
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
  <EButton variant="round">默认</EButton>
  <EButton color="primary" variant="round">primary</EButton>
  <EButton color="success" variant="round">success</EButton>
  <EButton color="warning" variant="round">warning</EButton>
  <EButton color="error" variant="round">error</EButton>
</template>
```

## 圆形

```vue preview
<template>
  <EButton variant="circle">D</EButton>
  <EButton color="primary" variant="circle">P</EButton>
  <EButton color="success" variant="circle">S</EButton>
  <EButton color="warning" variant="circle">W</EButton>
  <EButton color="error" variant="circle">E</EButton>
</template>
```

## 方形

```vue preview
<template>
  <EButton variant="square">乾</EButton>
  <EButton variant="square">坤</EButton>
  <EButton color="primary" variant="square">A+</EButton>
  <EButton color="success" variant="square">B</EButton>
  <EButton color="warning" variant="square">C</EButton>
  <EButton color="error" variant="square">SSS</EButton>
</template>
```

## 图标

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <EButton size="xs">
    <template #icon>
      <EIcon><CubeIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="sm">
    <template #icon>
      <EIcon><CubeIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="md">
    <template #icon>
      <EIcon spin><CubeIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="md"> 正常按钮 </EButton>
  <EButton size="lg">
    <template #icon>
      <EIcon><CubeIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="xl">
    <template #icon>
      <EIcon><CubeIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <br /><br />
  <EButton size="xs" color="primary">
    <template #icon>
      <EIcon><CogIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="sm" color="primary">
    <template #icon>
      <EIcon><CogIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="md" color="primary">
    <template #icon>
      <EIcon spin><CogIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="lg" color="primary">
    <template #icon>
      <EIcon><CogIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
  <EButton size="xl" color="primary">
    <template #icon>
      <EIcon><CogIcon /></EIcon>
    </template>
    图标按钮
  </EButton>
</template>
```

`variant` 设置为 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <EButton variant="circle">
    <template #icon>
      <EIcon spin><CogIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="square">
    <template #icon>
      <EIcon spin><CogIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="circle" color="primary">
    <template #icon>
      <EIcon><HomeIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="square" color="primary">
    <template #icon>
      <EIcon><HomeIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="circle" color="success">
    <template #icon>
      <EIcon><CloudIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="square" color="success">
    <template #icon>
      <EIcon><CloudIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="circle" color="warning">
    <template #icon>
      <EIcon><BellIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="square" color="warning">
    <template #icon>
      <EIcon><BellIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="circle" color="error">
    <template #icon>
      <EIcon><CubeIcon /></EIcon>
    </template>
  </EButton>
  <EButton variant="square" color="error">
    <template #icon>
      <EIcon size="30px"><CubeIcon /></EIcon>
    </template>
  </EButton>
  <span>沙发斯蒂芬</span>
</template>
```
