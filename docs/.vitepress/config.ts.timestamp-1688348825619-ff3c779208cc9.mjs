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
          { link: "/components/icon", text: "Icon \u56FE\u6807" }
        ],
        text: "\u57FA\u7840\u7EC4\u4EF6"
      },
      {
        items: [{ link: "/components/flex", text: "flex" }],
        text: "\u5E03\u5C40"
      },
      {
        items: [
          { link: "/components/popper", text: "Popper" },
          { link: "/components/tooltip", text: "Tooltip" },
          { link: "/components/popover", text: "Popover" }
        ],
        text: "\u53CD\u9988"
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
    plugins: [
      Inspect(),
      vueJsx(),
      MarkdownPreview({
        component: "CodePreview"
      })
    ],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYXNrYW5nL2dpdGh1Yi90YWlsdi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IE1hcmtkb3duUHJldmlldyBmcm9tICd2aXRlLXBsdWdpbi1tYXJrZG93bi1wcmV2aWV3J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjogJ1ZpdGUgJiBWdWUgcG93ZXJlZCBzdGF0aWMgc2l0ZSBnZW5lcmF0b3IuJyxcbiAgbGFuZzogJ3poLUNOJyxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgZm9vdGVyOiB7XG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjItcHJlc2VudCBqYXNrYW5nJyxcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcbiAgICB9LFxuICAgIG5hdjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmVNYXRjaDogJy9jb21wb25lbnRzLycsXG4gICAgICAgIGxpbms6ICcvY29tcG9uZW50cy9idXR0b24nLFxuICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvYnV0dG9uJywgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnIH0sXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvaWNvbicsIHRleHQ6ICdJY29uIFx1NTZGRVx1NjgwNycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1N0VDNFx1NEVGNicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpdGVtczogW3sgbGluazogJy9jb21wb25lbnRzL2ZsZXgnLCB0ZXh0OiAnZmxleCcgfV0sXG4gICAgICAgIHRleHQ6ICdcdTVFMDNcdTVDNDAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9wb3BwZXInLCB0ZXh0OiAnUG9wcGVyJyB9LFxuICAgICAgICAgIHsgbGluazogJy9jb21wb25lbnRzL3Rvb2x0aXAnLCB0ZXh0OiAnVG9vbHRpcCcgfSxcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9wb3BvdmVyJywgdGV4dDogJ1BvcG92ZXInIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRleHQ6ICdcdTUzQ0RcdTk5ODgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9zd2l0Y2gnLCB0ZXh0OiAnU3dpdGNoIFx1OEY5M1x1NTE2NVx1Njg0NicgfSxcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9pbnB1dCcsIHRleHQ6ICdJbnB1dCBcdThGOTNcdTUxNjVcdTY4NDYnIH0sXG4gICAgICAgICAgeyBsaW5rOiAnL2NvbXBvbmVudHMvY2hlY2tib3gnLCB0ZXh0OiAnQ2hlY2tib3ggXHU1OTFBXHU5MDA5XHU2ODQ2JyB9LFxuICAgICAgICAgIHsgbGluazogJy9jb21wb25lbnRzL3JhZGlvJywgdGV4dDogJ1JhZGlvIFx1NTM1NVx1OTAwOVx1Njg0NicgfSxcbiAgICAgICAgICB7IGxpbms6ICcvY29tcG9uZW50cy9zZWxlY3QnLCB0ZXh0OiAnU2VsZWN0IFx1OTAwOVx1NjJFOVx1Njg0NicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGV4dDogJ1x1ODg2OFx1NTM1NVx1OEY5M1x1NTE2NScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHRpdGxlOiAnRWxlbmV4dCcsXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBJbnNwZWN0KCksXG4gICAgICB2dWVKc3goKSxcbiAgICAgIE1hcmtkb3duUHJldmlldyh7XG4gICAgICAgIGNvbXBvbmVudDogJ0NvZGVQcmV2aWV3JyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogODAwMCxcbiAgICB9LFxuICAgIHNzcjogeyBub0V4dGVybmFsOiBbJ3ZpdGUtcGx1Z2luLW1hcmtkb3duLXByZXZpZXcnXSB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxxQkFBcUI7QUFFdlUsT0FBTyxZQUFZO0FBQ25CLE9BQU8sYUFBYTtBQUNwQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLG9CQUFvQjtBQUw0SixJQUFNLDJDQUEyQztBQU8xTyxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxRQUFRO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0g7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxzQkFBWTtBQUFBLFVBQ2hELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxvQkFBVTtBQUFBLFFBQzlDO0FBQUEsUUFDQSxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sT0FBTyxDQUFDO0FBQUEsUUFDbEQsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sU0FBUztBQUFBLFVBQzdDLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxVQUFVO0FBQUEsVUFDL0MsRUFBRSxNQUFNLHVCQUF1QixNQUFNLFVBQVU7QUFBQSxRQUNqRDtBQUFBLFFBQ0EsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sNEJBQWE7QUFBQSxVQUNqRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMkJBQVk7QUFBQSxVQUMvQyxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sOEJBQWU7QUFBQSxVQUNyRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMkJBQVk7QUFBQSxVQUMvQyxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sNEJBQWE7QUFBQSxRQUNuRDtBQUFBLFFBQ0EsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxhQUFhLHdDQUFlLENBQUM7QUFBQSxNQUMxRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxLQUFLLEVBQUUsWUFBWSxDQUFDLDhCQUE4QixFQUFFO0FBQUEsRUFDdEQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
