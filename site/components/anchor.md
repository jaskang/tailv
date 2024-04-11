# Anchor

```vue demo
<template>
  <div class="not-prose">
    <Anchor
      :items="[
        { title: 'A', key: 'A' },
        {
          title: 'B',
          key: 'B',
          children: [
            { title: 'B-1', key: 'B-1' },
            { title: 'B-2', key: 'B-2' },
            { title: 'B-3', key: 'B-3' },
          ],
        },
        { title: 'C', key: 'C' },
      ]"
    />
  </div>
</template>
```
