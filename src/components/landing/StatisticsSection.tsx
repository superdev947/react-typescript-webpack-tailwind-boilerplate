import { FC } from 'react'

interface StatisticsSectionProps {
  t: (key: string) => string
}

const StatisticsSection: FC<StatisticsSectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-2xl lg:max-w-none'>
      <div className='grid grid-cols-1 gap-y-8 gap-x-8 text-center lg:grid-cols-4 lg:gap-y-0'>
        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
          <dt className='text-base leading-7 text-gray-600 dark:text-gray-400'>
            {t('landing.stats.developers.title')}
          </dt>
          <dd className='order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            {t('landing.stats.developers.value')}
          </dd>
        </div>
        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
          <dt className='text-base leading-7 text-gray-600 dark:text-gray-400'>
            {t('landing.stats.projects.title')}
          </dt>
          <dd className='order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            {t('landing.stats.projects.value')}
          </dd>
        </div>
        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
          <dt className='text-base leading-7 text-gray-600 dark:text-gray-400'>
            {t('landing.stats.uptime.title')}
          </dt>
          <dd className='order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            {t('landing.stats.uptime.value')}
          </dd>
        </div>
        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
          <dt className='text-base leading-7 text-gray-600 dark:text-gray-400'>
            {t('landing.stats.support.title')}
          </dt>
          <dd className='order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            {t('landing.stats.support.value')}
          </dd>
        </div>
      </div>
    </div>
  </div>
)

export default StatisticsSection 