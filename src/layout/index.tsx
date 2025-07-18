import { Route, Routes } from 'react-router-dom'

import Footer from './footer'
import Header from './header'

import AnimatedDemo from '@/pages/AnimatedDemo'
import Landing from '@/pages/Landing'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/Profile'
import ThemeDemo from '@/pages/ThemeDemo'

export default function Layout() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/theme-demo' element={<ThemeDemo />} />
          <Route path='/animated-demo' element={<AnimatedDemo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
