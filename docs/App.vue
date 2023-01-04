<script setup lang="ts">
import { EButton, EButtonGroup, ECheckbox, ERadio } from "../src/index";
</script>

<template>
  <h2>颜色</h2>
  <div class="space-x-1">
    <EButton>默认</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="success">success</EButton>
    <EButton color="warning">warning</EButton>
    <EButton color="error">error</EButton>
    <EButton disabled>默认</EButton>
    <EButton color="primary" disabled>primary</EButton>
    <br />
  </div>
  <h2>大小</h2>
  <div class="space-x-1">
    <EButton size="xs">button xs</EButton>
    <EButton size="sm">button sm</EButton>
    <EButton>button</EButton>
    <EButton size="lg">button lg</EButton>
    <EButton size="xl">button xl</EButton>
    <EButton color="primary" size="xs">button xs</EButton>
    <EButton color="primary" size="sm">button sm</EButton>
    <EButton color="primary">button</EButton>
    <EButton color="primary" size="lg">button lg</EButton>
    <EButton color="primary" size="xl">button xl</EButton>
  </div>
  <h2>圆角</h2>
  <div class="space-x-1">
    <EButton type="round">默认</EButton>
    <EButton color="primary" type="round">primary</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="warning" type="round">warning</EButton>
    <EButton color="error" type="round">error</EButton>
  </div>
  <h2>圆形</h2>
  <div class="space-x-1">
    <EButton size="xs" type="circle">D</EButton>
    <EButton size="xs" color="primary" type="circle">P</EButton>
    <EButton size="xs" color="success" type="circle">S</EButton>
    <EButton size="xs" color="warning" type="circle">W</EButton>
    <EButton size="xs" color="error" type="circle">E</EButton>
    <EButton size="sm" type="circle">D</EButton>
    <EButton size="sm" color="primary" type="circle">P</EButton>
    <EButton size="sm" color="success" type="circle">S</EButton>
    <EButton size="sm" color="warning" type="circle">W</EButton>
    <EButton size="sm" color="error" type="circle">E</EButton>
    <EButton type="circle">D</EButton>
    <EButton color="primary" type="circle">P</EButton>
    <EButton color="success" type="circle">S</EButton>
    <EButton color="warning" type="circle">W</EButton>
    <EButton color="error" type="circle">E</EButton>
    <EButton size="lg" type="circle">D</EButton>
    <EButton size="lg" color="primary" type="circle">P</EButton>
    <EButton size="lg" color="success" type="circle">S</EButton>
    <EButton size="lg" color="warning" type="circle">W</EButton>
    <EButton size="lg" color="error" type="circle">E</EButton>
    <EButton size="xl" type="circle">D</EButton>
    <EButton size="xl" color="primary" type="circle">P</EButton>
    <EButton size="xl" color="success" type="circle">S</EButton>
    <EButton size="xl" color="warning" type="circle">W</EButton>
    <EButton size="xl" color="error" type="circle">E</EButton>
    <EButton size="lg" color="primary" type="circle" disabled>P</EButton>
  </div>
  <h2>链接按钮</h2>
  <div class="space-x-1">
    <EButton type="link">default</EButton>
    <EButton color="primary" type="link">primary</EButton>
    <EButton color="success" type="link">success</EButton>
    <EButton color="warning" type="link">warning</EButton>
    <EButton color="error" type="link">error</EButton>
    <EButton color="primary" type="link" disabled>primary</EButton>
  </div>
  <div class="space-x-1">
    <EButtonGroup>
      <EButton>primary</EButton>
      <EButton>primary</EButton>
      <EButton>primary</EButton>
      <EButton>primary</EButton>
    </EButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButtonGroup>
      <EButton color="primary">primary</EButton>
      <EButton color="primary">primary</EButton>
      <EButton color="primary">primary</EButton>
      <EButton color="primary">primary</EButton>
    </EButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButtonGroup>
      <EButton color="success" type="round">success</EButton>
      <EButton color="success" type="round">success</EButton>
      <EButton color="success" type="round">success</EButton>
      <EButton color="success" type="round">success</EButton>
    </EButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButtonGroup>
      <EButton color="primary" type="round">success</EButton>
      <EButton color="success" type="round">success</EButton>
      <EButton color="warning" type="round">success</EButton>
      <EButton color="error" type="round">success</EButton>
    </EButtonGroup>
    <br /><br />
  </div>
  <div class="space-x-1">
    <ECheckbox>ECheckbox</ECheckbox>
    <ECheckbox disabled>ECheckbox disabled</ECheckbox>
    <ECheckbox :checked="true" disabled>ECheckbox disabled</ECheckbox>
    <br /><br />
  </div>
  <div class="space-x-1">
    <ERadio name="radio">ERadio</ERadio>
    <ERadio name="radio">ERadio</ERadio>
    <ERadio name="radio">ERadio</ERadio>
    <ERadio name="radio" disabled>ERadio disabled</ERadio>
    <ERadio name="radio" :checked="true" disabled>ERadio disabled</ERadio>
    <br /><br />
  </div>
  
</template>
