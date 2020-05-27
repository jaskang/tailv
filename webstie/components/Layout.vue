<template>
  <ElContainer>
    <ElAside>
      <el-menu>
        <el-menu-item index="1"><router-link :to="{ name: 'button' }">button</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{ name: 'layout' }">layout</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{ name: 'container' }">container</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{ name: 'icon' }">icon</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{ name: 'menu' }">menu</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{ name: 'popover' }">popover</router-link></el-menu-item>
      </el-menu>
    </ElAside>
    <ElMain>
      <img alt="Vue logo" src="./../assets/logo.png" />
      <HelloWorld msg="Hello Vue 3.0 + Element UI" />
      <router-view></router-view>
    </ElMain>
  </ElContainer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './HelloWorld.vue';
import { ElContainer, ElAside, ElMain, ElMenu, ElMenuItem } from '@/index';
export default defineComponent({
  components: {
    HelloWorld,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElMenuItem
  }
});
</script>
