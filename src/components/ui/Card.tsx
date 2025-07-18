import React from 'react'

import { useTheme } from '../../contexts/ThemeContext'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md' }) => {
  const { theme } = useTheme()

  const baseClasses = 'rounded-lg border transition-colors duration-200'

  const themeClasses =
    theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900 shadow-sm'

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  }

  const classes = `${baseClasses} ${themeClasses} ${paddingClasses[padding]} ${className}`

  return <div className={classes}>{children}</div>
}

export default Card
