<style lang="scss">
.mdp-demo__preview {
  > .t-input:not(:first-child){
    margin-top: 1rem;
  }
}
</style>

# Input

```vue preview
<template>
  <TSelect />
  <TSelect prefix="prefix" />
  <TSelect suffix="suffix" />
  <TSelect prefix="prefix" suffix="suffix" />
  <TSelect>
    <template #prefix>before</template>
    <template #suffix>after</template>
  </TSelect>
  <TSelect>
    <template #prefix>
      <TIcon><BellIcon /></TIcon>
    </template>
  </TSelect>
  <TSelect>
    <template #suffix>
      <TIcon><BellIcon /></TIcon>
    </template>
  </TSelect>
</template>
```

## 禁用

```vue preview
<template>
  <TSelect disabled />
  <TSelect disabled prefix="prefix" />
  <TSelect disabled suffix="suffix" />
  <TSelect disabled prefix="prefix" suffix="suffix" />
  <TSelect disabled>
    <template #before>before</template>
    <template #after>after</template>
  </TSelect>
  <TSelect disabled>
    <template #after>after</template>
  </TSelect>
  <TSelect disabled>
    <template #before>after</template>
  </TSelect>
</template>
```

# TSelectGroup

```vue preview
<template>
  <TSelectGroup>
    <TSelect prefix="prefix" />
    <TSelect prefix="prefix" suffix="suffix" />
    <TSelect suffix="suffix" />
  </TSelectGroup>
</template>
```
