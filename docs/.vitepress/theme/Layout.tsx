import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/24/solid'
import { useDark } from '@vueuse/core'
import { useData, useRoute } from 'vitepress'
import { defineComponent, provide, ref, watch } from 'vue'

import { Breadcrumb, Button, Switch } from '../../../src'
import TVContent from './components/TVContent.vue'
import TVSidebar from './components/TVSidebar.vue'
import { useSidebar } from './core/sidebar'

export default defineComponent({
  setup(_, { slots }) {
    const { page, site } = useData()

    const { isOpen: isSidebarOpen, close: closeSidebar } = useSidebar()
    const route = useRoute()
    watch(() => route.path, closeSidebar)

    const isDark = useDark()
    return () => (
      <div class="sticky min-h-screen top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-white/60 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
        <div class="mx-auto max-w-8xl">
          <div class="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
            <div class="relative flex items-center">
              <a class="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto" href="/">
                <span class="sr-only">Tailwind CSS home page</span>
              </a>

              <div class="relative ml-auto hidden items-center lg:flex">
                <nav
                  class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
                  translate="no"
                >
                  <ul class="flex space-x-8">
                    <li>
                      <a
                        href="/components/button"
                        class="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        Components
                      </a>
                    </li>
                    <li>
                      <a
                        class="hover:text-primary-500 dark:hover:text-primary-400"
                        target="_blank"
                        href="https://github.com/JasKang/tailv"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <Switch v-model:checked={isDark.value}>
                        {{
                          on: () => <MoonIcon class="text-gray-900" />,
                          off: () => <SunIcon />,
                        }}
                      </Switch>
                    </li>
                  </ul>
                </nav>
              </div>

              <Button class="-my-1 ml-auto lg:hidden" square variant="link">
                {{
                  icon: () => <MagnifyingGlassIcon class="scale-150" />,
                }}
              </Button>
              <div class="-my-1 ml-2 lg:hidden">
                <Button square variant="link">
                  {{
                    icon: () => <EllipsisVerticalIcon class="scale-150" />,
                  }}
                </Button>
              </div>
            </div>
          </div>
          <div class="flex items-center border-b border-slate-900/10 px-4 dark:border-slate-50/[0.06] lg:hidden">
            <Button square variant="link">
              {{
                icon: () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 6h14M5 12h14M5 18h14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                ),
              }}
            </Button>
            <button
              type="button"
              class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Navigation</span>
            </button>
            <Breadcrumb
              items={[{ title: () => <HomeIcon /> }, { title: 'sdfs' }, { title: 'asdfasdf' }]}
            />
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto min-h-[calc(100vh_-_62px)] max-w-8xl px-4 sm:px-6 md:px-8">
            <div class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block">
              <TVSidebar open={isSidebarOpen.value}></TVSidebar>
            </div>
            <div class="lg:pl-[19.5rem]">
              <TVContent />
            </div>
          </div>
        </div>
      </div>
    )
  },
})
