import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeroSectionProps {
  t: (key: string) => string
}

const HeroSection: FC<HeroSectionProps> = ({ t }) => (
  <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-50/50 dark:from-gray-900/50 to-white dark:to-gray-900'>
    <div
      className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      aria-hidden='true'
    >
      <div
        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }}
      />
    </div>
    <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-4xl text-center'>
        <div className='mb-8 flex justify-center'>
          <div className='relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20'>
            {t('landing.hero.badge')}{' '}
            <Link to='/features' className='font-semibold text-indigo-600 dark:text-indigo-400'>
              <span className='absolute inset-0 rounded-full' aria-hidden='true'></span>{' '}
              {t('landing.hero.badgeLink')} <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:text-7xl'>
          {t('landing.hero.title')}
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-xl'>
          {t('landing.hero.subtitle')}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/login'
            className='rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200'
          >
            {t('landing.hero.cta.primary')}
          </Link>
          <Link
            to='/features'
            className='text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200'
          >
            {t('landing.hero.cta.secondary')} <span aria-hidden='true'>→</span>
          </Link>
        </div>
        <div className='mt-16 flex items-center justify-center gap-x-8 text-sm text-gray-600 dark:text-gray-400'>
          <div className='flex items-center gap-x-2'>
            <div className='flex -space-x-1'>
              <img
                className='h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900'
                src='https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <img
                className='h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900'
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <img
                className='h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <span>{t('landing.hero.trustedBy')}</span>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='flex items-center gap-x-1'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='h-4 w-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span>{t('landing.hero.rating')}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
      aria-hidden='true'
    >
      <div
        className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }}
      />
    </div>
  </div>
)

export default HeroSection 