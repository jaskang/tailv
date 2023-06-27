// docs/.vitepress/config.ts
import { fileURLToPath } from "node:url";
import vueJsx from "file:///Users/jaskang/github/tailv/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Inspect from "file:///Users/jaskang/github/tailv/node_modules/.pnpm/vite-plugin-inspect@0.7.29_vite@4.3.9/node_modules/vite-plugin-inspect/dist/index.mjs";
import MarkdownPreview from "file:///Users/jaskang/github/tailv/node_modules/.pnpm/vite-plugin-markdown-preview@1.0.4/node_modules/vite-plugin-markdown-preview/dist/index.js";
import { defineConfig } from "file:///Users/jaskang/github/tailv/node_modules/.pnpm/vitepress@1.0.0-beta.3_@types+node@20.3.1_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/jaskang/github/tailv/docs/.vitepress/config.ts";
var config_default = defineConfig({
  description: "Vite & Vue powered static site generator.",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    footer: {
      copyright: "Copyright \xA9 2022-present jaskang",
      message: "Released under the MIT License."
    },
    nav: [
      {
        activeMatch: "/components/",
        link: "/components/button",
        text: "\u7EC4\u4EF6"
      }
    ],
    sidebar: [
      {
        items: [
          { link: "/components/button", text: "Button \u6309\u94AE" },
          { link: "/components/icon", text: "Icon \u56FE\u6807" },
          { link: "/components/popper", text: "Popper" }
        ],
        text: "\u57FA\u7840\u7EC4\u4EF6"
      },
      {
        items: [{ link: "/components/flex", text: "flex" }],
        text: "\u5E03\u5C40"
      },
      {
        items: [
          { link: "/components/switch", text: "Switch \u8F93\u5165\u6846" },
          { link: "/components/input", text: "Input \u8F93\u5165\u6846" },
          { link: "/components/checkbox", text: "Checkbox \u591A\u9009\u6846" },
          { link: "/components/radio", text: "Radio \u5355\u9009\u6846" },
          { link: "/components/select", text: "Select \u9009\u62E9\u6846" }
        ],
        text: "\u8868\u5355\u8F93\u5165"
      }
    ]
  },
  title: "Elenext",
  vite: {
    plugins: [Inspect(), vueJsx(), MarkdownPreview()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", __vite_injected_original_import_meta_url))
      }
    },
    server: {
      port: 8e3
    },
    ssr: { noExternal: ["vite-plugin-markdown-preview"] }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IE1hcmtkb3duUHJldmlldyBmcm9tICd2aXRlLXBsdWdpbi1tYXJrZG93bi1wcmV2aWV3J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjogJ1ZpdGUgJiBWdWUgcG93ZXJlZCBzdGF0aWMgc2l0ZSBnZW5lcmF0b3IuJyxcbiAgbGFuZzogJ3poLUNOJyxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgZm9vdGVyOiB7XG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjItcHJlc2VudCBqYXNrYW5nJyxcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcbiAgICB9LFxuICAgIG5hdjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmVNYXRjaDogJy9jb21wb25lbnRzLycsXG4gICAgICAgIGxpbms6ICcvY29tcG9uZW50cy9idXR0b24nLFxuICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvYnV0dG9uJywgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnIH0sXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvaWNvbicsIHRleHQ6ICdJY29uIFx1NTZGRVx1NjgwNycgfSxcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9wb3BwZXInLCB0ZXh0OiAnUG9wcGVyJyB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW1zOiBbeyBsaW5rOiAnL2NvbXBvbmVudHMvZmxleCcsIHRleHQ6ICdmbGV4JyB9XSxcbiAgICAgICAgdGV4dDogJ1x1NUUwM1x1NUM0MCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgbGluazogJy9jb21wb25lbnRzL3N3aXRjaCcsIHRleHQ6ICdTd2l0Y2ggXHU4RjkzXHU1MTY1XHU2ODQ2JyB9LFxuICAgICAgICAgIHsgbGluazogJy9jb21wb25lbnRzL2lucHV0JywgdGV4dDogJ0lucHV0IFx1OEY5M1x1NTE2NVx1Njg0NicgfSxcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9jaGVja2JveCcsIHRleHQ6ICdDaGVja2JveCBcdTU5MUFcdTkwMDlcdTY4NDYnIH0sXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvcmFkaW8nLCB0ZXh0OiAnUmFkaW8gXHU1MzU1XHU5MDA5XHU2ODQ2JyB9LFxuICAgICAgICAgIHsgbGluazogJy9jb21wb25lbnRzL3NlbGVjdCcsIHRleHQ6ICdTZWxlY3QgXHU5MDA5XHU2MkU5XHU2ODQ2JyB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXh0OiAnXHU4ODY4XHU1MzU1XHU4RjkzXHU1MTY1JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgdGl0bGU6ICdFbGVuZXh0JyxcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFtJbnNwZWN0KCksIHZ1ZUpzeCgpLCBNYXJrZG93blByZXZpZXcoKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogODAwMCxcbiAgICB9LFxuICAgIHNzcjogeyBub0V4dGVybmFsOiBbJ3ZpdGUtcGx1Z2luLW1hcmtkb3duLXByZXZpZXcnXSB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxxQkFBcUI7QUFFdlUsT0FBTyxZQUFZO0FBQ25CLE9BQU8sYUFBYTtBQUNwQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLG9CQUFvQjtBQUw0SixJQUFNLDJDQUEyQztBQU8xTyxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxRQUFRO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0g7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxzQkFBWTtBQUFBLFVBQ2hELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxvQkFBVTtBQUFBLFVBQzVDLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxTQUFTO0FBQUEsUUFDL0M7QUFBQSxRQUNBLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTyxDQUFDLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxPQUFPLENBQUM7QUFBQSxRQUNsRCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSw0QkFBYTtBQUFBLFVBQ2pELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwyQkFBWTtBQUFBLFVBQy9DLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSw4QkFBZTtBQUFBLFVBQ3JELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwyQkFBWTtBQUFBLFVBQy9DLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSw0QkFBYTtBQUFBLFFBQ25EO0FBQUEsUUFDQSxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsSUFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLElBQ2hELFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksYUFBYSx3Q0FBZSxDQUFDO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsS0FBSyxFQUFFLFlBQVksQ0FBQyw4QkFBOEIsRUFBRTtBQUFBLEVBQ3REO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
