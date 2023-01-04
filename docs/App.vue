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
    <br />
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
  </div>
  <h2>链接按钮</h2>
  <div class="space-x-1">
    <EButton type="link">default</EButton>
    <EButton color="primary" type="link">primary</EButton>
    <EButton color="success" type="link">success</EButton>
    <EButton color="warning" type="link">warning</EButton>
    <EButton color="error" type="link">error</EButton>
  </div>
  <div class="space-x-1">
    <EButton color="warning" size="large">warning</EButton>
    <EButton color="warning" size="small">warning</EButton>
    <EButton color="warning">warning</EButton>
    <EButton color="warning" type="round">warning</EButton>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButton color="error" size="large">error</EButton>
    <EButton color="error" size="small">error</EButton>
    <EButton color="error">error</EButton>
    <EButton color="error" type="round">error</EButton>
    <EButton disabled>button</EButton>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButton color="primary" type="round">primary</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="warning" type="round">warning</EButton>
    <EButton color="error" type="round">error</EButton>
    <EButton disabled type="round">disabled</EButton>
    <br /><br />
  </div>
  <div class="space-x-1">
    <EButton color="primary" type="circle">p</EButton>
    <EButton color="success" type="circle">s</EButton>
    <EButton color="warning" type="circle">w</EButton>
    <EButton color="error" type="circle">errorerror</EButton>
    <EButton disabled type="circle">d</EButton>
    <br /><br />
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
  <div class="space-x-1">
    <EButton size="xs">button</EButton>
    <EButton size="sm">button</EButton>
    <EButton>button</EButton>
    <EButton size="lg">button</EButton>
    <EButton size="xl">button</EButton>
    <EButton disabled>button</EButton>
  </div>
  <br /><br />
  <div class="space-x-1">
    <EButton color="primary" size="xs">button</EButton>
    <EButton color="primary" size="sm">button</EButton>
    <EButton color="primary">button</EButton>
    <EButton color="primary" size="lg">button</EButton>
    <EButton color="primary" size="xl">button</EButton>
    <EButton color="primary" disabled>button</EButton>
    <br /><br />
  </div>
</template>
