import { FC } from 'react'

interface Feature {
  name: string
  description: string
  icon: React.ElementType
}

interface FeaturesSectionProps {
  t: (key: string) => string
  features: Feature[]
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ t, features }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-2xl lg:text-center'>
      <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>
        {t('landing.features.section.title')}
      </h2>
      <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
        {t('landing.features.section.subtitle')}
      </p>
      <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400'>
        {t('landing.features.section.description')}
      </p>
    </div>
    <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl'>
      <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
        {features.map(feature => (
          <div
            key={feature.name}
            className='relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700/5 hover:shadow-md transition-shadow duration-200'
          >
            <dt className='text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100 mb-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 mb-4'>
                <feature.icon className='h-7 w-7 text-white' aria-hidden='true' />
              </div>
              {feature.name}
            </dt>
            <dd className='text-base leading-7 text-gray-600 dark:text-gray-400'>{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
)

export default FeaturesSection 