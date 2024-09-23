import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components';

function OrderSummary() {

  const { inShoppingCart } = useSelector((store) => store.cart) 

  const itemsMap = () => {
    return inShoppingCart.map((item, i) => {
      console.log('item', item)
      return (
        <CartRow>
          <ItemInfo>
            <Thumbnail alt={item.name} src={item.image} />
            <CartItemSpan>{item.name}</CartItemSpan>
          </ItemInfo>
        </CartRow>
      )
    })
  }

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <CartRow>
        <div>{itemsMap()}</div>
      </CartRow>
    </Wrapper>
  )
}

export default OrderSummary;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 50rem;
  padding: 1rem;
  background-color: moccasin;
  border-radius: 2rem;
`

const Title = styled.span`
  font-size: 26px;
  margin-bottom: 3.5rem;
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

const Thumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`

const CartItemSpan = styled.span`
  font-size: 18px;
  align-self: center;
`