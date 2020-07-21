<template>
  <div class="demo-layout">
    <ElContainer direction="horizontal">
      <ElAside class="demo-aside">
        <!-- <HelloWorld msg="Hello Elenext UI" /> -->
        <el-menu>
          <el-menu-item-group v-for="menu in menus" :key="menu.title">
            <template #title>{{ menu.title }}</template>
            <el-menu-item v-for="item in menu.items" @click="push({ name: item })">
              {{ item }}
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </ElAside>
      <ElMain class="demo-content">
        <router-view></router-view>
      </ElMain>
    </ElContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, RouteLocationRaw } from 'vue-router'
import menus from '../menus'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const router = useRouter()
    const push = (e: RouteLocationRaw) => {
      router.push(e)
    }
    return {
      push,
      menus
    }
  }
})
</script>
<style lang="less">
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
