<template>
  <div class="demo-layout">
    <ElContainer direction="horizontal">
      <ElAside class="demo-aside">
        <HelloWorld msg="Hello Elenext UI" />
        <el-menu>
          <el-menu-item-group>
            <template #title>Basic</template>
            <el-menu-item index="1" @click="push({ name: 'layout' })">
              <i class="el-icon-menu"></i>
              layout
            </el-menu-item>
            <el-menu-item index="1" @click="push({ name: 'container' })">
              <i class="el-icon-menu"></i>
              container
            </el-menu-item>
            <el-menu-item index="1" @click="push({ name: 'icon' })">
              <i class="el-icon-menu"></i>
              icon
            </el-menu-item>
            <el-menu-item index="1" @click="push({ name: 'button' })">
              <i class="el-icon-menu"></i>
              button
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Form</template>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Data</template>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Notice</template>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Navigation</template>
            <el-menu-item index="1" @click="push({ name: 'menu' })">
              <i class="el-icon-menu"></i>
              menu
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Others</template>
            <el-menu-item index="1" @click="push({ name: 'popover' })">
              <i class="el-icon-menu"></i>
              popover
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Hooks</template>
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
import HelloWorld from './HelloWorld.vue'
import { ElContainer, ElAside, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup } from 'elenext'
import { useRouter, RouteLocationRaw } from 'vue-router'
export default defineComponent({
  components: {
    HelloWorld,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup
  },
  setup() {
    const router = useRouter()
    const push = (e: RouteLocationRaw) => {
      router.push(e)
    }
    return {
      push
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
}
.demo-aside {
  border-right: solid 1px #e6e6e6;
  .el-menu {
    border: none;
  }
}
</style>
