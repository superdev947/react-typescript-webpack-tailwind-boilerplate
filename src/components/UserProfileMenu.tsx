import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/slices/authSlice'
import { clearUser } from '@/store/slices/userSlice'

export default function UserProfileMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(state => state.user.currentUser)

  const handleProfile = () => {
    navigate('/profile')
    setOpen(false)
  }
  const handleSettings = () => {
    navigate('/settings')
    setOpen(false)
  }
  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUser())
    navigate('/login')
    setOpen(false)
  }

  const menuItems = [
    { label: 'Profile', onClick: handleProfile },
    { label: 'Settings', onClick: handleSettings },
    { label: 'Logout', onClick: handleLogout }
  ]

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className='relative' ref={menuRef}>
      <button
        className='flex items-center p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none'
        onClick={() => setOpen(o => !o)}
      >
        {user?.avatar ? (
          <img src={user.avatar} alt={user.name || 'User'} className='w-8 h-8 rounded-full object-cover' />
        ) : (
          <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold'>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </span>
        )}
      </button>
      {open && (
        <div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50'>
          {menuItems.map(item => (
            <button
              key={item.label}
              className='w-full text-left px-4 py-2 hover:bg-gray-100'
              onClick={() => {
                item.onClick()
                setOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
