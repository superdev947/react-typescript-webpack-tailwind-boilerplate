import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from './contexts/ThemeContext'
import Header from './layout/header'
import AnimatedDemo from './pages/AnimatedDemo'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ThemeDemo from './pages/ThemeDemo'
import { persistor, store } from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <BrowserRouter>
            <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
              <Header />
              <main>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/theme-demo' element={<ThemeDemo />} />
                  <Route path='/animated-demo' element={<AnimatedDemo />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
