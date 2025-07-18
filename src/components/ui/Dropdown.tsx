import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'

import { useTheme } from '../../contexts/ThemeContext'

interface DropdownItem {
  label: string
  onClick: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  align?: 'left' | 'right'
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, items, className = '', align = 'left' }) => {
  const { theme } = useTheme()

  const menuClasses = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'

  const itemClasses = theme === 'dark' ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'

  return (
    <Menu as='div' className={`relative inline-block text-left ${className}`}>
      <div>
        <Menu.Button className='inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'>
          {trigger}
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${menuClasses}`}
        >
          <div className='py-1'>
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={item.onClick}
                    disabled={item.disabled}
                    className={`${active ? itemClasses : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} ${
                      item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } group flex items-center w-full px-4 py-2 text-sm`}
                  >
                    {item.icon && <span className='mr-3 h-5 w-5'>{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
