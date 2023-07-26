import { configureStore } from '@reduxjs/toolkit'
import votationReducer from "./features/votationsSlice"

export const store = configureStore({
  reducer:{ 
     votations: votationReducer
},
})