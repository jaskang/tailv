<template>
  <div class="demo-el-container">
    <h1>ElContainer</h1>
    <Preview title="常见页面布局">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>

      <el-container direction="horizontal">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>

      <el-container direction="horizontal">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container direction="horizontal">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
      <template #template>
        {{`
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container direction="horizontal">
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container direction="horizontal">
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
        `}}
      </template>
    </Preview>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Preview from '../components/Preview.vue';
import { ElContainer, ElAside, ElFooter, ElHeader, ElMain } from '@/index';
export default defineComponent({
  components: {
    Preview,
    ElContainer,
    ElAside,
    ElFooter,
    ElHeader,
    ElMain
  }
});
</script>

<style lang="less">
.demo-el-container {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
