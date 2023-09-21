<style>
.mdp-demo__preview {
  > .z-input:not(:first-child){
    margin-top: 1rem;
  }
}
</style>

# Input

```vue preview
<template>
  <ZInput prefix="prefix" suffix="suffix">
    <template #dropdown>
      <ZButton>button</ZButton>
    </template>
  </ZInput>
  <ZInput />
  <ZInput prefix="prefix" />
  <ZInput suffix="suffix" />
  <ZInput prefix="prefix" suffix="suffix" />
  <ZInput>
    <template #prefix>before</template>
    <template #suffix>after</template>
  </ZInput>
  <ZInput>
    <template #prefix>
      <ZIcon><BellIcon /></ZIcon>
    </template>
  </ZInput>
  <ZInput>
    <template #suffix>
      <ZIcon><BellIcon /></ZIcon>
    </template>
  </ZInput>
</template>
```

## 禁用

```vue preview
<template>
  <ZInput disabled />
  <ZInput disabled prefix="prefix" />
  <ZInput disabled suffix="suffix" />
  <ZInput disabled prefix="prefix" suffix="suffix" />
  <ZInput disabled>
    <template #before>before</template>
    <template #after>after</template>
  </ZInput>
  <ZInput disabled>
    <template #after>after</template>
  </ZInput>
  <ZInput disabled>
    <template #before>after</template>
  </ZInput>
</template>
```

# TInputGroup

```vue preview
<template>
  <ZInputGroup>
    <ZInput prefix="prefix" />
    <ZInput prefix="prefix" suffix="suffix" />
    <ZInput suffix="suffix" />
  </ZInputGroup>
</template>
```
