import { FC } from 'react'

interface ComparisonTableSectionProps {
  t: (key: string) => string
}

const ComparisonTableSection: FC<ComparisonTableSectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-4xl text-center'>
      <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>
        {t('landing.comparison.section.title')}
      </h2>
      <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
        {t('landing.comparison.section.subtitle')}
      </p>
    </div>
    <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400'>
      {t('landing.comparison.section.description')}
    </p>
    <div className='mt-16 flow-root'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 dark:ring-gray-700 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300 dark:divide-gray-700'>
              <thead className='bg-gray-50 dark:bg-gray-800'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6'
                  >
                    {t('landing.comparison.feature')}
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    {t('landing.comparison.competitor')}
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'
                  >
                    {t('landing.comparison.ourSolution')}
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900'>
                <tr>
                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6'>
                    {t('landing.comparison.features.setup')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.competitor.setup')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.ourSolution.setup')}
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6'>
                    {t('landing.comparison.features.typescript')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.competitor.typescript')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.ourSolution.typescript')}
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6'>
                    {t('landing.comparison.features.i18n')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.competitor.i18n')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.ourSolution.i18n')}
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6'>
                    {t('landing.comparison.features.theme')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.competitor.theme')}
                  </td>
                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                    {t('landing.comparison.ourSolution.theme')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ComparisonTableSection 