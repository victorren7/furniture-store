import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

import cartIcon from '../../assets/cart-icon.png'

const ShoppingCart = () => {

  const amount = useSelector((store) => store.cart.amount)

  const openCart = () => {
    
  }
  return (
    <div>
      <CartButton>
        <CartImage 
          src={cartIcon} 
          alt='cart button' 
          onClick={openCart}
        />
        <Amount>{amount}</Amount>
      </CartButton>
    </div>
  )
}

export default ShoppingCart;

const CartButton = styled.button`
  margin: 2rem;
  border: none;
  background-color: transparent;
`

const CartImage = styled.img`
  width: 2rem;
`

const Amount = styled.span`
  display: flow;
  width: 1.3rem;
  font-size: 12px;
  background-color: red;
  color: #fff;
  border-radius: .5rem;
  margin: -1rem 0 0 3.3rem;
`
