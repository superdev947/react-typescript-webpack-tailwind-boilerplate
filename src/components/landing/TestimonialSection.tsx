import { FC } from 'react'

import Slider from '../ui/Slider'

interface Testimonial {
  body: string
  author: {
    name: string
    handle: string
    imageUrl: string
  }
}

interface TestimonialSectionProps {
  t: (key: string) => string
  testimonials: Testimonial[]
}

const TestimonialSection: FC<TestimonialSectionProps> = ({ t, testimonials }) => (
  <div className='mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8'>
    <div className='relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32'>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90'></div>
      <div className='relative'>
        <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {t('landing.testimonials.section.title')}
        </h2>
        <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-indigo-100'>
          {t('landing.testimonials.section.subtitle')}
        </p>
        <div className='mx-auto mt-16 max-w-2xl'>
          <Slider items={testimonials} autoPlayInterval={6000} />
        </div>
      </div>
    </div>
  </div>
)

export default TestimonialSection 