<script setup lang="ts">
import { EButton, EButtonGroup, ECheckbox } from "../index";
</script>

<template>
  <EButton size="large">button</EButton>
  <EButton size="small">button</EButton>
  <EButton>button</EButton>
  <EButton type="round">button</EButton>
  <EButton disabled>button</EButton>
  <br /><br />

  <EButton color="primary" size="large">primary</EButton>
  <EButton color="primary" size="small">primary</EButton>
  <EButton color="primary">primary</EButton>
  <EButton color="primary" type="round">primary</EButton>
  <EButton color="primary" disabled>primary</EButton>
  <br /><br />
  <EButton color="success" size="large">success</EButton>
  <EButton color="success" size="small">success</EButton>
  <EButton color="success">success</EButton>
  <EButton color="success" type="round">success</EButton>
  <br /><br />
  <EButton color="warning" size="large">warning</EButton>
  <EButton color="warning" size="small">warning</EButton>
  <EButton color="warning">warning</EButton>
  <EButton color="warning" type="round">warning</EButton>
  <br /><br />
  <EButton color="error" size="large">error</EButton>
  <EButton color="error" size="small">error</EButton>
  <EButton color="error">error</EButton>
  <EButton color="error" type="round">error</EButton>
  <EButton disabled>button</EButton>
  <br /><br />
  <EButton color="primary" type="round">primary</EButton>
  <EButton color="success" type="round">success</EButton>
  <EButton color="warning" type="round">warning</EButton>
  <EButton color="error" type="round">error</EButton>
  <EButton disabled type="round">disabled</EButton>
  <br /><br />
  <EButton color="primary" type="circle">p</EButton>
  <EButton color="success" type="circle">s</EButton>
  <EButton color="warning" type="circle">w</EButton>
  <EButton color="error" type="circle">errorerror</EButton>
  <EButton disabled type="circle">d</EButton>
  <br /><br />
  <EButtonGroup>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
    <EButton>primary</EButton>
  </EButtonGroup>
  <br /><br />
  <EButtonGroup>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
    <EButton color="primary">primary</EButton>
  </EButtonGroup>
  <br /><br />
  <EButtonGroup>
    <EButton color="success" type="round">success</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="success" type="round">success</EButton>
  </EButtonGroup>
  <br /><br />
  <EButtonGroup>
    <EButton color="primary" type="round">success</EButton>
    <EButton color="success" type="round">success</EButton>
    <EButton color="warning" type="round">success</EButton>
    <EButton color="error" type="round">success</EButton>
  </EButtonGroup>
  <br /><br />
  <ECheckbox>ECheckbox</ECheckbox>
  <ECheckbox disabled>ECheckbox disabled</ECheckbox>
  <ECheckbox :checked="true" disabled>ECheckbox disabled</ECheckbox>
</template>
