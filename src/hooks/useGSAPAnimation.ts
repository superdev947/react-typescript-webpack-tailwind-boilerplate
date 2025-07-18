import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface AnimationConfig {
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

interface UseGSAPAnimationProps {
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  duration?: number
  delay?: number
  ease?: string
  scrollTrigger?: AnimationConfig
  dependencies?: any[]
}

export const useGSAPAnimation = <T extends HTMLElement = HTMLElement>({
  animationType = 'fadeIn',
  duration = 0.6,
  delay = 0,
  ease = 'power2.out',
  scrollTrigger,
  dependencies = []
}: UseGSAPAnimationProps = {}) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case 'fadeIn':
          gsap.set(element, { opacity: 0 })
          break
        case 'slideUp':
          gsap.set(element, { opacity: 0, y: 50 })
          break
        case 'slideLeft':
          gsap.set(element, { opacity: 0, x: -50 })
          break
        case 'slideRight':
          gsap.set(element, { opacity: 0, x: 50 })
          break
        case 'scale':
          gsap.set(element, { opacity: 0, scale: 0.8 })
          break
        case 'rotate':
          gsap.set(element, { opacity: 0, rotation: -10 })
          break
      }
    }

    // Create animation
    const createAnimation = () => {
      const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        duration,
        delay,
        ease,
        ...(scrollTrigger && {
          scrollTrigger: {
            trigger: scrollTrigger.trigger || element,
            start: scrollTrigger.start || 'top 80%',
            end: scrollTrigger.end || 'bottom 20%',
            scrub: scrollTrigger.scrub || false,
            markers: scrollTrigger.markers || false,
            onEnter: scrollTrigger.onEnter,
            onLeave: scrollTrigger.onLeave,
            onEnterBack: scrollTrigger.onEnterBack,
            onLeaveBack: scrollTrigger.onLeaveBack
          }
        })
      })

      return animation
    }

    setInitialState()
    const animation = createAnimation()

    // Cleanup
    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animationType, duration, delay, ease, scrollTrigger, ...dependencies])

  return elementRef
}

// Predefined animation configurations
export const animations = {
  fadeInUp: {
    animationType: 'slideUp' as const,
    duration: 0.6,
    ease: 'power2.out'
  },
  fadeInLeft: {
    animationType: 'slideLeft' as const,
    duration: 0.6,
    ease: 'power2.out'
  },
  fadeInRight: {
    animationType: 'slideRight' as const,
    duration: 0.6,
    ease: 'power2.out'
  },
  scaleIn: {
    animationType: 'scale' as const,
    duration: 0.5,
    ease: 'back.out(1.7)'
  },
  rotateIn: {
    animationType: 'rotate' as const,
    duration: 0.8,
    ease: 'power2.out'
  }
}
