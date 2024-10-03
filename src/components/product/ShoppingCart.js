import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { increaseAmount, removeItem } from '../../features/cartSlice';
import cartIcon from '../../assets/cart-icon.png'

const ShoppingCart = ({product}) => {

  const productAmount = useSelector((store) => store.cart.inShoppingCart)
  // const productAmount = useSelector((store) => store.cart)

  const priceTotal = useSelector((store) => store.cart.total)

  const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
  const dispatch = useDispatch()

  const cartMap = () => {
    return product.map((item, i) => {
      return (
        <div key={i}>
          <CartRow>
            <ItemInfo>
              <Thumbnail alt={item.name} src={item.image} />
              <CartItemSpan>{item.name}</CartItemSpan>
            </ItemInfo>
            <AmountCol>
              <CartItemSpan>Amount</CartItemSpan>
              <AmountRow>
                <AmButton>-</AmButton>
                <span>{item.amount}</span>
                <AmButton onClick={() => dispatch(increaseAmount({item}))}>
                  +
                </AmButton>
              </AmountRow>
            </AmountCol>
            <AmountCol>
              <CartItemSpan>${item.price}.00</CartItemSpan>
              <RemoveButton onClick={() => dispatch(removeItem({item}))}>
                Remove
              </RemoveButton>
            </AmountCol>
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
        <div>
          {cartMap()}
        </div>
        <TotalRow>
          <span>Total: </span>
          <TotalPrice>${priceTotal}.00</TotalPrice>
        </TotalRow>
        <CheckoutButton to='/checkout'>Checkout</CheckoutButton>
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
  &:hover {
    cursor: pointer;
  }
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

const AmountCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AmountRow = styled.div`
  display: flex;
  flex-direction: row;
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
  align-items: center;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`

const CartItemSpan = styled.span`
  font-size: 13px;
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

const TotalPrice = styled.span`
  font-weight: 700;
`

const CheckoutButton = styled(Link)`
  display: flex;
  width: 10rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
  background-color: olive;
  border-radius: 2rem;
  border: none;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`

const RemoveButton = styled.button`
  color: red;
  font-size: 11px;
  border: none;
  background-color: transparent;
`

const AmButton = styled.button`
  border: none;
  background-color: transparent;
`
