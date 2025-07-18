import { CpuChipIcon, ServerIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface TechStackSectionProps {
  t: (key: string) => string
}

const TechStackSection: FC<TechStackSectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-2xl lg:text-center'>
      <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>
        {t('landing.techStack.section.title')}
      </h2>
      <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
        {t('landing.techStack.section.subtitle')}
      </p>
      <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400'>
        {t('landing.techStack.section.description')}
      </p>
    </div>
    <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
      <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
        <div className='flex flex-col'>
          <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            <CpuChipIcon className='h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400' aria-hidden='true' />
            {t('landing.techStack.frontend.title')}
          </dt>
          <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400'>
            <p className='flex-auto'>{t('landing.techStack.frontend.description')}</p>
            <p className='mt-6'>
              <Link to='/features' className='text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400'>
                {t('landing.techStack.learnMore')} <span aria-hidden='true'>→</span>
              </Link>
            </p>
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            <ServerIcon className='h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400' aria-hidden='true' />
            {t('landing.techStack.backend.title')}
          </dt>
          <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400'>
            <p className='flex-auto'>{t('landing.techStack.backend.description')}</p>
            <p className='mt-6'>
              <Link to='/features' className='text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400'>
                {t('landing.techStack.learnMore')} <span aria-hidden='true'>→</span>
              </Link>
            </p>
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            <GlobeAltIcon className='h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400' aria-hidden='true' />
            {t('landing.techStack.deployment.title')}
          </dt>
          <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400'>
            <p className='flex-auto'>{t('landing.techStack.deployment.description')}</p>
            <p className='mt-6'>
              <Link to='/features' className='text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400'>
                {t('landing.techStack.learnMore')} <span aria-hidden='true'>→</span>
              </Link>
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
)

export default TechStackSection 