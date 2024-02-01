import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true
}

// state el estdo inicial de la app
// actions las acciones que se van a ejecutar y se le pasa por parametro el estado

export const openOffersSlice = createSlice({
  name: 'openOffers',
  initialState,
  reducers: {
    toggleOpenOffers: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export default openOffersSlice.reducer

export const { toggleOpenOffers } = openOffersSlice.actions
