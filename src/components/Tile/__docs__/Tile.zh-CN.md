## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-tile>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。

### 常见页面布局

```vue
<template>
  <el-tile>
    <el-tile mode="vertical" :span="18">
      <el-tile>
        <el-tile>
          <h2>Five</h2>
          <h4>Subtitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar
            felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit
            amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
          </p>
        </el-tile>
        <el-tile :span="16">
          <el-tile>
            <el-tile>
              <h2>Six</h2>
              <p>Subtitle</p>
            </el-tile>
            <el-tile>
              <h2>Seven</h2>
              <p>Subtitle</p>
            </el-tile>
          </el-tile>
          <el-tile>
            <h2>Eight</h2>
            <p>Subtitle</p>
          </el-tile>
        </el-tile>
      </el-tile>
      <el-tile>
        <el-tile span="300px">
          <h2>Nine</h2>
          <h4>Subtitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </el-tile>
        <el-tile>
          <h2>Ten</h2>
          <h4>Subtitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </el-tile>
      </el-tile>
    </el-tile>
    <el-tile>
      <h2>Eleven</h2>
      <h4>Subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis
        blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet
        vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
      </p>
      <p>
        Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat
        libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta.
        Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
      </p>
    </el-tile>
  </el-tile>
</template>
```

### Container Attributes

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
