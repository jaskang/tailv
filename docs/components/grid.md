<style lang="scss"> 
:where(.mdp-demo__preview) {
  h4{
    @apply text-xl font-semibold leading-12 text-slate-700;
  }
  :where(.t-row){
    background-color: #818cf81a;
    background-image: linear-gradient(135deg,#6366f180 10%,#0000 0,#0000 50%,#6366f180 0,#6366f180 60%,#0000 0,#0000);
    background-size: 7.07px 7.07px;
    @apply text-white text-sm font-bold font-mono leading-6 rounded-lg;
  }   
  :where(.t-col){
    @apply py-4 flex items-center justify-center bg-indigo-500 shadow-lg rounded-lg;
  }
}
</style>

用于控制弹性项目如何增长和收缩的实用程序。

```vue preview
<template>
  <TRow gap="1rem">
    <TCol class="w-14 bg-indigo-300">w-14</TCol>
    <TCol flex="1" class="">1</TCol>
    <TCol flex="1" class="">1</TCol>
  </TRow>
</template>
```

```vue preview
<template>
  <TRow gap="1rem">
    <TCol class="w-14 bg-indigo-300">w-14</TCol>
    <TCol flex="1" class="">1</TCol>
    <TCol flex="1" class="">1</TCol>
  </TRow>
</template>
```

## align 间距

align 值为 `start` | `end` | `center` | `baseline` | `stretch`

```vue preview
<template>
  <h4>start</h4>
  <TRow align="start" gap="1rem">
    <TCol flex="1" class="py-4">01</TCol>
    <TCol flex="1" class="py-12">02</TCol>
    <TCol flex="1" class="py-8">03</TCol>
  </TRow>
  <h4>end</h4>
  <TRow align="end" gap="1rem">
    <TCol flex="1" class="py-4">01</TCol>
    <TCol flex="1" class="py-12">02</TCol>
    <TCol flex="1" class="py-8">03</TCol>
  </TRow>
  <h4>center</h4>
  <TRow align="center" gap="1rem">
    <TCol flex="1" class="py-4">01</TCol>
    <TCol flex="1" class="py-12">02</TCol>
    <TCol flex="1" class="py-8">03</TCol>
  </TRow>
  <h4>baseline</h4>
  <TRow align="baseline" gap="1rem">
    <TCol flex="1" class="pt-2 pb-6">01</TCol>
    <TCol flex="1" class="pt-8 pb-12">02</TCol>
    <TCol flex="1" class="pt-12 pb-4">03</TCol>
  </TRow>
  <h4>stretch</h4>
  <TRow align="stretch" gap="1rem">
    <TCol flex="1" class="py-4">01</TCol>
    <TCol flex="1" class="py-12">02</TCol>
    <TCol flex="1" class="py-8">03</TCol>
  </TRow>
</template>
```

## gap 间距

gap

```vue preview
<template>
  <TRadio v-model="">1rem</TRadio>
  <TRow gap="1rem">
    <TCol flex="1">1</TCol>
    <TCol flex="1">1</TCol>
    <TCol flex="1">1</TCol>
  </TRow>
</template>
```
