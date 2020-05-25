<template>
  <ElContainer>
    <ElAside>
      <router-link :to="{ name: 'button' }">button</router-link><br />
      <router-link :to="{ name: 'layout' }">layout</router-link><br />
      <router-link :to="{ name: 'container' }">container</router-link><br />
      <router-link :to="{ name: 'icon' }">icon</router-link><br />
      <router-link :to="{ name: 'menu' }">menu</router-link><br />
      <router-link :to="{ name: 'popover' }">popover</router-link><br />
      <router-link :to="{ name: 'popper' }">popper</router-link><br />
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
import { ElContainer, ElAside, ElMain } from '@/index';
export default defineComponent({
  components: {
    HelloWorld,
    ElContainer,
    ElAside,
    ElMain
  }
});
</script>
