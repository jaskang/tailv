<style lang="scss"> 

.demo {
  > .t-button{
    margin-left: 1rem;
    /* margin-top: 1rem; */
    &:first-child{
      margin-left: 0;
    }
  } 
  > br + .t-button{
    margin-left: 0 !important;
  }
}
</style>

# Button

[[toc]]

asdfsa

# Variants

```vue preview
<template>
  <TButton>default</TButton>
  <br /><br />
  <TButton color="primary" variant="outlined">outlined</TButton>
  <TButton color="primary" variant="solid">solid</TButton>
  <TButton color="primary" variant="soft">soft</TButton>
  <TButton color="primary" variant="plain">plain</TButton>
  <TButton color="primary" variant="link">link</TButton>
</template>
```

## Outlined

```vue preview
<template>
  <TButton variant="outlined" color="primary">primary</TButton>
  <TButton variant="outlined" color="success">success</TButton>
  <TButton variant="outlined" color="warning">warning</TButton>
  <TButton variant="outlined" color="error">error</TButton>
</template>
```

## Solid

```vue preview
<template>
  <TButton variant="solid" color="primary">primary</TButton>
  <TButton variant="solid" color="success">success</TButton>
  <TButton variant="solid" color="warning">warning</TButton>
  <TButton variant="solid" color="error">error</TButton>
</template>
```

## Soft

```vue preview
<template>
  <TButton variant="soft" color="primary">primary</TButton>
  <TButton variant="soft" color="success">success</TButton>
  <TButton variant="soft" color="warning">warning</TButton>
  <TButton variant="soft" color="error">error</TButton>
</template>
```

## Plain

```vue preview
<template>
  <TButton variant="plain" color="primary">primary</TButton>
  <TButton variant="plain" color="success">success</TButton>
  <TButton variant="plain" color="warning">warning</TButton>
  <TButton variant="plain" color="error">error</TButton>
</template>
```

## Link

```vue preview
<template>
  <TButton variant="link" color="primary">primary</TButton>
  <TButton variant="link" color="success">success</TButton>
  <TButton variant="link" color="warning">warning</TButton>
  <TButton variant="link" color="error">error</TButton>
</template>
```

## 禁用

```vue preview
<template>
  <TButton disabled color="primary">primary</TButton>
  <TButton disabled color="success">success</TButton>
  <TButton disabled color="warning">warning</TButton>
  <TButton disabled color="error">error</TButton>
  <TButton disabled>禁用状态</TButton>
  <TButton circle disabled>D</TButton>
  <TButton variant="link" disabled>链接按钮-禁用状态</TButton>
</template>
```

## 颜色

