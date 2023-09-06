# Tooltip

## placement 位置

```vue preview
<template>
  <span>方位</span>
  <div class="flex justify-center">
    <div class="grid grid-cols-5 gap-2">
      <div></div>
      <ZTooltip placement="top-start">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>top-start</template>
      </ZTooltip>
      <ZTooltip placement="top">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>top</template>
      </ZTooltip>
      <ZTooltip placement="top-end">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>top-end</template>
      </ZTooltip>
      <div></div>
      <ZTooltip placement="left-start">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>left-start</template>
      </ZTooltip>
      <div></div>
      <div></div>
      <div></div>
      <ZTooltip placement="right-start">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>right-start</template>
      </ZTooltip>
      <ZTooltip placement="left">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>left</template>
      </ZTooltip>
      <div></div>
      <div></div>
      <div></div>
      <ZTooltip placement="right">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>right</template>
      </ZTooltip>
      <ZTooltip placement="left-end">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>left-end</template>
      </ZTooltip>
      <div></div>
      <div></div>
      <div></div>
      <ZTooltip placement="right-end">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>right-end</template>
      </ZTooltip>
      <div></div>
      <ZTooltip placement="bottom-start">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>bottom-start</template>
      </ZTooltip>
      <ZTooltip placement="bottom">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>bottom</template>
      </ZTooltip>
      <ZTooltip placement="bottom-end">
        <ZButton><div class="text-sm/4">tooltip</div></ZButton>
        <template #content>bottom-end</template>
      </ZTooltip>
      <div></div>
    </div>
  </div>
</template>
```
