---
title: Radio
wrapperClass: md-radio
---

# Radio 单选框

在一组备选项中进行单选

## 基础用法

要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 Radio `value` 属性的值。

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col>
      <e-radio v-model="value" :value="1">radio1</e-radio>
      <e-radio v-model="value" :value="2">radio2</e-radio>
    </e-col>
    <e-col> value:{{ value }} </e-col>
  </e-row>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```

## 禁用状态

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col>
      <e-radio v-model="value" :value="1" disabled>radio1</e-radio>
      <e-radio v-model="value" :value="2" disabled>radio2</e-radio>
    </e-col>
    <e-col> value:{{ value }} </e-col>
  </e-row>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```

## 单选框组

适用于在多个互斥的选项中选择的场景

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col>
      <e-radio-group v-model="radio" :disabled="disabled">
        <e-radio :value="3">备选项</e-radio>
        <e-radio :value="6">备选项</e-radio>
        <e-radio :value="9">备选项</e-radio>
      </e-radio-group>
    </e-col>
    <e-col> value:{{ radio }} </e-col>
  </e-row>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
      disabled: false
    }
  }
}
</script>
```
