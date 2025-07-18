import {
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import ComparisonTableSection from '../components/landing/ComparisonTableSection'
import CTASection from '../components/landing/CTASection'
import FAQSection from '../components/landing/FAQSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import FooterSection from '../components/landing/FooterSection'
import HeroSection from '../components/landing/HeroSection'
import NewsletterSection from '../components/landing/NewsletterSection'
import PricingSection from '../components/landing/PricingSection'
import StatisticsSection from '../components/landing/StatisticsSection'
import TechStackSection from '../components/landing/TechStackSection'
import TestimonialSection from '../components/landing/TestimonialSection'

const Landing: FC = () => {
  const { t } = useTranslation()

  const features = [
    {
      name: t('landing.features.react.title'),
      description: t('landing.features.react.description'),
      icon: RocketLaunchIcon
    },
    {
      name: t('landing.features.typescript.title'),
      description: t('landing.features.typescript.description'),
      icon: ShieldCheckIcon
    },
    {
      name: t('landing.features.tailwind.title'),
      description: t('landing.features.tailwind.description'),
      icon: CogIcon
    },
    {
      name: t('landing.features.redux.title'),
      description: t('landing.features.redux.description'),
      icon: ChartBarIcon
    },
    {
      name: t('landing.features.i18n.title'),
      description: t('landing.features.i18n.description'),
      icon: GlobeAltIcon
    },
    {
      name: t('landing.features.theme.title'),
      description: t('landing.features.theme.description'),
      icon: UserGroupIcon
    }
  ]

  const testimonials = [
    {
      body: t('landing.testimonials.testimonial1.body'),
      author: {
        name: t('landing.testimonials.testimonial1.author.name'),
        handle: t('landing.testimonials.testimonial1.author.handle'),
        imageUrl:
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      body: t('landing.testimonials.testimonial2.body'),
      author: {
        name: t('landing.testimonials.testimonial2.author.name'),
        handle: t('landing.testimonials.testimonial2.author.handle'),
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      body: t('landing.testimonials.testimonial3.body'),
      author: {
        name: t('landing.testimonials.testimonial3.author.name'),
        handle: t('landing.testimonials.testimonial3.author.handle'),
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  ]

  const tiers = [
    {
      name: t('landing.pricing.starter.name'),
      id: 'tier-starter',
      href: '/login',
      price: { monthly: t('landing.pricing.starter.price') },
      description: t('landing.pricing.starter.description'),
      features: [
        t('landing.pricing.starter.features.feature1'),
        t('landing.pricing.starter.features.feature2'),
        t('landing.pricing.starter.features.feature3'),
        t('landing.pricing.starter.features.feature4')
      ],
      featured: false
    },
    {
      name: t('landing.pricing.pro.name'),
      id: 'tier-pro',
      href: '/login',
      price: { monthly: t('landing.pricing.pro.price') },
      description: t('landing.pricing.pro.description'),
      features: [
        t('landing.pricing.pro.features.feature1'),
        t('landing.pricing.pro.features.feature2'),
        t('landing.pricing.pro.features.feature3'),
        t('landing.pricing.pro.features.feature4'),
        t('landing.pricing.pro.features.feature5'),
        t('landing.pricing.pro.features.feature6')
      ],
      featured: true
    },
    {
      name: t('landing.pricing.enterprise.name'),
      id: 'tier-enterprise',
      href: '/login',
      price: { monthly: t('landing.pricing.enterprise.price') },
      description: t('landing.pricing.enterprise.description'),
      features: [
        t('landing.pricing.enterprise.features.feature1'),
        t('landing.pricing.enterprise.features.feature2'),
        t('landing.pricing.enterprise.features.feature3'),
        t('landing.pricing.enterprise.features.feature4'),
        t('landing.pricing.enterprise.features.feature5'),
        t('landing.pricing.enterprise.features.feature6'),
        t('landing.pricing.enterprise.features.feature7')
      ],
      featured: false
    }
  ]

  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroSection t={t} />
      <StatisticsSection t={t} />
      <FeaturesSection t={t} features={features} />
      <TechStackSection t={t} />
      <TestimonialSection t={t} testimonials={testimonials} />
      <ComparisonTableSection t={t} />
      <PricingSection t={t} tiers={tiers} />
      <FAQSection t={t} />
      <CTASection t={t} />
      <NewsletterSection t={t} />
      <FooterSection />
    </div>
  )
}

export default Landing
