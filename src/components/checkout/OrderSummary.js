import React from 'react'
import styled from 'styled-components';

function OrderSummary() {
  return (
    <Wrapper>
      OrderSummary
    </Wrapper>
  )
}

export default OrderSummary;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 50rem;
  background-color: moccasin;
  border-radius: 2rem;
`