import { configureStore } from '@reduxjs/toolkit'
import filter from './filter-slice'

const store = configureStore({
  reducer: {
    filter: filter.reducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
