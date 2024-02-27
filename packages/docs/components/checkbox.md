<script setup>
import { ref } from 'vue'
import { Checkbox ,CheckboxGroup } from 'tailv'

const checkList = ref(['A'])

</script>

# CheckboxGroup

<div class="">
  checkList: {{ checkList }}
  <CheckboxGroup class="mt-2 flex gap-4" v-model:value="checkList"> 
    <Checkbox value="A">A</Checkbox> 
    <Checkbox value="B">B</Checkbox>
  </CheckboxGroup> 
</div>

## Default

<div class="flex flex-wrap gap-2">
  <Checkbox value="A">checkbox</Checkbox>
  <Checkbox value="B" checked>checkbox</Checkbox>
</div>

## Disabled

<div class="flex flex-wrap gap-2">
  <Checkbox value="A" disabled checked>
    checked
  </Checkbox>
  <Checkbox value="B" disabled>unchecked</Checkbox>
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
