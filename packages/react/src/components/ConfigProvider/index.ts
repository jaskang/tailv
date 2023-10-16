import {
  type ComponentObjectPropsOptions,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  provide,
  renderSlot,
} from 'vue'

import { type Config, ConfigProviderKey } from '@/config'

const props = {
  theme: {},
} satisfies ComponentObjectPropsOptions

export type ConfigProviderProps = ExtractPropTypes<typeof props>

export type ConfigProviderPublicProps = ExtractPublicPropTypes<typeof props>

export const ConfigProvider = defineComponent({
  name: 'ZConfigProvider',
  props,
  setup(props, { slots }) {
    const context = computed<Config>(() => {
      return {
        theme: {},
      }
    })
    provide(ConfigProviderKey, context)
    return () => renderSlot(slots, 'default')
  },
})
