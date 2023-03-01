<style lang="scss">
.mdp-demo__preview {
  > .e-input:not(:first-child){
    margin-top: 1rem;
  }
}
</style>

# Input

```vue preview
<template>
  <EInput />
  <EInput prefix="prefix" />
  <EInput suffix="suffix" />
  <EInput prefix="prefix" suffix="suffix" />
  <EInput>
    <template #before>before</template>
    <template #after>after</template>
  </EInput>
  <EInput>
    <template #after>after</template>
  </EInput>
  <EInput>
    <template #before>after</template>
  </EInput>
</template>
```

## 禁用

```vue preview
<template>
  <EInput disabled />
  <EInput disabled prefix="prefix" />
  <EInput disabled suffix="suffix" />
  <EInput disabled prefix="prefix" suffix="suffix" />
  <EInput disabled>
    <template #before>before</template>
    <template #after>after</template>
  </EInput>
  <EInput disabled>
    <template #after>after</template>
  </EInput>
  <EInput disabled>
    <template #before>after</template>
  </EInput>
</template>
```
