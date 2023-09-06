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
  <TButton variant="solid">solid</TButton>
  <TButton variant="soft">soft</TButton>
  <TButton variant="plain">plain</TButton>
  <TButton variant="link">link</TButton>
</template>
```

## solid

```vue preview
<template>
  <TButton variant="solid" color="primary">primary</TButton>
  <TButton variant="solid" color="success">success</TButton>
  <TButton variant="solid" color="warning">warning</TButton>
  <TButton variant="solid" color="error">error</TButton>
</template>
```

## soft

```vue preview
<template>
  <TButton variant="soft" color="primary">primary</TButton>
  <TButton variant="soft" color="success">success</TButton>
  <TButton variant="soft" color="warning">warning</TButton>
  <TButton variant="soft" color="error">error</TButton>
</template>
```

## plain

```vue preview
<template>
  <TButton variant="plain" color="primary">primary</TButton>
  <TButton variant="plain" color="success">success</TButton>
  <TButton variant="plain" color="warning">warning</TButton>
  <TButton variant="plain" color="error">error</TButton>
</template>
```

## link

```vue preview
<template>
  <TButton variant="link" color="primary">primary</TButton>
  <TButton variant="link" color="success">success</TButton>
  <TButton variant="link" color="warning">warning</TButton>
  <TButton variant="link" color="error">error</TButton>
</template>
```

## 颜色 color

**颜色别名**: 'primary' | 'success' | 'warning' | 'error'

```vue preview
<template>
  <TButton variant="solid" color="primary">primary</TButton>
  <TButton variant="solid" color="success">success</TButton>
  <TButton variant="solid" color="warning">warning</TButton>
  <TButton variant="solid" color="error">error</TButton>
</template>
```

**其他颜色** 除了颜色别名外 `color` 属性还支持 tailwindcss 所有内置颜色

```vue preview
<template>
  <TButton variant="solid" color="orange">orange</TButton>
  <TButton variant="solid" color="teal">teal</TButton>
  <TButton variant="solid" color="sky">sky</TButton>
  <TButton variant="solid" color="violet">violet</TButton>
  <TButton variant="solid" color="pink">pink</TButton>
  <TButton variant="solid" color="gray">gray</TButton>
  <TButton variant="solid" color="neutral">neutral</TButton>

  <br /><br />

  <TButton variant="soft" color="orange">orange</TButton>
  <TButton variant="soft" color="teal">teal</TButton>
  <TButton variant="soft" color="sky">sky</TButton>
  <TButton variant="soft" color="violet">violet</TButton>
  <TButton variant="soft" color="pink">pink</TButton>
  <TButton variant="soft" color="gray">gray</TButton>
  <TButton variant="soft" color="neutral">neutral</TButton>
  <br /><br />

  <TButton variant="plain" color="orange">orange</TButton>
  <TButton variant="plain" color="teal">teal</TButton>
  <TButton variant="plain" color="sky">sky</TButton>
  <TButton variant="plain" color="violet">violet</TButton>
  <TButton variant="plain" color="pink">pink</TButton>
  <TButton variant="plain" color="gray">gray</TButton>
  <TButton variant="plain" color="neutral">neutral</TButton>
</template>
```

## 大小 size

```vue preview
<template>
  <div class="flex flex-col items-center space-y-4">
    <TButton variant="solid" size="xs">size: sm</TButton>
    <TButton variant="solid" size="sm">size: sm</TButton>
    <TButton variant="solid" size="md">size: md</TButton>
    <TButton variant="solid" size="lg">size: lg</TButton>
    <TButton variant="solid" size="xl">size: xl</TButton>
  </div>
</template>
```

## rounded

```vue preview
<template>
  <TButton rounded>默认</TButton>
  <TButton variant="solid" color="primary" rounded>primary</TButton>
  <TButton variant="solid" color="success" rounded>success</TButton>
  <TButton variant="solid" color="warning" rounded>warning</TButton>
  <TButton variant="solid" color="error" rounded>error</TButton>
</template>
```

## circle

```vue preview
<template>
  <TButton variant="solid" circle>D</TButton>
  <TButton variant="solid" color="primary" circle>P</TButton>
  <TButton variant="solid" color="success" circle>S</TButton>
  <TButton variant="solid" color="warning" circle>W</TButton>
  <TButton variant="solid" color="error" circle>E</TButton>
</template>
```

## square

```vue preview
<template>
  <TButton variant="solid" square>乾</TButton>
  <TButton variant="solid" square>坤</TButton>
  <TButton variant="solid" color="primary" square>A+</TButton>
  <TButton variant="solid" color="success" square>B</TButton>
  <TButton variant="solid" color="warning" square>C</TButton>
  <TButton variant="solid" color="error" square>SSS</TButton>
</template>
```

## icon

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <TButton color="primary">
    <template #icon><CogIcon /></template>
    图标按钮
  </TButton>
  <TButton color="primary">
    <TIcon><CogIcon /></TIcon>
    未使用 slot
  </TButton>
  <br /><br />
  <TButton color="primary" variant="solid">
    <template #icon><CogIcon /></template>
    图标按钮
  </TButton>
  <TButton color="primary" variant="solid">
    <TIcon><CogIcon /></TIcon>
    未使用 slot
  </TButton>
  <br /><br />
  <TButton color="primary" variant="link">
    <template #icon><CogIcon /></template>
    图标按钮
  </TButton>
  <TButton color="primary" variant="link">
    <TIcon><CogIcon /></TIcon>
    未使用 slot
  </TButton>
</template>
```

设置 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <TButton circle>
    <template #icon><CogIcon /></template>
  </TButton>
  <TButton square>
    <template #icon><CogIcon /></template>
  </TButton>
  <TButton variant="solid" circle color="primary">
    <template #icon><HomeIcon /></template>
  </TButton>
  <TButton variant="solid" square color="primary">
    <template #icon><HomeIcon /></template>
  </TButton>
  <TButton variant="soft" circle color="success">
    <template #icon><CloudIcon /></template>
  </TButton>
  <TButton variant="soft" square color="success">
    <template #icon><CloudIcon /></template>
  </TButton>
  <TButton variant="plain" circle color="warning">
    <template #icon><BellIcon /></template>
  </TButton>
  <TButton variant="plain" square color="warning">
    <template #icon><BellIcon /></template>
  </TButton>
  <TButton variant="link" circle color="error">
    <template #icon><CubeIcon /></template>
  </TButton>
  <TButton variant="link" circle color="error">
    <TIcon><CubeIcon /></TIcon>
  </TButton>
</template>
```

## loading

使用 `loading` 为按钮设置加载状态

```vue preview
<script setup>
import { ref } from 'vue'
let timer = null

const loading = ref(false)

const onClick = () => {
  loading.value = true
  clearTimeout(timer)
  timer = setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
<template>
  <TButton :loading="loading" @click="onClick"> 加载状态 </TButton>
  <TButton variant="solid" color="primary" :loading="loading" @click="onClick"> 加载状态 </TButton>
</template>
```

## disabled

```vue preview
<template>
  <TButton disabled>default</TButton>
  <TButton variant="solid" disabled>solid</TButton>
  <TButton variant="soft" disabled>soft</TButton>
  <TButton variant="plain" disabled>plain</TButton>
  <TButton variant="outline" disabled>outline</TButton>
  <TButton variant="link" disabled>link</TButton>
  <TButton variant="solid" circle disabled>
    <template #icon>
      <HomeIcon />
    </template>
  </TButton>
</template>
```
