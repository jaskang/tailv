<script setup>
import { Input } from 'tailv'
</script>

# Input

## default

<div class="flex flex-wrap gap-2">
  <Input  class="w-full"/>
</div>

## status

<div class="flex flex-wrap gap-2"> 
  <Input class="w-full"/>
  <Input status="success" class="w-full"/>
  <Input status="warning" class="w-full"/>
  <Input status="error" class="w-full"/>
</div>

## prefix & suffix

<div class="flex flex-wrap gap-2"> 
  <Input prefix="prefix" class="w-full"/>
  <Input suffix="suffix" class="w-full"/>
  <Input prefix="prefix" suffix="suffix" class="w-full"/>
</div>

## disabled

<div class="flex flex-wrap gap-2"> 
    <Input disabled class="w-full"/>
    <Input disabled prefix="prefix" class="w-full"/>
</div>

## Props

| Prop     | Type                   | Default | Description                  |
| -------- | ---------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'ghost' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'    | 'md'    | Size of the button           |
| pill     | boolean                | false   | Pill style of the button     |
| square   | boolean                | false   | Square style of the button   |
| loading  | boolean                | false   | Loading state of the button  |
| disabled | boolean                | false   | Disabled state of the button |
| color    | string                 | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
