import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import React from 'react'

import { useTheme } from '../../contexts/ThemeContext'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const baseClasses = 'rounded-lg transition-colors duration-200 focus:outline-none'

  const themeClasses =
    theme === 'dark'
      ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'

  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${themeClasses} ${sizeClasses[size]} ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <MoonIcon className={iconSizes[size]} /> : <SunIcon className={iconSizes[size]} />}
    </button>
  )
}

export default ThemeToggle
