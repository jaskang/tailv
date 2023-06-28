import {
  cloneVNode,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { SelectorIcon } from '../Icon'
import { Popper } from '../Popper'

const props = {
  value: String,
  placeholder: String,
  disabled: Boolean,
  options: {
    type: Array as PropType<Array<{ label: string; value: any }>>,
    default: () => [],
  },
}

export type SelectProps = ExtractPropTypes<typeof props>

export type SelectPublicProps = ExtractPublicPropTypes<typeof props>

export type SelectCssVars = {
  '--t-select-ring-color': string
}

export const Select = defineComponent({
  name: 'TSelect',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
  }>,
  setup(props, { slots, emit }) {
    return () => (
      <Popper trigger="click" placement="bottom" width="full">
        {{
          default: () => (
            <button
              type="button"
              class="h-[calc(theme(spacing.9)_+_2px)] w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed sm:text-sm"
            >
              <div class="truncate"></div>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon class="scale-125" />
              </span>
            </button>
          ),
          content: () => (
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
          ),
        }}
      </Popper>
    )
  },
})
