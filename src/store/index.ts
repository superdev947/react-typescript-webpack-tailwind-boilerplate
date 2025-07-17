import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Import your reducers here
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

// Configure persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'], // Only persist these reducers
}

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

// Create persistor
export const persistor = persistStore(store)

// Export types
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch 