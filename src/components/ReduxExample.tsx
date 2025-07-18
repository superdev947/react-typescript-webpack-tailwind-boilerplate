import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loginFailure, loginStart, loginSuccess, logout } from '@/store/slices/authSlice'
import { clearUser, fetchUserSuccess } from '@/store/slices/userSlice'

const ReduxExample: FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  const user = useAppSelector(state => state.user)

  const handleLogin = async () => {
    try {
      dispatch(loginStart())

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const mockToken = 'mock-jwt-token-' + Date.now()
      const mockUser = {
        id: '1',
        email: 'user@example.com',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150'
      }

      dispatch(loginSuccess({ token: mockToken }))
      dispatch(fetchUserSuccess(mockUser))
    } catch {
      dispatch(loginFailure('Login failed'))
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUser())
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Redux State Example</h2>

      <div className='space-y-4'>
        <div>
          <h3 className='font-medium text-gray-700'>Authentication State:</h3>
          <pre className='bg-gray-100 p-2 rounded text-sm'>{JSON.stringify(auth, null, 2)}</pre>
        </div>

        <div>
          <h3 className='font-medium text-gray-700'>User State:</h3>
          <pre className='bg-gray-100 p-2 rounded text-sm'>{JSON.stringify(user, null, 2)}</pre>
        </div>

        <div className='flex space-x-4'>
          <button
            onClick={handleLogin}
            disabled={auth.loading}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50'
          >
            {auth.loading ? 'Logging in...' : 'Login'}
          </button>

          <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
            Logout
          </button>
        </div>

        {auth.error && <div className='p-3 bg-red-100 text-red-700 rounded'>Error: {auth.error}</div>}
      </div>
    </div>
  )
}

export default ReduxExample
