import { EnvelopeIcon, EyeIcon, EyeSlashIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

import Input from './Input'

const InputWithIcons = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [username, setUsername] = useState('')

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <h3 className='font-medium text-gray-700 dark:text-gray-300'>With Icons</h3>

          <Input
            label='Email Address'
            type='email'
            placeholder='Enter your email'
            leftIcon={<EnvelopeIcon className='h-5 w-5' />}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <Input
            label='Username'
            placeholder='Enter your username'
            leftIcon={<UserIcon className='h-5 w-5' />}
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />

          <Input
            label='Search'
            placeholder='Search...'
            leftIcon={<MagnifyingGlassIcon className='h-5 w-5' />}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
        </div>

        <div className='space-y-4'>
          <h3 className='font-medium text-gray-700 dark:text-gray-300'>Password Input</h3>

          <Input
            label='Password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter your password'
            leftIcon={<UserIcon className='h-5 w-5' />}
            rightIcon={
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='hover:text-gray-700 dark:hover:text-gray-300'
              >
                {showPassword ? <EyeSlashIcon className='h-5 w-5' /> : <EyeIcon className='h-5 w-5' />}
              </button>
            }
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <Input
            label='Email with Helper Text'
            type='email'
            placeholder='Enter your email'
            helperText='We will never share your email with anyone else.'
            leftIcon={<EnvelopeIcon className='h-5 w-5' />}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <Input
            label='Required Field'
            placeholder='This field is required'
            error='This field is required'
            leftIcon={<UserIcon className='h-5 w-5' />}
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default InputWithIcons
