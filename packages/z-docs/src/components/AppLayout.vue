<template>
  <div class="demo-layout">
    <e-layout>
      <e-header class="demo-header">
        <div class="layout-center">
          <e-row align="middle">
            <e-col :flex="1">
              <Logo />
            </e-col>
            <e-col>
              <e-menu mode="horizontal">
                <e-menu-item>
                  <e-color-picker v-model="data.primaryColor" />
                </e-menu-item>
                <e-menu-item>
                  <a href="https://github.com/JasKang/elenext" target="__blank">GitHub</a>
                </e-menu-item>
              </e-menu>
            </e-col>
          </e-row>
        </div>
      </e-header>
      <e-main>
        <div class="layout-center">
          <e-row align="top" :wrap="false">
            <e-col :flex="'200px'">
              <div style="padding-top: 40px">
                <e-menu mode="vertical" :current-path="route.path">
                  <template v-for="menu in menus" :key="menu.title">
                    <e-menu-itemGroup :title="menu.title">
                      <e-menu-item v-for="item in menu.items" :key="item" :path="`/${item.name.toLowerCase()}`">
                        {{ item.name }}
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
        </div>
      </e-main>
    </e-layout>
  </div>
</template>
<script lang="ts">
import { useBreakpoint } from 'elenext'
import { defineComponent, reactive, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import menus from '../menus'
import Logo from './Logo.vue'
import { TinyColor } from '@ctrl/tinycolor'

export default defineComponent({
  name: 'AppLayout',
  components: {
    Logo,
  },
  setup() {
    const route = useRoute()
    const screens = useBreakpoint()

    const data = reactive({
      primaryColor: '#409eff',
    })
    watchEffect(() => {
      //       --e-global-color-primary-light: #66b1ff; // #fff 20%
      // --e-global-color-primary-lighter: #a0cfff; // #fff 50%
      // --e-global-color-primary-lightest: #d9ecff; // #fff 80%
      // --e-global-color-primary-dark: #337ecc; // #000 20%
      const color = new TinyColor(data.primaryColor)
      document.body.style.setProperty('--e-global-color-primary', color.toHexString())
      document.body.style.setProperty('--e-global-color-primary-light', color.tint(20).toHexString())
      document.body.style.setProperty('--e-global-color-primary-lighter', color.tint(50).toHexString())
      document.body.style.setProperty('--e-global-color-primary-lightest', color.tint(80).toHexString())
      document.body.style.setProperty('--e-global-color-primary-dark', color.shade(20).toHexString())
    })
    return {
      screens,
      route,
      menus,
      data,
    }
  },
})
</script>
<style lang="scss">
.demo-layout {
  height: 100vh;
}
.layout-center {
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
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
