import React, { useState } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';

function CheckoutPayment() {

  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCVC, setCardCVC] = useState('')

  return (
    <Wrapper>
      <label>
        Card Number:
        <Input 
          full
          value={cardNumber}
          type='text'
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </label>
      <Row>
        <label>
          Expiration Date:
          <Input 
            value={cardExpiration}
            type='text'
            onChange={(e) => setCardExpiration(e.target.value)}
          />
        </label>
        <label>
          CVC:
          <Input 
            value={cardCVC}
            type='text'
            onChange={(e) => setCardCVC(e.target.value)}
          />
        </label>
      </Row>
    </Wrapper>
  )
}

export default CheckoutPayment;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`