<template>
  <div class="demo-layout">
    <e-layout>
      <e-header class="demo-header">
        <e-row align="middle">
          <e-col flex="1">
            <Logo />
          </e-col>
          <e-col>
            <e-menu mode="horizontal">
              <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item>
                <a href="https://github.com/JasKang/elenext" target="__blank">GitHub</a>
              </e-menu-item>
            </e-menu>
          </e-col>
        </e-row>
      </e-header>
      <e-layout>
        <e-aside class="demo-aside">
          <div style="padding-top: 40px" />
          <e-menu mode="vertical" :current-path="route.path">
            <template v-for="menu in menus" :key="menu.title">
              <e-menu-itemGroup :title="menu.title">
                <e-menu-item v-for="item in menu.items" :key="item" :path="`/${item}`">
                  {{ item }}
                </e-menu-item>
              </e-menu-itemGroup>
            </template>
          </e-menu>
        </e-aside>
        <e-main>
          <div class="site-content">
            <router-view />
          </div>
        </e-main>
      </e-layout>
    </e-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router'
import menus from '../menus'
import Logo from './Logo.vue'
export default defineComponent({
  name: 'AppLayout',
  components: {
    Logo
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    watchEffect(() => {
      console.log(route.path)
    })
    const push = (e: RouteLocationRaw) => {
      router.push(e)
    }
    return {
      push,
      route,
      menus
    }
  }
})
</script>
<style lang="scss">
.demo-layout {
  height: 100vh;
}
.demo-content {
  height: 100vh;
  overflow-y: auto;
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
    }
    td,
    th {
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      &:first-child {
        padding-left: 10px;
      }
    }
  }
}
.demo-aside {
  border-right: solid 1px #e6e6e6;
}
.demo-header {
  border-bottom: solid 1px #e6e6e6;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
