import React from 'react'

import { useTheme } from '@/contexts/ThemeContext'
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  scrollTrigger?: boolean
  hoverEffect?: boolean
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  animationType = 'scale',
  delay = 0,
  duration = 0.3,
  scrollTrigger = true,
  hoverEffect = true,
  ...props
}) => {
  const { theme } = useTheme()

  const animationRef = useGSAPAnimation<HTMLButtonElement>({
    animationType,
    duration,
    delay,
    scrollTrigger: scrollTrigger
      ? {
          start: 'top 90%',
          end: 'bottom 10%'
        }
      : undefined
  })

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const variantClasses = {
    primary: theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      theme === 'dark' ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline:
      theme === 'dark'
        ? 'border border-gray-600 text-gray-100 hover:bg-gray-700'
        : 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: theme === 'dark' ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100',
    danger: theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700'
  }

  const hoverClasses = hoverEffect ? 'hover:scale-105 active:scale-95' : ''

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${hoverClasses} ${className}`

  return (
    <button ref={animationRef} className={classes} {...props}>
      {children}
    </button>
  )
}

export default AnimatedButton
