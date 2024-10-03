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
      const item = state.inShoppingCart.find(item => item.name === payload.item.name)
      item.amount++
      state.amount++
    },
    decreaseAmount: (state , {payload}) => {
      const item = state.inShoppingCart.find(item => item.name === payload.item.name)
      item.amount--
      state.amount--
    },
    updateTotal: (state) => {
      let amount = 0
      let total = 0

      state.inShoppingCart.forEach(item => {
        // amount += item.amount
        total += item.amount * item.price
      })

      state.total = total 
    }
  }
})

export const { 
  addItem, 
  removeItem, 
  increaseAmount, 
  decreaseAmount, 
  updateTotal 
} = cartSlice.actions

export default cartSlice.reducer;