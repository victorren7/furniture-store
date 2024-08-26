import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import cartIcon from '../../assets/cart-icon.png'

const ShoppingCart = () => {

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