```vue preview
<template>
  <TButton>你测sd试好</TButton>
  <TButton color="primary">primary</TButton>
  <TButton color="success">success</TButton>
  <TButton color="warning">warning</TButton>
  <TButton color="error">error</TButton>
  <br /><br />

  <TButton variant="outlined" color="gray">gray</TButton>
  <TButton variant="outlined" color="slate">slate</TButton>
  <TButton variant="outlined" color="red">red</TButton>
  <TButton variant="outlined" color="orange">orange</TButton>
  <TButton variant="outlined" color="amber">amber</TButton>
  <TButton variant="outlined" color="yellow">yellow</TButton>
  <TButton variant="outlined" color="lime">lime</TButton>
  <TButton variant="outlined" color="green">green</TButton>
  <TButton variant="outlined" color="emerald">emerald</TButton>
  <TButton variant="outlined" color="teal">teal</TButton>
  <TButton variant="outlined" color="cyan">cyan</TButton>
  <TButton variant="outlined" color="sky">sky</TButton>
  <TButton variant="outlined" color="blue">blue</TButton>
  <TButton variant="outlined" color="indigo">indigo</TButton>
  <TButton variant="outlined" color="violet">violet</TButton>
  <TButton variant="outlined" color="purple">purple</TButton>
  <TButton variant="outlined" color="fuchsia">fuchsia</TButton>
  <TButton variant="outlined" color="pink">pink</TButton>
  <TButton variant="outlined" color="rose">rose</TButton>
  <br /><br />
  <TButton variant="solid" color="gray">gray</TButton>
  <TButton variant="solid" color="slate">slate</TButton>
  <TButton variant="solid" color="red">red</TButton>
  <TButton variant="solid" color="orange">orange</TButton>
  <TButton variant="solid" color="amber">amber</TButton>
  <TButton variant="solid" color="yellow">yellow</TButton>
  <TButton variant="solid" color="lime">lime</TButton>
  <TButton variant="solid" color="green">green</TButton>
  <TButton variant="solid" color="emerald">emerald</TButton>
  <TButton variant="solid" color="teal">teal</TButton>
  <TButton variant="solid" color="cyan">cyan</TButton>
  <TButton variant="solid" color="sky">sky</TButton>
  <TButton variant="solid" color="blue">blue</TButton>
  <TButton variant="solid" color="indigo">indigo</TButton>
  <TButton variant="solid" color="violet">violet</TButton>
  <TButton variant="solid" color="purple">purple</TButton>
  <TButton variant="solid" color="fuchsia">fuchsia</TButton>
  <TButton variant="solid" color="pink">pink</TButton>
  <TButton variant="solid" color="rose">rose</TButton>

  <br /><br />

  <TButton variant="soft" color="gray">gray</TButton>
  <TButton variant="soft" color="slate">slate</TButton>
  <TButton variant="soft" color="red">red</TButton>
  <TButton variant="soft" color="orange">orange</TButton>
  <TButton variant="soft" color="amber">amber</TButton>
  <TButton variant="soft" color="yellow">yellow</TButton>
  <TButton variant="soft" color="lime">lime</TButton>
  <TButton variant="soft" color="green">green</TButton>
  <TButton variant="soft" color="emerald">emerald</TButton>
  <TButton variant="soft" color="teal">teal</TButton>
  <TButton variant="soft" color="cyan">cyan</TButton>
  <TButton variant="soft" color="sky">sky</TButton>
  <TButton variant="soft" color="blue">blue</TButton>
  <TButton variant="soft" color="indigo">indigo</TButton>
  <TButton variant="soft" color="violet">violet</TButton>
  <TButton variant="soft" color="purple">purple</TButton>
  <TButton variant="soft" color="fuchsia">fuchsia</TButton>
  <TButton variant="soft" color="pink">pink</TButton>
  <TButton variant="soft" color="rose">rose</TButton>
  <br /><br />

  <TButton variant="plain" color="gray">gray</TButton>
  <TButton variant="plain" color="slate">slate</TButton>
  <TButton variant="plain" color="red">red</TButton>
  <TButton variant="plain" color="orange">orange</TButton>
  <TButton variant="plain" color="amber">amber</TButton>
  <TButton variant="plain" color="yellow">yellow</TButton>
  <TButton variant="plain" color="lime">lime</TButton>
  <TButton variant="plain" color="green">green</TButton>
  <TButton variant="plain" color="emerald">emerald</TButton>
  <TButton variant="plain" color="teal">teal</TButton>
  <TButton variant="plain" color="cyan">cyan</TButton>
  <TButton variant="plain" color="sky">sky</TButton>
  <TButton variant="plain" color="blue">blue</TButton>
  <TButton variant="plain" color="indigo">indigo</TButton>
  <TButton variant="plain" color="violet">violet</TButton>
  <TButton variant="plain" color="purple">purple</TButton>
  <TButton variant="plain" color="fuchsia">fuchsia</TButton>
  <TButton variant="plain" color="pink">pink</TButton>
  <TButton variant="plain" color="rose">rose</TButton>
  <br /><br />

  <TButton variant="link" color="gray">gray</TButton>
  <TButton variant="link" color="slate">slate</TButton>
  <TButton variant="link" color="red">red</TButton>
  <TButton variant="link" color="orange">orange</TButton>
  <TButton variant="link" color="amber">amber</TButton>
  <TButton variant="link" color="yellow">yellow</TButton>
  <TButton variant="link" color="lime">lime</TButton>
  <TButton variant="link" color="green">green</TButton>
  <TButton variant="link" color="emerald">emerald</TButton>
  <TButton variant="link" color="teal">teal</TButton>
  <TButton variant="link" color="cyan">cyan</TButton>
  <TButton variant="link" color="sky">sky</TButton>
  <TButton variant="link" color="blue">blue</TButton>
  <TButton variant="link" color="indigo">indigo</TButton>
  <TButton variant="link" color="violet">violet</TButton>
  <TButton variant="link" color="purple">purple</TButton>
  <TButton variant="link" color="fuchsia">fuchsia</TButton>
  <TButton variant="link" color="pink">pink</TButton>
  <TButton variant="link" color="rose">rose</TButton>
</template>
```

## 大小

```vue preview
<template>
  <TButton size="xs">默认按钮: xs</TButton>
  <TButton size="sm">默认按钮: sm</TButton>
  <TButton>默认按钮: md</TButton>
  <TButton size="lg">默认按钮: lg</TButton>
  <TButton size="xl">默认按钮: xl</TButton>
  <br /><br />
  <TButton variant="solid" color="primary" size="xs">主色按钮: xs</TButton>
  <TButton variant="solid" color="primary" size="sm">主色按钮: sm</TButton>
  <TButton variant="solid" color="primary">主色按钮: md</TButton>
  <TButton variant="solid" color="primary" size="lg">主色按钮: lg</TButton>
  <TButton variant="solid" color="primary" size="xl">主色按钮: xl</TButton>
  <br /><br />
  <TButton variant="soft" color="primary" size="xs">浅色按钮: xs</TButton>
  <TButton variant="soft" color="primary" size="sm">浅色按钮: sm</TButton>
  <TButton variant="soft" color="primary">浅色按钮: md</TButton>
  <TButton variant="soft" color="primary" size="lg">浅色按钮: lg</TButton>
  <TButton variant="soft" color="primary" size="xl">浅色按钮: xl</TButton>
  <br /><br />
  <TButton variant="plain" color="primary" size="xs">链接按钮: xs</TButton>
  <TButton variant="plain" color="primary" size="sm">链接按钮: sm</TButton>
  <TButton variant="plain" color="primary">链接按钮: md</TButton>
  <TButton variant="plain" color="primary" size="lg">链接按钮: lg</TButton>
  <TButton variant="plain" color="primary" size="xl">链接按钮: xl</TButton>
</template>
```

## 椭圆

```vue preview
<template>
  <TButton rounded>默认</TButton>
  <TButton color="primary" rounded>primary</TButton>
  <TButton color="success" rounded>success</TButton>
  <TButton color="warning" rounded>warning</TButton>
  <TButton color="error" rounded>error</TButton>
</template>
```

## 圆形

```vue preview
<template>
  <TButton circle>D</TButton>
  <TButton color="primary" circle>P</TButton>
  <TButton color="success" circle>S</TButton>
  <TButton color="warning" circle>W</TButton>
  <TButton color="error" circle>E</TButton>
</template>
```

## 方形

```vue preview
<template>
  <TButton square>乾</TButton>
  <TButton square>坤</TButton>
  <TButton color="primary" square>A+</TButton>
  <TButton color="success" square>B</TButton>
  <TButton color="warning" square>C</TButton>
  <TButton color="error" square>SSS</TButton>
</template>
```

## 图标

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <TButton color="primary">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </TButton>
  <TButton color="primary" variant="solid">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </TButton>
  <TButton color="primary" variant="link">
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </TButton>
</template>
```

`variant` 设置为 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <TButton circle>
    <template #icon>
      <CogIcon />
    </template>
  </TButton>
  <TButton square>
    <template #icon>
      <CogIcon />
    </template>
  </TButton>
  <TButton circle color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </TButton>
  <TButton square color="primary">
    <template #icon>
      <HomeIcon />
    </template>
  </TButton>
  <TButton circle color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </TButton>
  <TButton square color="success">
    <template #icon>
      <CloudIcon />
    </template>
  </TButton>
  <TButton circle color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </TButton>
  <TButton square color="warning">
    <template #icon>
      <BellIcon />
    </template>
  </TButton>
  <TButton circle color="error">
    <template #icon>
      <CubeIcon />
    </template>
  </TButton>
  <TButton circle color="error">
    <TIcon><CubeIcon /></TIcon>
  </TButton>
</template>
```

## 图标

使用 `loading` 为按钮设置加载状态

```vue preview
<template>
  <TButton color="primary" loading>
    <template #icon>
      <CogIcon />
    </template>
    图标按钮
  </TButton>
</template>
```
