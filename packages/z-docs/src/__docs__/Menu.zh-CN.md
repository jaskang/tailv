---
title: Menu
wrapperClass: md-menu
---

# Menu 菜单

Menu 通过了三种不同的菜单展现形式，通过 `mode` 属性来指定你需要的展现形式

`mode`: 'horizontal' | 'vertical' | 'popper' , 默认为 `horizontal`

## 横向菜单

`mode`: 'horizontal'

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col :flex="1">
      <e-menu>
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
    <e-col :flex="1">
      <e-menu
        mode="horizontal"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        active-background-color="#434a50"
      >
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
  </e-row>
</template>
```

## 纵向菜单

`mode`: 'vertical'

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col flex="250px">
      <e-menu
        unique-opened
        mode="vertical"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        active-background-color="#434a50"
      >
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三导航三导航三导航三导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
    <e-col flex="250px">
      <e-menu unique-opened mode="vertical">
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三导航三导航三导航三导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
  </e-row>
</template>
```

## 弹出式菜单

`mode`: 'popper'

```vue demo
<template>
  <e-row :gutter="[40, 0]">
    <e-col flex="250px">
      <e-menu
        unique-opened
        mode="popper"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        active-background-color="#434a50"
      >
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三导航三导航三导航三导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
    <e-col flex="250px">
      <e-menu unique-opened mode="popper">
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三导航三导航三导航三导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-col>
  </e-row>
</template>
```
