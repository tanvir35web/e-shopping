import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from './shoppingSlice'

export const store = configureStore({ 
  reducer: {
    shopping: shoppingReducer,
  },
})