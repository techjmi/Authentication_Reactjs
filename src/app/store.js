import { configureStore } from '@reduxjs/toolkit'
import fileReducer from "../features/tableSlice"
export const store = configureStore({
  reducer: {
    file:fileReducer
  },
})