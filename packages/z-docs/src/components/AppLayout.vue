<template>
  <div class="demo-layout">
    <Layout>
      <Aside class="demo-aside">
        <HelloWorld msg="Elenext UI" />
        <Menu mode="vertical" :current-path="route.path">
          <template v-for="menu in menus" :key="menu.title">
            <MenuItemGroup :title="menu.title">
              <MenuItem v-for="item in menu.items" :key="item" :path="`/${item}`">
                {{ item }}
              </MenuItem>
            </MenuItemGroup>
          </template>
        </Menu>
      </Aside>
      <Main>
        <div class="site-content">
          <router-view />
        </div>
      </Main>
    </Layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router'
import menus from '../menus'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
  name: 'AppLayout',
  components: {
    HelloWorld
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
  .el-menu {
    border: none;
  }
}
</style>
