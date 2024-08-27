import { createSlice } from '@reduxjs/toolkit'
import { database } from '../utils/database';

const initialState = {
  products: database,
  inShoppingCart: [],
  amount: 0,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      const item = state.products.find(item => item.name === payload.name)
      item.amount++
      state.inShoppingCart.push(item)
    },
    removeItem: (state, {payload}) => {
      const item = state.products.find(item => item.name === payload.name)
      item.amount--
      state.inShoppingCart.filter(item.name !== payload.name)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer;