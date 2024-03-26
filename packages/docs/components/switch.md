<script setup>
import { ref } from 'vue'
import { Switch } from 'tailv'

const val = ref(true)

</script>

# CheckboxGroup

## Default

<div class="flex flex-wrap gap-2">
  <div class="">
  <Switch v-model:checked="val" /> value: {{ val }}
  </div>
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
