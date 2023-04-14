import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../pages/homeSlice'
export const store = configureStore({
  reducer: {
    home: homeSlice
  },
})