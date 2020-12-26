import { App, createVNode, defineComponent } from 'vue'
import { injectCss } from '@elenext/shared'

const iconStyles = `
.el-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.143em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-icon > * {
  line-height: 1;
}
.el-icon svg {
  display: inline-block;
}
.el-icon::before {
  display: none;
}
.el-icon[tabindex] {
  cursor: pointer;
}
.el-icon-spin::before,
.el-icon-spin {
  display: inline-block;
  animation: el-icon-rotating 1s infinite linear;
}
@keyframes el-icon-rotating {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`

const injectCssId = '__elenext__icon__'

const createSvgIcon = (compName: string, className: string, svgSource: string) => {
  const Icon = defineComponent({
    name: compName,
    props: { spin: Boolean },
    setup(props) {
      injectCss(injectCssId, iconStyles, true)

      return () =>
        createVNode('i', {
          class: {
            'el-icon': true,
            [`el-icon-${className}`]: true,
            'el-icon-spin': props.spin
          },
          innerHTML: svgSource
        })
    }
  })

  Icon.install = (app: App): void => {
    app.component(compName, Icon)
  }
  return Icon
}

export default createSvgIcon
