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
  items: {
    type: String as PropType<Color>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type SidebarProps = ExtractPropTypes<typeof props>

export type SidebarPublicProps = ExtractPublicPropTypes<typeof props>

export type SidebarCssVars = {
  '--t-btn-text-color': string
  '--t-btn-border-color': string
  '--t-btn-bg': string

  '--t-btn-text-color-hover': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg-hover': string

  '--t-btn-ring-color': string
}

export const Sidebar = defineComponent({
  name: 'TSidebar',
  props,
  emits: {} as {
    click(payload: MouseEvent): void
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    item: { data: number }
  }>,
  setup(props, { slots, emit }) {

    return () => (
      <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div class="flex items-center flex-shrink-0 px-4">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
    </div>
    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        <a v-for="item in navigation" key="item.name" href="item.href" class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
          <component is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
          <span class="flex-1">
            {{ item.name }}
          </span>
          <span v-if="item.count" :class="[item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
            {{ item.count }}
          </span>
        </a>
      </nav>
    </div>
  </div>
    )
  },
})
