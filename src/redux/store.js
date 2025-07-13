// redux/store.js

import { configureStore } from '@reduxjs/toolkit'
import sanityReducer from './sanitySlice'

export const store = configureStore({
  reducer: {
    sanity: sanityReducer,
  },
})
