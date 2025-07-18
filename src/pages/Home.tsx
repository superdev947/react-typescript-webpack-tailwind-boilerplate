import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import ReduxExample from '../components/ReduxExample'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className='text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          {t('home.title')}
        </h1>
        <p className='mt-4 text-center text-lg text-gray-600 dark:text-gray-400'>{t('home.subtitle')}</p>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-2xl'>
        <div className='space-y-6'>
          <div className='bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700/5 sm:rounded-xl md:col-span-2'>
            <div className='px-4 py-6 sm:px-6'>
              <h3 className='text-base font-semibold leading-6 text-gray-900 dark:text-gray-100'>
                {t('home.gettingStarted.title')}
              </h3>
              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>{t('home.gettingStarted.description')}</p>
              <div className='mt-4'>
                <Link
                  to='/login'
                  className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  {t('home.gettingStarted.goToLogin')}
                </Link>
              </div>
            </div>
          </div>

          <ReduxExample />
        </div>
      </div>
    </div>
  )
}

export default Home
