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
  <ZSelect
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
