// https://vitepress.dev/guide/custom-theme
import './styles/index.css'
import { plugin } from 'tailv'
import type { Theme } from 'vitepress'
import DemoWrapper from './components/DemoWrapper.vue'
import Layout from './Layout.vue'
export default {
  Layout: Layout,
  enhanceApp(ctx) {
    ctx.app.component('DemoWrapper', DemoWrapper)
    // @ts-ignore
    ctx.app.use(plugin)
  },
} satisfies Theme

// /**
//  * 使用正则将 color 名转为 css 变量名
//  * @param colorName 如：slate1, slate12, gray12, green3
//  * @returns string 如：--color-slate-1, --color-slate-12, --color-gray-12, --color-green-3
//  */
// function convertColorName(colorName: string) {
//   return colorName.replace(/^([a-zA-Z]+)(\d+)$/, '--color-$1-$2')
// }
// let out = ''
// Object.keys(colors)
//   .filter(k => !k.endsWith('A') && !k.endsWith('P3') && !k.endsWith('P3A'))
//   .filter(k => k.endsWith('Dark'))
//   .forEach(k => {
//     const vals = colors[k]
//     // console.log(k, vals)
//     Object.keys(vals).forEach(v => {
//       out = out + `\n${convertColorName(v)}: ${vals[v]};`
//     })
//   })
// console.log(out)
// 'slate1' -> '--color-slate-1'
// 'slate12' -> '--color-slate-12'
// 'gray12' -> '--color-gray-12'
