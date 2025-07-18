import { FC } from 'react'
import { Link } from 'react-router-dom'

const FooterSection: FC = () => (
  <footer className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-2xl lg:max-w-none'>
      <div className='border-t border-gray-900/10 dark:border-gray-700/10 pt-10'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-sm leading-5 text-gray-500 dark:text-gray-400'>
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <Link
              to='/privacy'
              className='text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              to='/terms'
              className='text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
            >
              Terms of Service
            </Link>
            <Link
              to='/contact'
              className='text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection 