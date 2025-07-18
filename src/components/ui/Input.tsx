import React, { forwardRef } from 'react'

import { useTheme } from '../../contexts/ThemeContext'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme()

    const baseClasses =
      'block w-full rounded-lg border transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-4 py-3 text-base'
    }

    const getVariantClasses = () => {
      const isDark = theme === 'dark'

      if (error) {
        return isDark
          ? 'border-red-500 text-red-100 placeholder-red-400 focus:border-red-500'
          : 'border-red-500 text-red-900 placeholder-red-400 focus:border-red-500'
      }

      switch (variant) {
        case 'filled':
          return isDark
            ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500'
            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'

        case 'outline':
          return isDark
            ? 'bg-transparent border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500'
            : 'bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'

        default:
          return isDark
            ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
      }
    }

    const getDisabledClasses = () => {
      const isDark = theme === 'dark'

      if (disabled) {
        switch (variant) {
          case 'filled':
            return isDark
              ? 'bg-gray-800 border-gray-700 text-gray-500 placeholder-gray-600 cursor-not-allowed'
              : 'bg-gray-100 border-gray-200 text-gray-500 placeholder-gray-400 cursor-not-allowed'

          case 'outline':
            return isDark
              ? 'bg-transparent border-gray-700 text-gray-500 placeholder-gray-600 cursor-not-allowed'
              : 'bg-transparent border-gray-200 text-gray-500 placeholder-gray-400 cursor-not-allowed'

          default:
            return isDark
              ? 'bg-gray-800 border-gray-700 text-gray-500 placeholder-gray-600 cursor-not-allowed'
              : 'bg-gray-100 border-gray-200 text-gray-500 placeholder-gray-400 cursor-not-allowed'
        }
      }

      return ''
    }

    const containerClasses = `${fullWidth ? 'w-full' : ''} ${className}`

    return (
      <div className={containerClasses}>
        {label && (
          <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            {label}
          </label>
        )}

        <div className='relative'>
          {leftIcon && (
            <div
              className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`${baseClasses} ${sizeClasses[size]} ${getVariantClasses()} ${getDisabledClasses()} ${
              leftIcon ? 'pl-10' : ''
            } ${rightIcon ? 'pr-10' : ''}`}
            disabled={disabled}
            {...props}
          />

          {rightIcon && (
            <div
              className={`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <div className='mt-1'>
            {error && <p className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{error}</p>}
            {helperText && !error && (
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{helperText}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
