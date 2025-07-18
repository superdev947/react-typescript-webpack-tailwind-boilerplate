import { CheckIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface PricingCardProps {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  featured: boolean
  href: string
  cta: string
  mostPopular: string
}

const PricingCard: FC<PricingCardProps> = ({
  id, name, description, price, features, featured, href, cta, mostPopular
}) => (
  <div
    className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10 shadow-sm hover:shadow-md transition-all duration-200 ${
      featured ? 'ring-2 ring-indigo-600 dark:ring-indigo-500 shadow-lg' : ''
    }`}
  >
    <div>
      <div className='flex items-center justify-between gap-x-4'>
        <h2 id={id} className='text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100'>
          {name}
        </h2>
        {featured && (
          <p className='rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:text-indigo-400'>
            {mostPopular}
          </p>
        )}
      </div>
      <p className='mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400'>{description}</p>
      <p className='mt-6 flex items-baseline gap-x-1'>
        <span className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          {price}
        </span>
        <span className='text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400'>/month</span>
      </p>
      <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400'>
        {features.map(feature => (
          <li key={feature} className='flex gap-x-3'>
            <CheckIcon className='h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400' aria-hidden='true' />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <Link
      to={href}
      aria-describedby={id}
      className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 ${
        featured
          ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
          : 'text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-700 hover:ring-indigo-300 dark:hover:ring-indigo-600'
      }`}
    >
      {cta}
    </Link>
  </div>
)

export default PricingCard 