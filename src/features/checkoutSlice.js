import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  state: '',
  city: '',
  zipCode: '',
  cardNumber: '',
  cardExpiration: '',
  cvc: ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    placeOrder: (state, {payload}) => {
      // state.firstName = payload
    }
  }
})


export default checkoutSlice.reducer