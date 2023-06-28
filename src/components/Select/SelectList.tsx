import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useTheme } from '@/theme'

const props = {
  value: null,
  checked: Boolean,
}

export type SlectListProps = ExtractPropTypes<typeof props>

export type SlectListPublicProps = ExtractPublicPropTypes<typeof props>

export type SlectListCssVars = {
  '--t-btn-text-color': string
  '--t-btn-border-color': string
  '--t-btn-bg': string

  '--t-btn-text-color-hover': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg-hover': string

  '--t-btn-ring-color': string
}

export const SlectList = defineComponent({
  name: 'TSlectList',
  props,
  slots: Object as SlotsType<{
    default: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const { colors } = useTheme()

    const { cssVars, cls } = useStyle(() => {
      return {
        ...props,
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <ul
        class="w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
        tabindex="-1"
      >
        <li class="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" role="option">
          <span class="block truncate font-normal"> Wade Cooper </span>

          <span class="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    )
  },
})
