import { FC } from 'react'
import { Link } from 'react-router-dom'

interface CTASectionProps {
  t: (key: string) => string
}

const CTASection: FC<CTASectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32'>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90'></div>
      <div className='relative mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{t('landing.cta.title')}</h2>
        <p className='mx-auto mt-2 max-w-xl text-lg leading-8 text-indigo-100'>{t('landing.cta.subtitle')}</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/login'
            className='rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-all duration-200'
          >
            {t('landing.cta.primary')}
          </Link>
          <Link
            to='/features'
            className='text-base font-semibold leading-6 text-white hover:text-indigo-100 transition-colors duration-200'
          >
            {t('landing.cta.secondary')} <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default CTASection 