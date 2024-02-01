import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false
}

// state el estdo inicial de la app
// actions las acciones que se van a ejecutar y se le pasa por parametro el estado

export const openDrawer = createSlice({
  name: 'openDrawer',
  initialState,
  reducers: {
    toggleOpenDrawer: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export default openDrawer.reducer

export const { toggleOpenDrawer } = openDrawer.actions
