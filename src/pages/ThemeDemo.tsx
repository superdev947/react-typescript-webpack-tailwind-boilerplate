import { useState } from 'react'

import { Button, Card, Dropdown, Input, Modal, ThemeToggle } from '../components/ui'
import InputWithIcons from '../components/ui/InputWithIcons'
import { useTheme } from '../contexts/ThemeContext'

const ThemeDemo = () => {
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
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Theme Component Demo</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Current theme: <span className='font-semibold'>{theme}</span>
          </p>
        </div>

        {/* Theme Toggle Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Theme Toggle</h2>
          <div className='flex items-center gap-4'>
            <ThemeToggle size='sm' />
            <ThemeToggle size='md' />
            <ThemeToggle size='lg' />
          </div>
        </Card>

        {/* Button Variants Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Button Variants</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='space-y-2'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Primary</h3>
              <div className='space-x-2'>
                <Button size='sm'>Small</Button>
                <Button size='md'>Medium</Button>
                <Button size='lg'>Large</Button>
              </div>
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Secondary</h3>
              <div className='space-x-2'>
                <Button variant='secondary' size='sm'>
                  Small
                </Button>
                <Button variant='secondary' size='md'>
                  Medium
                </Button>
                <Button variant='secondary' size='lg'>
                  Large
                </Button>
              </div>
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Outline</h3>
              <div className='space-x-2'>
                <Button variant='outline' size='sm'>
                  Small
                </Button>
                <Button variant='outline' size='md'>
                  Medium
                </Button>
                <Button variant='outline' size='lg'>
                  Large
                </Button>
              </div>
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Ghost</h3>
              <div className='space-x-2'>
                <Button variant='ghost' size='sm'>
                  Small
                </Button>
                <Button variant='ghost' size='md'>
                  Medium
                </Button>
                <Button variant='ghost' size='lg'>
                  Large
                </Button>
              </div>
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Danger</h3>
              <div className='space-x-2'>
                <Button variant='danger' size='sm'>
                  Small
                </Button>
                <Button variant='danger' size='md'>
                  Medium
                </Button>
                <Button variant='danger' size='lg'>
                  Large
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Card Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Card Components</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card padding='sm'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Small Padding</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                This card has small padding and adapts to the current theme.
              </p>
            </Card>

            <Card padding='md'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Medium Padding</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                This card has medium padding and adapts to the current theme.
              </p>
            </Card>

            <Card padding='lg'>
              <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Large Padding</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                This card has large padding and adapts to the current theme.
              </p>
            </Card>
          </div>
        </Card>

        {/* Dropdown Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Dropdown Component</h2>
          <div className='flex gap-4'>
            <Dropdown trigger='Open Dropdown' items={dropdownItems} />
            <Dropdown trigger='Right Aligned' items={dropdownItems} align='right' />
          </div>
        </Card>

        {/* Modal Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Modal Component</h2>
          <div className='space-y-4'>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Theme Demo Modal' size='md'>
              <div className='space-y-4'>
                <p className='text-gray-600 dark:text-gray-300'>
                  This modal demonstrates how components adapt to the current theme. The background, text colors, and
                  borders all change based on the selected theme.
                </p>

                <div className='flex justify-end space-x-2'>
                  <Button variant='outline' onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </div>
              </div>
            </Modal>
          </div>
        </Card>

        {/* Input Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Input Components</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Variants</h3>
              <Input
                label='Default Input'
                placeholder='Enter your text here'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Filled Input'
                variant='filled'
                placeholder='Filled variant'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Outline Input'
                variant='outline'
                placeholder='Outline variant'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Disabled Filled Input'
                variant='filled'
                placeholder='Disabled filled state'
                disabled
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            
            <div className='space-y-4'>
              <h3 className='font-medium text-gray-700 dark:text-gray-300'>Sizes & States</h3>
              <Input
                label='Small Input'
                size='sm'
                placeholder='Small size'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Large Input'
                size='lg'
                placeholder='Large size'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Error Input'
                placeholder='With error state'
                error='This field is required'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Disabled Input'
                placeholder='Disabled state'
                disabled
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label='Disabled Outline Input'
                variant='outline'
                placeholder='Disabled outline state'
                disabled
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Input with Icons Section */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Input with Icons</h2>
          <InputWithIcons />
        </Card>

        {/* Theme Information */}
        <Card>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Theme Information</h2>
          <div className='space-y-2 text-gray-600 dark:text-gray-300'>
            <p>• All components automatically adapt to light and dark themes</p>
            <p>• Theme preference is saved in localStorage</p>
            <p>• System preference is respected on first visit</p>
            <p>• Smooth transitions between themes</p>
            <p>• Built with @headlessui/react and Tailwind CSS</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ThemeDemo
