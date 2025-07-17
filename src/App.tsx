import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './layout/header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
