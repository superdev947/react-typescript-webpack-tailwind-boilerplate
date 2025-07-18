import React from 'react'

import { useTheme } from '../../contexts/ThemeContext'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const { theme } = useTheme()

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const variantClasses = {
    primary:
      theme === 'dark'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      theme === 'dark'
        ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline:
      theme === 'dark'
        ? 'border border-gray-600 text-gray-100 hover:bg-gray-700'
        : 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost:
      theme === 'dark'
        ? 'text-gray-100 hover:bg-gray-700'
        : 'text-gray-700 hover:bg-gray-100',
    danger:
      theme === 'dark'
        ? 'bg-red-600 text-white hover:bg-red-700'
        : 'bg-red-600 text-white hover:bg-red-700'
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
