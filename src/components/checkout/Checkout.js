import React from 'react'
import styled from 'styled-components';
import CheckoutPayment from './checkoutPayment';
import CheckoutAddress from './checkoutAddress';
import OrderSummary from './OrderSummary';

function Checkout() {
  return (
    <CheckoutWrapper>
      <InfoColumn>
        <CheckoutAddress />
        <CheckoutPayment />
      </InfoColumn>
      <OrderSummary />
    </CheckoutWrapper>
  )
}

export default Checkout;

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 50rem;
  background-color: moccasin;
  border-radius: 2rem;
`