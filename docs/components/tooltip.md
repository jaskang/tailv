# Tooltip

## placement 位置

```vue preview
<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-5 gap-2">
      <div></div>
      <TTooltip placement="top-start">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>top-start</template>
      </TTooltip>
      <TTooltip placement="top">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>top</template>
      </TTooltip>
      <TTooltip placement="top-end">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>top-end</template>
      </TTooltip>
      <div></div>
      <TTooltip placement="left-start">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>left-start</template>
      </TTooltip>
      <div></div>
      <div></div>
      <div></div>
      <TTooltip placement="right-start">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>right-start</template>
      </TTooltip>
      <TTooltip placement="left">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>left</template>
      </TTooltip>
      <div></div>
      <div></div>
      <div></div>
      <TTooltip placement="right">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>right</template>
      </TTooltip>
      <TTooltip placement="left-end">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>left-end</template>
      </TTooltip>
      <div></div>
      <div></div>
      <div></div>
      <TTooltip placement="right-end">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>right-end</template>
      </TTooltip>
      <div></div>
      <TTooltip placement="bottom-start">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>bottom-start</template>
      </TTooltip>
      <TTooltip placement="bottom">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>bottom</template>
      </TTooltip>
      <TTooltip placement="bottom-end">
        <TButton size="xl"><div class="text-sm/4">tooltip</div></TButton>
        <template #content>bottom-end</template>
      </TTooltip>
      <div></div>
    </div>
  </div>
</template>
```
