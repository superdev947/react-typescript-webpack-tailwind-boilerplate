import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import Header from './layout/header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { store, persistor } from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
