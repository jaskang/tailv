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
  <TInput />
  <TInput prefix="prefix" />
  <TInput suffix="suffix" />
  <TInput prefix="prefix" suffix="suffix" />
  <TInput>
    <template #prefix>before</template>
    <template #suffix>after</template>
  </TInput>
  <TInput>
    <template #prefix>
      <TIcon><BellIcon /></TIcon>
    </template>
  </TInput>
  <TInput>
    <template #suffix>
      <TIcon><BellIcon /></TIcon>
    </template>
  </TInput>
</template>
```

## 禁用

```vue preview
<template>
  <TInput disabled />
  <TInput disabled prefix="prefix" />
  <TInput disabled suffix="suffix" />
  <TInput disabled prefix="prefix" suffix="suffix" />
  <TInput disabled>
    <template #before>before</template>
    <template #after>after</template>
  </TInput>
  <TInput disabled>
    <template #after>after</template>
  </TInput>
  <TInput disabled>
    <template #before>after</template>
  </TInput>
</template>
```

# TInputGroup

```vue preview
<template>
  <TInputGroup>
    <TInput prefix="prefix" />
    <TInput prefix="prefix" suffix="suffix" />
    <TInput suffix="suffix" />
  </TInputGroup>
</template>
```
