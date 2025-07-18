import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => (
  <footer className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
    <div className='mx-auto max-w-7xl py-12 md:py-16 border-t border-gray-900/10 dark:border-gray-700/10'>
      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-10'>
        {/* Logo and Description */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          <Link to='/' className='flex items-center gap-2'>
            <img
              src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company Logo'
              className='h-8 w-8'
            />
            <span className='text-lg font-semibold text-gray-900 dark:text-gray-100'>Your Company</span>
          </Link>
          <p className='mt-2 max-w-xs text-center md:text-left text-sm text-gray-500 dark:text-gray-400'>
            Building modern web experiences with React, TypeScript, and Tailwind CSS.
          </p>
          {/* Social Media Icons */}
          <div className='flex gap-4 mt-2'>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200'
            >
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z' />
              </svg>
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              className='text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200'
            >
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.48 0-4.49 2.014-4.49 4.5 0 .353.04.697.116 1.025C7.728 9.37 4.1 7.6 1.67 4.905c-.387.664-.61 1.437-.61 2.26 0 1.56.793 2.936 2.003 3.744-.736-.023-1.428-.226-2.034-.563v.057c0 2.18 1.548 4.002 3.6 4.417-.377.104-.775.16-1.186.16-.29 0-.568-.028-.84-.08.57 1.77 2.22 3.06 4.18 3.09A8.98 8.98 0 012 19.54a12.67 12.67 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.58A9.22 9.22 0 0024 4.59a8.94 8.94 0 01-2.54.698z' />
              </svg>
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200'
            >
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z' />
              </svg>
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <div className='flex flex-col items-center md:items-end gap-2'>
          <nav className='flex flex-col sm:flex-row gap-4'>
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
          </nav>
        </div>
      </div>
      {/* Copyright */}
      <div className='mt-10 border-t border-gray-900/10 dark:border-gray-700/10 pt-6 text-center'>
        <p className='text-xs text-gray-400'>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
