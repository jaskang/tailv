<style lang="scss"> 

.mdp-demo__preview,.dark {
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

## Variants

```vue preview
<template>
  <TButton>default</TButton>
  <TButton variant="filled">filled</TButton>
  <TButton variant="light">light</TButton>
  <TButton variant="outline">outline</TButton>
  <TButton variant="link">link</TButton>
  <br /><br />
  <TButton color="primary">default</TButton>
  <TButton color="primary" variant="filled">filled</TButton>
  <TButton color="primary" variant="light">light</TButton>
  <TButton color="primary" variant="outline">outline</TButton>
  <TButton color="primary" variant="link">link</TButton>
</template>
```

## darkMode

```vue preview
<template>
  <div class="dark bg-slate-900">
    <TButton>default</TButton>
    <TButton variant="filled">filled</TButton>
    <TButton variant="light">light</TButton>
    <TButton variant="outline">outline</TButton>
    <TButton variant="link">link</TButton>
    <br /><br />
    <TButton color="primary">default</TButton>
    <TButton color="primary" variant="filled">filled</TButton>
    <TButton color="primary" variant="light">light</TButton>
    <TButton color="primary" variant="outline">outline</TButton>
    <TButton color="primary" variant="link">link</TButton>
  </div>
</template>
```

## 链接

```vue preview
<template>
  <TButton variant="link">链接按钮</TButton>
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

  <TButton variant="outline" color="slate">slate</TButton>
  <TButton variant="outline" color="red">red</TButton>
  <TButton variant="outline" color="orange">orange</TButton>
  <TButton variant="outline" color="amber">amber</TButton>
  <TButton variant="outline" color="yellow">yellow</TButton>
  <TButton variant="outline" color="lime">lime</TButton>
  <TButton variant="outline" color="green">green</TButton>
  <TButton variant="outline" color="emerald">emerald</TButton>
  <TButton variant="outline" color="teal">teal</TButton>
  <TButton variant="outline" color="cyan">cyan</TButton>
  <TButton variant="outline" color="sky">sky</TButton>
  <TButton variant="outline" color="blue">blue</TButton>
  <TButton variant="outline" color="indigo">indigo</TButton>
  <TButton variant="outline" color="violet">violet</TButton>
  <TButton variant="outline" color="purple">purple</TButton>
  <TButton variant="outline" color="fuchsia">fuchsia</TButton>
  <TButton variant="outline" color="pink">pink</TButton>
  <TButton variant="outline" color="rose">rose</TButton>
  <br /><br />
  <TButton color="slate">slate</TButton>
  <TButton color="red">red</TButton>
  <TButton color="orange">orange</TButton>
  <TButton color="amber">amber</TButton>
  <TButton color="yellow">yellow</TButton>
  <TButton color="lime">lime</TButton>
  <TButton color="green">green</TButton>
  <TButton color="emerald">emerald</TButton>
  <TButton color="teal">teal</TButton>
  <TButton color="cyan">cyan</TButton>
  <TButton color="sky">sky</TButton>
  <TButton color="blue">blue</TButton>
  <TButton color="indigo">indigo</TButton>
  <TButton color="violet">violet</TButton>
  <TButton color="purple">purple</TButton>
  <TButton color="fuchsia">fuchsia</TButton>
  <TButton color="pink">pink</TButton>
  <TButton color="rose">rose</TButton>

  <br /><br />

  <TButton variant="light" color="slate">slate</TButton>
  <TButton variant="light" color="red">red</TButton>
  <TButton variant="light" color="orange">orange</TButton>
  <TButton variant="light" color="amber">amber</TButton>
  <TButton variant="light" color="yellow">yellow</TButton>
  <TButton variant="light" color="lime">lime</TButton>
  <TButton variant="light" color="green">green</TButton>
  <TButton variant="light" color="emerald">emerald</TButton>
  <TButton variant="light" color="teal">teal</TButton>
  <TButton variant="light" color="cyan">cyan</TButton>
  <TButton variant="light" color="sky">sky</TButton>
  <TButton variant="light" color="blue">blue</TButton>
  <TButton variant="light" color="indigo">indigo</TButton>
  <TButton variant="light" color="violet">violet</TButton>
  <TButton variant="light" color="purple">purple</TButton>
  <TButton variant="light" color="fuchsia">fuchsia</TButton>
  <TButton variant="light" color="pink">pink</TButton>
  <TButton variant="light" color="rose">rose</TButton>
  <br /><br />

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
  <TButton color="primary" size="xs">主色按钮: xs</TButton>
  <TButton color="primary" size="sm">主色按钮: sm</TButton>
  <TButton color="primary">主色按钮: md</TButton>
  <TButton color="primary" size="lg">主色按钮: lg</TButton>
  <TButton color="primary" size="xl">主色按钮: xl</TButton>
  <br /><br />
  <TButton variant="light" color="primary" size="xs">浅色按钮: xs</TButton>
  <TButton variant="light" color="primary" size="sm">浅色按钮: sm</TButton>
  <TButton variant="light" color="primary">浅色按钮: md</TButton>
  <TButton variant="light" color="primary" size="lg">浅色按钮: lg</TButton>
  <TButton variant="light" color="primary" size="xl">浅色按钮: xl</TButton>
  <br /><br />
  <TButton variant="link" color="primary" size="xs">链接按钮: xs</TButton>
  <TButton variant="link" color="primary" size="sm">链接按钮: sm</TButton>
  <TButton variant="link" color="primary">链接按钮: md</TButton>
  <TButton variant="link" color="primary" size="lg">链接按钮: lg</TButton>
  <TButton variant="link" color="primary" size="xl">链接按钮: xl</TButton>
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
  <TButton color="primary" variant="subtle">
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
