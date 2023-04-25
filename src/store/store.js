import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../pages/loginSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer
  },
})