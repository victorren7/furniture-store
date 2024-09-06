import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import taborSofa from '../../assets/products/tabor-green-sofa.jpeg'

import cartIcon from '../../assets/cart-icon.png'

const ShoppingCart = ({product}) => {

  const productAmount = useSelector((store) => store.cart.inShoppingCart)
  const priceTotal = useSelector((store) => store.cart.total)


  const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

  console.log('product', product)

  const cartMap = () => {
    return product.map((item, i) => {
      return (
        <div>
          <CartRow key={i}>
            <ItemInfo>
              <Thumbnail alt={product.name} src={taborSofa} />
              <CartItemSpan>{item.name}</CartItemSpan>
            </ItemInfo>
            <CartItemSpan>${item.price}.00</CartItemSpan>
          </CartRow>
          <hr/>
        </div>
      )
    })
  }
  const shoppingCartModal = () => {

    return(
      <Modal>
        <TopWrapper>
          <CartTitle>
            Added to your cart
          </CartTitle>
          <CloseButton onClick={() => setShoppingCartOpen(false)}>
            X
          </CloseButton>
        </TopWrapper>
        <hr />
        <CartItemsWrapper>
          {cartMap()}
        </CartItemsWrapper>
        <TotalRow>
          <span>Total: </span>
          <span>${priceTotal}.00</span>
        </TotalRow>
      </Modal>
    )
  }
  return (
    <div>
      <CartButton onClick={() => setShoppingCartOpen(true)} >
        <CartImage 
          src={cartIcon} 
          alt='cart button' 
        />
        <Amount>{productAmount.length}</Amount>
      </CartButton>
      <div>
        {shoppingCartOpen ? shoppingCartModal() : null}
      </div>
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

const CartItemsWrapper = styled.div`
`

const Modal = styled.div`
  position: absolute;
  width: 30rem;
  height: 100%;
  top: 0;
  right: 0;
  padding: 1rem;
  background-color: beige;
  border-radius: 1rem;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`

const CartTitle = styled.span`
  font-size: 26px; 
  margin-left: 1rem;
`

const CloseButton = styled.button`
  font-size: 20px;
  border: none; 
  background: none;
`

const CartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`

const CartItemSpan = styled.span`
  font-size: 18px;
  align-self: center;
`

const Thumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`

const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 20px;
`
