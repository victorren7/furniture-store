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
      console.log('state1', state.inShoppingCart)
      state.amount++
      state.total += payload.product.price
    },
    removeItem: (state, {payload}) => {
      const {id} = payload.item

      state.inShoppingCart = state.inShoppingCart.filter(item => item.id !== id)
      state.amount--
    console.log('state.amount', state.amount)
      state.total -= payload.price

    },
    increaseAmount: (state, {payload}) => {
      console.log('payload', payload)
      console.log('state', state)
      const item = state.inShoppingCart.find(item => item.name === payload.item.name)
      console.log('item', item)
      item.amount++
      state.amount++
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