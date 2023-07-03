<template>
  <h2>颜色</h2>
  <div class="space-x-1">
    <TButton>默认</TButton>
    <TButton color="primary">primary</TButton>
    <TButton color="success">success</TButton>
    <TButton color="warning">warning</TButton>
    <TButton color="error">error</TButton>
    <TButton disabled>默认</TButton>
    <TButton color="primary" disabled>primary</TButton>
    <br />
  </div>
  <h2>大小</h2>
  <div class="space-x-1">
    <TButton size="xs">button xs</TButton>
    <TButton size="sm">button sm</TButton>
    <TButton>button</TButton>
    <TButton size="lg">button lg</TButton>
    <TButton size="xl">button xl</TButton>
    <TButton color="primary" size="xs">button xs</TButton>
    <TButton color="primary" size="sm">button sm</TButton>
    <TButton color="primary">button</TButton>
    <TButton color="primary" size="lg">button lg</TButton>
    <TButton color="primary" size="xl">button xl</TButton>
  </div>
  <h2>圆角</h2>
  <div class="space-x-1">
    <TButton type="round">默认</TButton>
    <TButton color="primary" type="round">primary</TButton>
    <TButton color="success" type="round">success</TButton>
    <TButton color="warning" type="round">warning</TButton>
    <TButton color="error" type="round">error</TButton>
  </div>
  <h2>圆形</h2>
  <div class="space-x-1">
    <TButton size="xs" type="circle">D</TButton>
    <TButton size="xs" color="primary" type="circle">P</TButton>
    <TButton size="xs" color="success" type="circle">S</TButton>
    <TButton size="xs" color="warning" type="circle">W</TButton>
    <TButton size="xs" color="error" type="circle">E</TButton>
    <TButton size="sm" type="circle">D</TButton>
    <TButton size="sm" color="primary" type="circle">P</TButton>
    <TButton size="sm" color="success" type="circle">S</TButton>
    <TButton size="sm" color="warning" type="circle">W</TButton>
    <TButton size="sm" color="error" type="circle">E</TButton>
    <TButton type="circle">D</TButton>
    <TButton color="primary" type="circle">P</TButton>
    <TButton color="success" type="circle">S</TButton>
    <TButton color="warning" type="circle">W</TButton>
    <TButton color="error" type="circle">E</TButton>
    <TButton size="lg" type="circle">D</TButton>
    <TButton size="lg" color="primary" type="circle">P</TButton>
    <TButton size="lg" color="success" type="circle">S</TButton>
    <TButton size="lg" color="warning" type="circle">W</TButton>
    <TButton size="lg" color="error" type="circle">E</TButton>
    <TButton size="xl" type="circle">D</TButton>
    <TButton size="xl" color="primary" type="circle">P</TButton>
    <TButton size="xl" color="success" type="circle">S</TButton>
    <TButton size="xl" color="warning" type="circle">W</TButton>
    <TButton size="xl" color="error" type="circle">E</TButton>
    <TButton size="lg" color="primary" type="circle" disabled>P</TButton>
  </div>
  <h2>链接按钮</h2>
  <div class="space-x-1">
    <TButton type="link">default</TButton>
    <TButton color="primary" type="link">primary</TButton>
    <TButton color="success" type="link">success</TButton>
    <TButton color="warning" type="link">warning</TButton>
    <TButton color="error" type="link">error</TButton>
    <TButton color="primary" type="link" disabled>primary</TButton>
  </div>
  <div class="space-x-1">
    <TButtonGroup>
      <TButton>primary</TButton>
      <TButton>primary</TButton>
      <TButton>primary</TButton>
      <TButton>primary</TButton>
    </TButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <TButtonGroup>
      <TButton color="primary">primary</TButton>
      <TButton color="primary">primary</TButton>
      <TButton color="primary">primary</TButton>
      <TButton color="primary">primary</TButton>
    </TButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <TButtonGroup>
      <TButton color="success" type="round">success</TButton>
      <TButton color="success" type="round">success</TButton>
      <TButton color="success" type="round">success</TButton>
      <TButton color="success" type="round">success</TButton>
    </TButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <TButtonGroup>
      <TButton color="primary" type="round">success</TButton>
      <TButton color="success" type="round">success</TButton>
      <TButton color="warning" type="round">success</TButton>
      <TButton color="error" type="round">success</TButton>
    </TButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <TCheckbox>TCheckbox</TCheckbox>
    <TCheckbox disabled>TCheckbox disabled</TCheckbox>
    <TCheckbox checked disabled>TCheckbox disabled</TCheckbox>
    <br /><br />
  </div>
  <div class="space-x-1">
    <TRadio name="radio">TRadio</TRadio>
    <TRadio name="radio">TRadio</TRadio>
    <TRadio name="radio">TRadio</TRadio>
    <TRadio name="radio" disabled>TRadio disabled</TRadio>
    <TRadio name="radio" checked disabled>TRadio disabled</TRadio>
    <br /><br />
  </div>
</template>
