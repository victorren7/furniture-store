import { createSlice } from '@reduxjs/toolkit'
import { database } from '../utils/database';

const initialState = {
  products: database,
  inShoppingCart: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      state.inShoppingCart.push(payload.product)
      state.amount++
      state.total += payload.product.price
    },
    removeItem: (state, {payload}) => {
      const item = state.products.find(item => item.name === payload.name)
      state.inShoppingCart.filter(item.name !== payload.name)
      state.amount--
      state.total -= payload.product.price

    },
    increaseAmount: (state, {payload}) => {
      const item = state.products.find(item => item.name === payload.name)
      item.amount++
    }
    // updateTotal: (state) => {
    //   for (let i = 0; i < state.inShoppingCart.length; i++) {
    //     const element = state.inShoppingCart[i];
    //    console.log('element', element)
    //   }
    // }
  }
})

export const { addItem, removeItem, increaseAmount } = cartSlice.actions

export default cartSlice.reducer;