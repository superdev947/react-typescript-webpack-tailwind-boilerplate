import { useState } from 'react'

import { AnimatedButton, AnimatedCard, Dropdown, Input, Modal, ThemeToggle } from '@/components/ui'
import InputWithIcons from '@/components/ui/InputWithIcons'
import { useTheme } from '@/contexts/ThemeContext'

const AnimatedDemo = () => {
  const { theme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const dropdownItems = [
    { label: 'Profile', onClick: () => console.log('Profile clicked') },
    { label: 'Settings', onClick: () => console.log('Settings clicked') },
    { label: 'Sign out', onClick: () => console.log('Sign out clicked') }
  ]

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Hero Section */}
        <div className='text-center space-y-6'>
          <AnimatedCard animationType='slideUp' delay={0.2}>
            <h1 className='text-5xl font-bold text-gray-900 dark:text-white mb-4'>GSAP Animated Components</h1>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              Smooth scroll-triggered animations with theme support
            </p>
          </AnimatedCard>
        </div>

        {/* Animated Buttons Section */}
        <AnimatedCard animationType='slideLeft' delay={0.3}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Animated Buttons</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Scale Animation</h3>
              <div className='space-x-2'>
                <AnimatedButton animationType='scale' delay={0.1} size='sm'>
                  Small
                </AnimatedButton>
                <AnimatedButton animationType='scale' delay={0.2} size='md'>
                  Medium
                </AnimatedButton>
                <AnimatedButton animationType='scale' delay={0.3} size='lg'>
                  Large
                </AnimatedButton>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Slide Up Animation</h3>
              <div className='space-x-2'>
                <AnimatedButton animationType='slideUp' delay={0.1} variant='secondary' size='sm'>
                  Small
                </AnimatedButton>
                <AnimatedButton animationType='slideUp' delay={0.2} variant='secondary' size='md'>
                  Medium
                </AnimatedButton>
                <AnimatedButton animationType='slideUp' delay={0.3} variant='secondary' size='lg'>
                  Large
                </AnimatedButton>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Rotate Animation</h3>
              <div className='space-x-2'>
                <AnimatedButton animationType='rotate' delay={0.1} variant='outline' size='sm'>
                  Small
                </AnimatedButton>
                <AnimatedButton animationType='rotate' delay={0.2} variant='outline' size='md'>
                  Medium
                </AnimatedButton>
                <AnimatedButton animationType='rotate' delay={0.3} variant='outline' size='lg'>
                  Large
                </AnimatedButton>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Animated Cards Section */}
        <AnimatedCard animationType='slideRight' delay={0.4}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Animated Cards</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <AnimatedCard animationType='fadeIn' delay={0.1} padding='sm'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Fade In</h3>
              <p className='text-gray-600 dark:text-gray-300'>This card fades in smoothly when scrolled into view.</p>
            </AnimatedCard>

            <AnimatedCard animationType='slideUp' delay={0.2} padding='md'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Slide Up</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                This card slides up from below when scrolled into view.
              </p>
            </AnimatedCard>

            <AnimatedCard animationType='scale' delay={0.3} padding='lg'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Scale In</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                This card scales in with a bouncy effect when scrolled into view.
              </p>
            </AnimatedCard>
          </div>
        </AnimatedCard>

        {/* Interactive Components Section */}
        <AnimatedCard animationType='slideLeft' delay={0.5}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Interactive Components</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Dropdown with Animation</h3>
              <Dropdown trigger='Animated Dropdown' items={dropdownItems} />
            </div>

            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Modal Trigger</h3>
              <AnimatedButton onClick={() => setIsModalOpen(true)} animationType='scale' hoverEffect={true}>
                Open Animated Modal
              </AnimatedButton>
            </div>
          </div>
        </AnimatedCard>

        {/* Input Components with Animation */}
        <AnimatedCard animationType='slideRight' delay={0.6}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Animated Inputs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Basic Inputs</h3>
              <Input
                label='Animated Input'
                placeholder='This input appears with animation'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <Input
                label='Filled Input'
                variant='filled'
                placeholder='Filled variant with animation'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>

            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Input with Icons</h3>
              <InputWithIcons />
            </div>
          </div>
        </AnimatedCard>

        {/* Theme Toggle Section */}
        <AnimatedCard animationType='fadeIn' delay={0.7}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Theme Controls</h2>
          <div className='flex items-center justify-center space-x-4'>
            <ThemeToggle size='lg' />
            <span className='text-gray-600 dark:text-gray-300'>
              Current theme: <span className='font-semibold'>{theme}</span>
            </span>
          </div>
        </AnimatedCard>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Animated Modal' size='lg'>
          <div className='space-y-4'>
            <p className='text-gray-600 dark:text-gray-300'>
              This modal demonstrates how components work together with animations. The modal itself uses Headless UI
              transitions while the content can be animated with GSAP.
            </p>

            <div className='flex justify-end space-x-2'>
              <AnimatedButton variant='outline' onClick={() => setIsModalOpen(false)}>
                Cancel
              </AnimatedButton>
              <AnimatedButton onClick={() => setIsModalOpen(false)}>Confirm</AnimatedButton>
            </div>
          </div>
        </Modal>

        {/* Animation Info */}
        <AnimatedCard animationType='slideUp' delay={0.8}>
          <h2 className='text-3xl font-semibold mb-6 text-gray-900 dark:text-white'>Animation Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300'>
            <div className='space-y-2'>
              <p>
                • <strong>Scroll Triggers:</strong> Animations trigger when elements enter viewport
              </p>
              <p>
                • <strong>Staggered Delays:</strong> Multiple elements animate in sequence
              </p>
              <p>
                • <strong>Theme Integration:</strong> All animations work with light/dark themes
              </p>
              <p>
                • <strong>Performance:</strong> Optimized with GSAP for smooth 60fps animations
              </p>
            </div>
            <div className='space-y-2'>
              <p>
                • <strong>Hover Effects:</strong> Interactive scale and color transitions
              </p>
              <p>
                • <strong>Accessibility:</strong> Respects reduced motion preferences
              </p>
              <p>
                • <strong>Customizable:</strong> Easy to adjust timing and easing
              </p>
              <p>
                • <strong>TypeScript:</strong> Fully typed for better development experience
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}

export default AnimatedDemo
