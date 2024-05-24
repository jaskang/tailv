# Select

## default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TSelect
      class="w-60"
      placeholder="选择框"
      :options="[
        { value: 1, label: 'Wade Cooper' },
        { value: 2, label: 'Arlene Mccoy' },
        { value: 3, label: 'Devon Webb' },
        { value: 4, label: 'Tom Cook' },
        { value: 5, label: 'Tanya Fox' },
        { value: 6, label: 'Hellen Schmvaluet' },
        { value: 7, label: 'Caroline Schultz' },
        { value: 8, label: 'Mason Heaney' },
        { value: 9, label: 'Claudie Smitham' },
        { value: 10, label: 'Emil Schaefer' },
      ]"
    />
    <TSelect
      class="w-60"
      placeholder="选择框"
      :options="[
        { value: 1, label: 'Wade Cooper' },
        { value: 2, label: 'Arlene Mccoy' },
        { value: 3, label: 'Devon Webb' },
      ]"
    />
  </div>
</template>
```

## default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TSelect
      class="w-60"
      placeholder="选择框"
      value="2"
      disabled
      :options="[
        { value: '1', label: 'Wade Cooper' },
        { value: '2', label: 'Arlene Mccoy' },
        { value: '3', label: 'Devon Webb' },
      ]"
    />
  </div>
</template>
```

## template

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TSelect
      class="w-60"
      placeholder="选择框"
      value="2"
      :options="[
        { value: '1', label: 'Wade Cooper', src: 'https://i.pravatar.cc/150?u=1' },
        { value: '2', label: 'Arlene Mccoy', src: 'https://i.pravatar.cc/150?u=2' },
        { value: '3', label: 'Devon Webb', src: 'https://i.pravatar.cc/150?u=3' },
      ]"
    >
      <template #item="{ item }">
        <div class="flex flex-1 items-center gap-1 p-1">
          <Avatar rounded border size="sm" :src="item.src" />
          <span>
            {{ item.label }}
          </span>
        </div>
      </template>
    </TSelect>
  </div>
</template>
```
