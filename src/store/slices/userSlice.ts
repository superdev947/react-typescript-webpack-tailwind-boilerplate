import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

interface UserState {
  currentUser: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: state => {
      state.loading = true
      state.error = null
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = null
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload }
      }
    },
    clearUser: state => {
      state.currentUser = null
      state.loading = false
      state.error = null
    },
    clearUserError: state => {
      state.error = null
    }
  }
})

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, updateUser, clearUser, clearUserError } =
  userSlice.actions
export default userSlice.reducer
