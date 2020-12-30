---
title: Input
wrapperClass: md-input
---

### 使用方法

使用 `v-model` 给 Input 绑定一个值

```vue demo
<template>
  <e-row :gutter="[20, 20]">
    <e-col :span="24">
      <e-input v-model="value" />
      value: {{ value }}
    </e-col>
  </e-row>
</template>
<script>
export default {
  data() {
    return {
      value: '123'
    }
  }
}
</script>
```

### 清空内容

使用 `clearable` 属性即可得到一个可清空的输入框

```vue demo
<template>
  <e-input v-model="value" clearable> </e-input>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

### 带 icon 的输入框

带有图标标记输入类型

使用 `prefix` 和 `suffix`属性在 input 组件首部和尾部增加显示图标，也可以通过具名 slot 来放置图标

```vue demo
<template>
  <e-row :gutter="[20, 20]">
    <e-col :span="24">
      props: <e-input v-model="value" prefix="#"></e-input> -
      <e-input v-model="value" suffix="%"></e-input>
    </e-col>
    <e-col :span="24">
      slots:
      <e-input v-model="value">
        <template #prefix>
          <IconEnvelope />
        </template>
      </e-input>
      -
      <e-input v-model="value">
        <template #suffix>
          <IconCalendarWeek />
        </template>
      </e-input>
    </e-col>
  </e-row>
</template>
<script>
export default {
  data() {
    return {
      value: '123'
    }
  }
}
</script>
```

### 输入框组

输入框组合

```vue demo
<template>
  <e-row :gutter="[20, 20]">
    <e-col :span="24">
      <e-input-group>
        <e-input v-model="value1"></e-input>
        <e-input v-model="value2"></e-input>
        <e-input v-model="value3"></e-input>
      </e-input-group>
    </e-col>
  </e-row>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
```
