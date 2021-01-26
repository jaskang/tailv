import { App, defineComponent, provide, reactive } from 'vue'
import { VpTypes } from '../utils/vptypes'

const EConfigProvider_IJK = 'EConfigProvider'

export const EConfigProvider = defineComponent({
  name: '',
  props: { theme: VpTypes.object() },
  setup(props, { slots }) {
    const config = reactive({
      theme: props.theme,
    })
    provide(EConfigProvider_IJK, config)
    return slots.defalut?.()
  },
})

EConfigProvider.install = (app: App): void => {
  app.component(EConfigProvider.name, EConfigProvider)
}
