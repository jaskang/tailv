<template>
  <div class="demo-layout">
    <e-layout>
      <e-header class="demo-header">
        <e-row>
          <e-col :flex="screens.xl ? 1 : 0"></e-col>
          <e-col :flex="screens.xl ? '1200px' : 1">
            <e-row align="middle">
              <e-col :flex="1">
                <Logo />
              </e-col>
              <e-col>
                <e-menu mode="horizontal">
                  <e-menu-item>
                    <a href="https://github.com/JasKang/elenext" target="__blank">GitHub</a>
                  </e-menu-item>
                </e-menu>
              </e-col>
            </e-row>
          </e-col>
          <e-col :flex="screens.xl ? 1 : 0"></e-col>
        </e-row>
      </e-header>
      <e-main>
        <e-row>
          <e-col :flex="screens.xl ? 1 : 0"></e-col>
          <e-col :flex="screens.xl ? '1200px' : 1">
            <e-row align="top" :wrap="false">
              <e-col :flex="'200px'">
                <div style="padding-top: 40px">
                  <e-menu mode="vertical" :current-path="route.path">
                    <template v-for="menu in menus" :key="menu.title">
                      <e-menu-itemGroup :title="menu.title">
                        <e-menu-item v-for="item in menu.items" :key="item" :path="`/${item}`">
                          {{ item }}
                        </e-menu-item>
                      </e-menu-itemGroup>
                    </template>
                  </e-menu>
                </div>
              </e-col>
              <e-col :flex="1">
                <div class="site-content">
                  <router-view />
                </div>
              </e-col>
            </e-row>
          </e-col>
          <e-col :flex="screens.xl ? 1 : 0"></e-col>
        </e-row>
      </e-main>
    </e-layout>
  </div>
</template>
<script lang="ts">
import { useBreakpoint } from 'elenext'
import { defineComponent, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import menus from '../menus'
import Logo from './Logo.vue'
export default defineComponent({
  name: 'AppLayout',
  components: {
    Logo
  },
  setup() {
    const route = useRoute()
    const screens = useBreakpoint()
    watchEffect(() => {
      console.log(route.path)
    })
    return {
      screens,
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
.site-content {
  width: 100%;
  padding: 20px;
  // max-width: 900px;
  margin: 0 auto;
}

.demo-aside {
  border-right: solid 1px #e6e6e6;
}
.demo-header {
  border-bottom: solid 1px #e6e6e6;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
