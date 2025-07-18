import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from './contexts/ThemeContext'
import './i18n'
import Layout from './layout'
import { persistor, store } from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
