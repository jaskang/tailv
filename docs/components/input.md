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
  <WInput />
  <WInput prefix="prefix" />
  <WInput suffix="suffix" />
  <WInput prefix="prefix" suffix="suffix" />
  <WInput>
    <template #before>before</template>
    <template #after>after</template>
  </WInput>
  <WInput>
    <template #after>after</template>
  </WInput>
  <WInput>
    <template #before>after</template>
  </WInput>
</template>
```

## 禁用

```vue preview
<template>
  <WInput disabled />
  <WInput disabled prefix="prefix" />
  <WInput disabled suffix="suffix" />
  <WInput disabled prefix="prefix" suffix="suffix" />
  <WInput disabled>
    <template #before>before</template>
    <template #after>after</template>
  </WInput>
  <WInput disabled>
    <template #after>after</template>
  </WInput>
  <WInput disabled>
    <template #before>after</template>
  </WInput>
</template>
```
