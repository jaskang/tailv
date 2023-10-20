import Button from '../pages/Button.mdx'
import { DocSidebar } from './components/DocSidebar'

function App() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block ">
        <DocSidebar
          items={[
            {
              group: 'Getting Started',
              children: [
                {
                  label: 'Installation',
                  key: '/docs/getting-started/installation',
                },
                {
                  label: 'Core Concepts',
                  key: '/docs/getting-started/core-concepts',
                },
                {
                  label: 'Getting Started',
                  key: '/docs/getting-started/getting-started',
                },
              ],
            },
            {
              group: 'Array',
              children: [
                {
                  label: 'alphabetical',
                  key: '/docs/array/alphabetical',
                },
                {
                  label: 'boil',
                  key: '/docs/array/boil',
                },
                {
                  label: 'cluster',
                  key: '/docs/array/cluster',
                },
                {
                  label: 'counting',
                  key: '/docs/array/counting',
                },
                {
                  label: 'diff',
                  key: '/docs/array/diff',
                },
              ],
            },
          ]}
        />
      </div>
      <div className="lg:pl-[19.5rem]">
        <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
          <div className="prose prose-sm flex-1">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
