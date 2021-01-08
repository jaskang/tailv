---
title: ESelect
wrapperClass: md-select
---

# ESelect

选择器

## 基础用法

```vue demo
<template>
  <e-select
    :options="[
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ]"
  ></e-select>
</template>
```

## 多选选择框

设置属性 `multiple` 使 `Select` 组件支持多选

```vue demo
<template>
  <e-select
    multiple
    :options="[
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ]"
  ></e-select>
</template>
```

## 自定义模板

`ESelectOption` 支持 `slot#default` 使用自定义模板
并且可以使用 v-slot="{ selected, multiple }" 获取 `selected` 和 `multiple` 两个状态

```vue demo
<template>
  <e-select multiple>
    <e-select-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value">
      <template #="{ selected, multiple }">
        label:{{ item.label }}-value:{{ item.value }}-selected:{{ selected }}
      </template>
    </e-select-option>
  </e-select>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
        { label: 'label4', value: 'value4' }
      ]
    })
    return {
      state
    }
  }
}
</script>
```

## 独立选择框

`ESelectBox` 组件可独立使用, 以支持在无需 `input` 输入框的场景

```vue demo
<template>
  <e-row :gutter="[20, 0]">
    <e-col>
      <e-select-box style="width: 150px;">
        <e-select-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value">
        </e-select-option>
      </e-select-box>
    </e-col>
    <e-col>
      <e-select-box multiple style="width: 150px;">
        <e-select-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value">
        </e-select-option>
      </e-select-box>
    </e-col>
  </e-row>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
        { label: 'label4', value: 'value4' }
      ]
    })
    return {
      state
    }
  }
}
</script>
```

## ESelect Props

| 参数               | 说明       | 类型            | 默认值 |
| ------------------ | ---------- | --------------- | ------ |
| v-model/modelValue | 选中值     | string/string[] | -      |
| options            | 可选项     |                 | []     |
| multiple           | 是否多选   | boolean         | false  |
| filterable         | 是否可筛选 | boolean         | false  |

## ESelectBox Props

| 参数               | 说明     | 类型                          | 默认值 |
| ------------------ | -------- | ----------------------------- | ------ |
| v-model/modelValue | 选中值   | string/string[]               | -      |
| options            | 可选项   | {label:string,value:string}[] | []     |
| multiple           | 是否多选 | boolean                       | false  |

## ESelectOption Props

| 参数  | 说明     | 类型          | 默认值 |
| ----- | -------- | ------------- | ------ |
| label | 选项标题 | string        | -      |
| value | 选项值   | number/string | []     |

## ESelectOption Slots

| 参数    | 说明     | props                                  | 默认值 |
| ------- | -------- | -------------------------------------- | ------ |
| default | 选项标题 | { selected:boolean, multiple:boolean } |        |
