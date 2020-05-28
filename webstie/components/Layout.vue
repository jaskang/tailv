<template>
  <div class="demo-layout">
    <ElContainer direction="horizontal">
      <ElAside>
        <HelloWorld msg="Hello Elenext UI" />
        <el-menu>
          <el-menu-item-group>
            <template #title>Basic</template>
            <el-menu-item index="1" :path="{ name: 'layout' }">
              <i class="el-icon-menu"></i>
              layout
            </el-menu-item>
            <el-menu-item index="1" :path="{ name: 'container' }">
              <i class="el-icon-menu"></i>
              container
            </el-menu-item>
            <el-menu-item index="1" :path="{ name: 'icon' }">
              <i class="el-icon-menu"></i>
              icon
            </el-menu-item>
            <el-menu-item index="1" :path="{ name: 'button' }">
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
            <el-menu-item index="1" :path="{ name: 'menu' }">
              <i class="el-icon-menu"></i>
              menu
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>Others</template>
            <el-menu-item index="1" :path="{ name: 'popover' }">
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
import { defineComponent } from 'vue';
import HelloWorld from './HelloWorld.vue';
import { ElContainer, ElAside, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup } from '@/index';
export default defineComponent({
  components: {
    HelloWorld,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup
  }
});
</script>
<style lang="less">
.demo-layout {
  height: 100vh;
}
.demo-content {
  height: 100vh;
  overflow-y: auto;
}
</style>
