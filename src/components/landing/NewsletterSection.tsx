import { FC } from 'react'

interface NewsletterSectionProps {
  t: (key: string) => string
}

const NewsletterSection: FC<NewsletterSectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='relative isolate overflow-hidden bg-gray-900 dark:bg-gray-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32'>
      <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
        {t('landing.newsletter.title')}
      </h2>
      <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
        {t('landing.newsletter.subtitle')}
      </p>
      <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
        <label htmlFor='email-address' className='sr-only'>
          {t('landing.newsletter.emailLabel')}
        </label>
        <input
          id='email-address'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
          placeholder={t('landing.newsletter.placeholder')}
        />
        <button
          type='submit'
          className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        >
          {t('landing.newsletter.subscribe')}
        </button>
      </form>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'
      >
        <circle cx='512' cy='512' r='512' fill='url(#gradient)' fillOpacity='0.7' />
        <defs>
          <radialGradient id='gradient'>
            <stop stopColor='#7775D6' />
            <stop offset='1' stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
)

export default NewsletterSection 