import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loginFailure, loginStart, loginSuccess } from '../store/slices/authSlice'
import { fetchUserSuccess } from '../store/slices/userSlice'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const { loading, error, isAuthenticated } = useAppSelector(state => state.auth)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      dispatch(loginFailure(t('login.error.fillFields')))

      return
    }

    try {
      dispatch(loginStart())

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mock successful login
      const mockToken = 'mock-jwt-token-' + Date.now()
      const mockUser = {
        id: '1',
        email: email,
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150'
      }

      dispatch(loginSuccess({ token: mockToken }))
      dispatch(fetchUserSuccess(mockUser))

      // Redirect to home page
      navigate('/')
    } catch {
      dispatch(loginFailure(t('login.error.failed')))
    }
  }

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/')

    return null
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white dark:bg-gray-800 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200 dark:border-gray-700'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                alt='Your Company'
                src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                className='mx-auto h-10 w-auto'
              />
              <h2 className='mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-gray-100'>
                {t('login.title')}
              </h2>
              <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>{t('login.subtitle')}</p>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-sm'>
              {error && (
                <div className='mb-4 rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800'>
                  <div className='text-sm text-red-700 dark:text-red-400'>{error}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='email' className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
                    {t('login.email')}
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoComplete='email'
                      className='block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 sm:text-sm/6 border border-gray-300 dark:border-gray-600'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
                      {t('login.password')}
                    </label>
                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300'
                      >
                        {t('login.forgotPassword')}
                      </a>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      autoComplete='current-password'
                      className='block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 sm:text-sm/6 border border-gray-300 dark:border-gray-600'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      checked={rememberMe}
                      onChange={e => setRememberMe(e.target.checked)}
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-500'
                    />
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900 dark:text-gray-100'>
                      {t('login.rememberMe')}
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    disabled={loading}
                    className='flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
                  >
                    {loading ? t('login.signingIn') : t('login.signIn')}
                  </button>
                </div>
              </form>

              <div className='mt-6'>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300 dark:border-gray-600' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='bg-gray-50 dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400'>
                      {t('login.or')}
                    </span>
                  </div>
                </div>

                <div className='mt-6 grid grid-cols-2 gap-3'>
                  <button
                    type='button'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
                  >
                    <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                    <span className='text-sm font-semibold leading-6'>Twitter</span>
                  </button>

                  <button
                    type='button'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
                  >
                    <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-sm font-semibold leading-6'>GitHub</span>
                  </button>
                </div>
              </div>

              <p className='mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-400'>
                {t('login.noAccount')}{' '}
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300'
                >
                  {t('login.signUp')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
