import { FC } from 'react'

import PricingCard from '../ui/PricingCard'

interface Tier {
  id: string
  name: string
  description: string
  price: { monthly: string }
  features: string[]
  featured: boolean
  href: string
}

interface PricingSectionProps {
  t: (key: string) => string
  tiers: Tier[]
}

const PricingSection: FC<PricingSectionProps> = ({ t, tiers }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-4xl text-center'>
      <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>
        {t('landing.pricing.section.title')}
      </h2>
      <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
        {t('landing.pricing.section.subtitle')}
      </p>
    </div>
    <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400'>
      {t('landing.pricing.section.description')}
    </p>
    <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
      {tiers.map(tier => (
        <PricingCard
          key={tier.id}
          id={tier.id}
          name={tier.name}
          description={tier.description}
          price={tier.price.monthly}
          features={tier.features}
          featured={tier.featured}
          href={tier.href}
          cta={t('landing.pricing.getStarted')}
          mostPopular={t('landing.pricing.mostPopular')}
        />
      ))}
    </div>
  </div>
)

export default PricingSection 