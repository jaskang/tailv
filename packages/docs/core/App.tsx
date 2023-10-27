import { useState } from 'react'
import Button from '../pages/Button.mdx'
import { Anchor } from '@zonda/react'

function App() {
  const [currKey, setCurrKey] = useState('assadfas')
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block ">
        <div className="mt-12 lg:mt-8">
          <h5 className="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            Getting Started
          </h5>
          <Anchor
            value={currKey}
            onChange={key => setCurrKey(key)}
            items={[
              {
                title: 'Installation',
                key: '/docs/getting-started/installation',
              },
              {
                title: 'Core Concepts',
                key: '/docs/getting-started/core-concepts',
                children: [
                  { title: 'assadfas', key: 'assadfas' },
                  { title: 'assadfas2', key: 'assadfas2' },
                  { title: 'assadfas3', key: 'assadfas3' },
                ],
              },
              {
                title: 'Getting Started',
                key: '/docs/getting-started/getting-started',
              },
            ]}
          />
        </div>
        <div className="mt-12 lg:mt-8">
          <h5 className="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            Array
          </h5>
          <Anchor
            value={currKey}
            onChange={key => setCurrKey(key)}
            items={[
              {
                title: 'alphabetical',
                key: '/docs/array/alphabetical',
              },
              {
                title: 'boil',
                key: '/docs/array/boil',
              },
              {
                title: 'cluster',
                key: '/docs/array/cluster',
              },
              {
                title: 'counting',
                key: '/docs/array/counting',
              },
              {
                title: 'diff',
                key: '/docs/array/diff',
              },
            ]}
          />
        </div>
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
