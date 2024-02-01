import { configureStore } from '@reduxjs/toolkit'
import openOffersReducer from './OpenOffersMovile/slice'
import openDrawerReducer from './OpenDrawer/slice'
export const store = configureStore({
  reducer: {
    openOffers: openOffersReducer,
    openDrawer: openDrawerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
