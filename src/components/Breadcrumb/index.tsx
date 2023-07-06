import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type VNode,
} from 'vue'

export type BreadcrumbItem = {
  title: string | (() => VNode[])
  path?: string
}
const props = {
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    default: () => [],
  },
}

export type BreadcrumbProps = ExtractPropTypes<typeof props>

export type BreadcrumbPublicProps = ExtractPublicPropTypes<typeof props>

export const Breadcrumb = defineComponent({
  name: 'TBreadcrumb',
  props,
  setup(props) {
    const parentPaths = computed(() => {
      if (props.items.length > 1) {
        return props.items.slice(0, props.items.length - 1)
      }
      return []
    })
    const currentPath = computed(() => {
      if (props.items.length > 0) {
        return props.items[props.items.length - 1]
      }
      return null
    })
    return () => (
      <nav class="t-breadcrumb flex">
        <ol class="flex min-w-0 whitespace-nowrap px-2 text-sm">
          {parentPaths.value.map(item => (
            <li class="flex items-center">
              <a class="text-gray-400 hover:text-gray-500" href={item.path}>
                {typeof item.title === 'function' ? item.title() : item.title}
              </a>
              <ChevronRightIcon class="mx-1 h-3 w-3 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </li>
          ))}
          {currentPath.value && (
            <li class="flex items-center ">
              <a class="truncate font-semibold text-slate-900 dark:text-slate-200">
                {typeof currentPath.value.title === 'function' ? currentPath.value.title() : currentPath.value.title}
              </a>
            </li>
          )}
        </ol>
      </nav>
    )
  },
})
