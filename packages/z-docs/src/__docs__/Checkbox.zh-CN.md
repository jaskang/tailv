---
title: Checkbox
wrapperClass: md-checkbox
---

# ECheckbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

在`e-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```vue demo
<template>
  <e-checkbox v-model="checked">{{ checked }}</e-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
    }
  },
}
</script>
```

## 多个复选框，绑定到同一个数组

```vue demo
<template>
  <e-checkbox value="Jack" v-model="checkedNames">Jack</e-checkbox>
  <e-checkbox value="John" v-model="checkedNames">John</e-checkbox>
  <e-checkbox value="Mike" v-model="checkedNames">Mike</e-checkbox>
  <br />
  <span>Checked names: {{ checkedNames }}</span>
</template>
<script>
export default {
  data() {
    return {
      checkedNames: [],
    }
  },
}
</script>
```

## 禁用状态

多选框不可用状态。设置`disabled`属性即可。s

```vue demo
<template>
  <e-checkbox v-model="checked1" disabled>备选项1</e-checkbox>
  <e-checkbox v-model="checked2" disabled>备选项2</e-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: true,
    }
  },
}
</script>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

`e-checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `e-checkbox` 的 `value`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`value`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```vue demo
<template>
  <e-checkbox-group v-model="checkList">
    <e-checkbox value="A">复选框 A</e-checkbox>
    <e-checkbox value="B">复选框 B</e-checkbox>
    <e-checkbox value="C">复选框 C</e-checkbox>
    <e-checkbox value="D" disabled>复选框 D(禁用)</e-checkbox>
    <e-checkbox value="F" disabled>复选框 F(选中且禁用)</e-checkbox>
  </e-checkbox-group>
  <br />
  <span>checkList: {{ checkList }}</span>
</template>

<script>
export default {
  data() {
    return {
      checkList: ['F'],
    }
  },
}
</script>
```

## indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

```vue demo
<template>
  <e-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" disabled>
    全选
  </e-checkbox>
  <div style="margin: 15px 0;"></div>
  <e-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <e-checkbox v-for="city in cities" :value="city" :key="city">{{ city }}</e-checkbox>
  </e-checkbox-group>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
    }
  },
  methods: {
    handleCheckAllChange(val) {
      console.log(val)
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
  },
}
</script>
```

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

```vue demo
<template>
  <e-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <e-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</e-checkbox>
  </e-checkbox-group>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
    }
  },
}
</script>
```

## Checkbox Props

| 参数                 | 说明                                                                     | 类型          | 默认值 |
| -------------------- | ------------------------------------------------------------------------ | ------------- | ------ |
| modelValue / v-model | 绑定值                                                                   | array/boolean | —      |
| name                 | 原生 name 属性                                                           | string        | —      |
| label                | 显示文字,同`slot#default`                                                | string        | —      |
| value                | 选中状态的值（在`checkbox-group` 中或 `modelValue` 类型为`array`时有效） | any           | —      |
| disabled             | 是否禁用                                                                 | boolean       | false  |
| indeterminate        | 设置 indeterminate 状态，只负责样式控制                                  | boolean       | false  |

## Checkbox Events

| 事件名称 | 说明                     | 回调参数                   |
| -------- | ------------------------ | -------------------------- |
| change   | 当绑定值变化时触发的事件 | \(val: boolean\) \=\> void |

## CheckboxGroup Props

| 参数                 | 说明     | 类型    | 默认值 |
| -------------------- | -------- | ------- | ------ |
| modelValue / v-model | 绑定值   | array   | —      |
| disabled             | 是否禁用 | boolean | false  |

## CheckboxGroup Events

| 事件名称 | 说明                     | 回调参数                        |
| -------- | ------------------------ | ------------------------------- |
| change   | 当绑定值变化时触发的事件 | \(val: array\<any\>\) \=\> void |
