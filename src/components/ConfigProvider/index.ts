import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  provide,
  reactive,
  ref,
  renderSlot,
  type SlotsType,
  type VNode,
} from 'vue'

import { type Theme } from '@/theme'

import { type Config, configProviderKey, useConfig } from './useConfig'

export { useConfig }

const props = {
  dark: Boolean,
  theme: {
    type: Object as PropType<Theme>,
  },
}

export type ConfigProviderProps = ExtractPropTypes<typeof props>

export type ConfigProviderPublicProps = ExtractPublicPropTypes<typeof props>

export const ConfigProvider = defineComponent({
  name: 'TConfigProvider',
  props,
  setup(props, { slots, emit }) {
    const config = useConfig()

    const context = computed(() => {
      return {
        dark: props.dark || config.value.dark,
        theme: { ...config.value.theme, ...props.theme },
      } as Config
    })

    provide(configProviderKey, context)

    return () => renderSlot(slots, 'default', { config: context.value })
  },
})
