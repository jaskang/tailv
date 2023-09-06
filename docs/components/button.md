<style lang="scss"> 

.demo {
  > .z-button{
    margin-left: 1rem;
    /* margin-top: 1rem; */
    &:first-child{
      margin-left: 0;
    }
  } 
  > br + .z-button{
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
  <ZButton>default</ZButton>
  <ZButton variant="solid">solid</ZButton>
  <ZButton variant="soft">soft</ZButton>
  <ZButton variant="plain">plain</ZButton>
  <ZButton variant="link">link</ZButton>
</template>
```

## solid

```vue preview
<template>
  <ZButton variant="solid" color="primary">primary</ZButton>
  <ZButton variant="solid" color="success">success</ZButton>
  <ZButton variant="solid" color="warning">warning</ZButton>
  <ZButton variant="solid" color="error">error</ZButton>
</template>
```

## soft

```vue preview
<template>
  <ZButton variant="soft" color="primary">primary</ZButton>
  <ZButton variant="soft" color="success">success</ZButton>
  <ZButton variant="soft" color="warning">warning</ZButton>
  <ZButton variant="soft" color="error">error</ZButton>
</template>
```

## plain

```vue preview
<template>
  <ZButton variant="plain" color="primary">primary</ZButton>
  <ZButton variant="plain" color="success">success</ZButton>
  <ZButton variant="plain" color="warning">warning</ZButton>
  <ZButton variant="plain" color="error">error</ZButton>
</template>
```

## link

```vue preview
<template>
  <ZButton variant="link" color="primary">primary</ZButton>
  <ZButton variant="link" color="success">success</ZButton>
  <ZButton variant="link" color="warning">warning</ZButton>
  <ZButton variant="link" color="error">error</ZButton>
</template>
```

## 颜色 color

**颜色别名**: 'primary' | 'success' | 'warning' | 'error'

```vue preview
<template>
  <ZButton variant="solid" color="primary">primary</ZButton>
  <ZButton variant="solid" color="success">success</ZButton>
  <ZButton variant="solid" color="warning">warning</ZButton>
  <ZButton variant="solid" color="error">error</ZButton>
</template>
```

**其他颜色** 除了颜色别名外 `color` 属性还支持 tailwindcss 所有内置颜色

```vue preview
<template>
  <ZButton variant="solid" color="orange">orange</ZButton>
  <ZButton variant="solid" color="teal">teal</ZButton>
  <ZButton variant="solid" color="sky">sky</ZButton>
  <ZButton variant="solid" color="violet">violet</ZButton>
  <ZButton variant="solid" color="pink">pink</ZButton>
  <ZButton variant="solid" color="gray">gray</ZButton>
  <ZButton variant="solid" color="neutral">neutral</ZButton>

  <br /><br />

  <ZButton variant="soft" color="orange">orange</ZButton>
  <ZButton variant="soft" color="teal">teal</ZButton>
  <ZButton variant="soft" color="sky">sky</ZButton>
  <ZButton variant="soft" color="violet">violet</ZButton>
  <ZButton variant="soft" color="pink">pink</ZButton>
  <ZButton variant="soft" color="gray">gray</ZButton>
  <ZButton variant="soft" color="neutral">neutral</ZButton>
  <br /><br />

  <ZButton variant="plain" color="orange">orange</ZButton>
  <ZButton variant="plain" color="teal">teal</ZButton>
  <ZButton variant="plain" color="sky">sky</ZButton>
  <ZButton variant="plain" color="violet">violet</ZButton>
  <ZButton variant="plain" color="pink">pink</ZButton>
  <ZButton variant="plain" color="gray">gray</ZButton>
  <ZButton variant="plain" color="neutral">neutral</ZButton>
</template>
```

## 大小 size

```vue preview
<template>
  <div class="flex flex-col items-center space-y-4">
    <ZButton variant="solid" size="xs">size: sm</ZButton>
    <ZButton variant="solid" size="sm">size: sm</ZButton>
    <ZButton variant="solid" size="md">size: md</ZButton>
    <ZButton variant="solid" size="lg">size: lg</ZButton>
    <ZButton variant="solid" size="xl">size: xl</ZButton>
  </div>
</template>
```

## rounded

```vue preview
<template>
  <ZButton rounded>默认</ZButton>
  <ZButton variant="solid" color="primary" rounded>primary</ZButton>
  <ZButton variant="solid" color="success" rounded>success</ZButton>
  <ZButton variant="solid" color="warning" rounded>warning</ZButton>
  <ZButton variant="solid" color="error" rounded>error</ZButton>
</template>
```

## circle

```vue preview
<template>
  <ZButton variant="solid" circle>D</ZButton>
  <ZButton variant="solid" color="primary" circle>P</ZButton>
  <ZButton variant="solid" color="success" circle>S</ZButton>
  <ZButton variant="solid" color="warning" circle>W</ZButton>
  <ZButton variant="solid" color="error" circle>E</ZButton>
</template>
```

## square

```vue preview
<template>
  <ZButton variant="solid" square>乾</ZButton>
  <ZButton variant="solid" square>坤</ZButton>
  <ZButton variant="solid" color="primary" square>A+</ZButton>
  <ZButton variant="solid" color="success" square>B</ZButton>
  <ZButton variant="solid" color="warning" square>C</ZButton>
  <ZButton variant="solid" color="error" square>SSS</ZButton>
</template>
```

## icon

使用 `icon` slot 为按钮设置图标

```vue preview
<template>
  <ZButton color="primary">
    <template #icon><CogIcon /></template>
    图标按钮
  </ZButton>
  <ZButton color="primary">
    <ZIcon><CogIcon /></ZIcon>
    未使用 slot
  </ZButton>
  <br /><br />
  <ZButton color="primary" variant="solid">
    <template #icon><CogIcon /></template>
    图标按钮
  </ZButton>
  <ZButton color="primary" variant="solid">
    <ZIcon><CogIcon /></ZIcon>
    未使用 slot
  </ZButton>
  <br /><br />
  <ZButton color="primary" variant="link">
    <template #icon><CogIcon /></template>
    图标按钮
  </ZButton>
  <ZButton color="primary" variant="link">
    <ZIcon><CogIcon /></ZIcon>
    未使用 slot
  </ZButton>
</template>
```

设置 `circle` 或 `square` 可使图标按钮保持 1:1 比例, 常用于独立的图标按钮

```vue preview
<template>
  <ZButton circle>
    <template #icon><CogIcon /></template>
  </ZButton>
  <ZButton square>
    <template #icon><CogIcon /></template>
  </ZButton>
  <ZButton variant="solid" circle color="primary">
    <template #icon><HomeIcon /></template>
  </ZButton>
  <ZButton variant="solid" square color="primary">
    <template #icon><HomeIcon /></template>
  </ZButton>
  <ZButton variant="soft" circle color="success">
    <template #icon><CloudIcon /></template>
  </ZButton>
  <ZButton variant="soft" square color="success">
    <template #icon><CloudIcon /></template>
  </ZButton>
  <ZButton variant="plain" circle color="warning">
    <template #icon><BellIcon /></template>
  </ZButton>
  <ZButton variant="plain" square color="warning">
    <template #icon><BellIcon /></template>
  </ZButton>
  <ZButton variant="link" circle color="error">
    <template #icon><CubeIcon /></template>
  </ZButton>
  <ZButton variant="link" circle color="error">
    <ZIcon><CubeIcon /></ZIcon>
  </ZButton>
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
  <ZButton :loading="loading" @click="onClick"> 加载状态 </ZButton>
  <ZButton variant="solid" color="primary" :loading="loading" @click="onClick"> 加载状态 </ZButton>
</template>
```

## disabled

```vue preview
<template>
  <ZButton disabled>default</ZButton>
  <ZButton variant="solid" disabled>solid</ZButton>
  <ZButton variant="soft" disabled>soft</ZButton>
  <ZButton variant="plain" disabled>plain</ZButton>
  <ZButton variant="outline" disabled>outline</ZButton>
  <ZButton variant="link" disabled>link</ZButton>
  <ZButton variant="solid" circle disabled>
    <template #icon>
      <HomeIcon />
    </template>
  </ZButton>
</template>
```
