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
import { defineComponent } from 'vue'

import Preview from '../components/Preview.vue'
import { ElContainer, ElAside, ElFooter, ElHeader, ElMain } from 'elenext'
export default defineComponent({
  components: {
    Preview,
    ElContainer,
    ElAside,
    ElFooter,
    ElHeader,
    ElMain
  }
})
</script>

<style lang="less">
.demo-el-container {
}
</style>
