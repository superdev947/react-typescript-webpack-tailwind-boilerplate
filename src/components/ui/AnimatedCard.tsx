import React from 'react'

import { useTheme } from '../../contexts/ThemeContext'
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  scrollTrigger?: boolean
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  padding = 'md',
  animationType = 'slideUp',
  delay = 0,
  duration = 0.6,
  scrollTrigger = true
}) => {
  const { theme } = useTheme()

  const animationRef = useGSAPAnimation<HTMLDivElement>({
    animationType,
    duration,
    delay,
    scrollTrigger: scrollTrigger ? {
      start: 'top 85%',
      end: 'bottom 15%'
    } : undefined
  })

  const baseClasses = 'rounded-lg border transition-colors duration-200'
  
  const themeClasses = theme === 'dark'
    ? 'bg-gray-800 border-gray-700 text-gray-100'
    : 'bg-white border-gray-200 text-gray-900 shadow-sm'

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  }

  const classes = `${baseClasses} ${themeClasses} ${paddingClasses[padding]} ${className}`

  return (
    <div ref={animationRef} className={classes}>
      {children}
    </div>
  )
}

export default AnimatedCard 