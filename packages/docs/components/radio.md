<script setup>
import { ref } from 'vue'
import { Radio ,RadioGroup } from 'tailv'

const picked = ref('A')

</script>

# RadioGroup

<div class="">
  picked: {{ picked }}
  <RadioGroup class="mt-2 flex gap-4" v-model:value="picked"> 
    <Radio value="A">A</Radio> 
    <Radio value="B">B</Radio> 
  </RadioGroup> 
</div>

## Default

<div class="flex flex-wrap gap-2">
  <Radio value="A">checkbox</Radio>
  <Radio value="B" checked>checkbox</Radio>
</div>

## Disabled

<div class="flex flex-wrap gap-2">
  <Radio value="A" disabled checked>
    checked
  </Radio>
  <Radio value="B" disabled>unchecked</Radio>
</div>

## Props

| Prop        | Type    | Default | Description                   |
| ----------- | ------- | ------- | ----------------------------- |
| **checked** | boolean | false   | whether the checkbox checked  |
| name        | string  | -       | input name                    |
| value       | any     | -       | value for group               |
| disabled    | boolean | false   | whether the checkbox disabled |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
