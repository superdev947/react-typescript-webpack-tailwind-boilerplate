import { FC } from 'react'
import Accordion from '../ui/Accordion'

interface FAQSectionProps {
  t: (key: string) => string
}

const FAQSection: FC<FAQSectionProps> = ({ t }) => (
  <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-4xl'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100 mb-10'>
        {t('landing.faq.title')}
      </h2>
      <Accordion
        items={[
          {
            question: t('landing.faq.q1.question'),
            answer: t('landing.faq.q1.answer')
          },
          {
            question: t('landing.faq.q2.question'),
            answer: t('landing.faq.q2.answer')
          },
          {
            question: t('landing.faq.q3.question'),
            answer: t('landing.faq.q3.answer')
          },
          {
            question: t('landing.faq.q4.question'),
            answer: t('landing.faq.q4.answer')
          }
        ]}
      />
    </div>
  </div>
)

export default FAQSection 