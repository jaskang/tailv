<style lang="scss"> 
.mdp-demo__preview {
  > .w-btn{
    margin-left: 1rem;
    /* margin-top: 1rem; */
    &:first-child{
      margin-left: 0;
    }
  } 
  > br + .w-btn{
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
  <WButton disabled color="primary">primary</WButton>
  <WButton disabled color="success">success</WButton>
  <WButton disabled color="warning">warning</WButton>
  <WButton disabled color="error">error</WButton>
  <WButton disabled>禁用状态</WButton>
  <WButton circle disabled>D</WButton>
  <WButton variant="link" disabled>链接按钮-禁用状态</WButton>
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
  <br /><br />

  <WButton color="slate">slate</WButton>
  <WButton color="gray">gray</WButton>
  <WButton color="zinc">zinc</WButton>
  <WButton color="neutral">neutral</WButton>
  <WButton color="stone">stone</WButton>
  <WButton color="red">red</WButton>
  <WButton color="orange">orange</WButton>
  <WButton color="amber">amber</WButton>
  <WButton color="yellow">yellow</WButton>
  <WButton color="lime">lime</WButton>
  <WButton color="green">green</WButton>
  <WButton color="emerald">emerald</WButton>
  <WButton color="teal">teal</WButton>
  <WButton color="cyan">cyan</WButton>
  <WButton color="sky">sky</WButton>
  <WButton color="blue">blue</WButton>
  <WButton color="indigo">indigo</WButton>
  <WButton color="violet">violet</WButton>
  <WButton color="purple">purple</WButton>
  <WButton color="fuchsia">fuchsia</WButton>
  <WButton color="pink">pink</WButton>
  <WButton color="rose">rose</WButton>

  <br /><br />

  <WButton variant="subtle" color="slate">slate</WButton>
  <WButton variant="subtle" color="gray">gray</WButton>
  <WButton variant="subtle" color="zinc">zinc</WButton>
  <WButton variant="subtle" color="neutral">neutral</WButton>
  <WButton variant="subtle" color="stone">stone</WButton>
  <WButton variant="subtle" color="red">red</WButton>
  <WButton variant="subtle" color="orange">orange</WButton>
  <WButton variant="subtle" color="amber">amber</WButton>
  <WButton variant="subtle" color="yellow">yellow</WButton>
  <WButton variant="subtle" color="lime">lime</WButton>
  <WButton variant="subtle" color="green">green</WButton>
  <WButton variant="subtle" color="emerald">emerald</WButton>
  <WButton variant="subtle" color="teal">teal</WButton>
  <WButton variant="subtle" color="cyan">cyan</WButton>
  <WButton variant="subtle" color="sky">sky</WButton>
  <WButton variant="subtle" color="blue">blue</WButton>
  <WButton variant="subtle" color="indigo">indigo</WButton>
  <WButton variant="subtle" color="violet">violet</WButton>
  <WButton variant="subtle" color="purple">purple</WButton>
  <WButton variant="subtle" color="fuchsia">fuchsia</WButton>
  <WButton variant="subtle" color="pink">pink</WButton>
  <WButton variant="subtle" color="rose">rose</WButton>

  <br /><br />

  <WButton variant="link" color="slate">slate</WButton>
  <WButton variant="link" color="gray">gray</WButton>
  <WButton variant="link" color="zinc">zinc</WButton>
  <WButton variant="link" color="neutral">neutral</WButton>
  <WButton variant="link" color="stone">stone</WButton>
  <WButton variant="link" color="red">red</WButton>
  <WButton variant="link" color="orange">orange</WButton>
  <WButton variant="link" color="amber">amber</WButton>
  <WButton variant="link" color="yellow">yellow</WButton>
  <WButton variant="link" color="lime">lime</WButton>
  <WButton variant="link" color="green">green</WButton>
  <WButton variant="link" color="emerald">emerald</WButton>
  <WButton variant="link" color="teal">teal</WButton>
  <WButton variant="link" color="cyan">cyan</WButton>
  <WButton variant="link" color="sky">sky</WButton>
  <WButton variant="link" color="blue">blue</WButton>
  <WButton variant="link" color="indigo">indigo</WButton>
  <WButton variant="link" color="violet">violet</WButton>
  <WButton variant="link" color="purple">purple</WButton>
  <WButton variant="link" color="fuchsia">fuchsia</WButton>
  <WButton variant="link" color="pink">pink</WButton>
  <WButton variant="link" color="rose">rose</WButton>
</template>
```

## 大小

```vue preview
<template>
  <WButton size="xs">默认按钮: xs</WButton>
  <WButton size="sm">默认按钮: sm</WButton>
  <WButton>默认按钮: md</WButton>
  <WButton size="lg">默认按钮: lg</WButton>
  <WButton size="xl">默认按钮: xl</WButton>
  <br /><br />
  <WButton color="primary" size="xs">主色按钮: xs</WButton>
  <WButton color="primary" size="sm">主色按钮: sm</WButton>
  <WButton color="primary">主色按钮: md</WButton>
  <WButton color="primary" size="lg">主色按钮: lg</WButton>
  <WButton color="primary" size="xl">主色按钮: xl</WButton>
  <br /><br />
  <WButton variant="subtle" color="primary" size="xs">浅色按钮: xs</WButton>
  <WButton variant="subtle" color="primary" size="sm">浅色按钮: sm</WButton>
  <WButton variant="subtle" color="primary">浅色按钮: md</WButton>
  <WButton variant="subtle" color="primary" size="lg">浅色按钮: lg</WButton>
  <WButton variant="subtle" color="primary" size="xl">浅色按钮: xl</WButton>
  <br /><br />
  <WButton variant="link" color="primary" size="xs">链接按钮: xs</WButton>
  <WButton variant="link" color="primary" size="sm">链接按钮: sm</WButton>
  <WButton variant="link" color="primary">链接按钮: md</WButton>
  <WButton variant="link" color="primary" size="lg">链接按钮: lg</WButton>
  <WButton variant="link" color="primary" size="xl">链接按钮: xl</WButton>
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
  <WButton color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton color="primary" variant="subtle">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </WButton>
  <WButton color="primary" variant="link">
    <template #icon>
      <CogIcon />
    </template>
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
</template>
```
