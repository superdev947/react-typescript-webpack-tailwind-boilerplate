import { FC, useState } from 'react'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors duration-200"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            onClick={() => handleToggle(idx)}
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{item.question}</span>
            <svg
              className={`h-6 w-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`faq-panel-${idx}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            aria-hidden={openIndex !== idx}
          >
            <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-base">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion 