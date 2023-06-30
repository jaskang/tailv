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
  <TSelect
    class="max-w-lg"
    :options="[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
      {
        value: 'yiminghe',
        label: 'Yiminghe',
      },
    ]"
  />
</template>
```
