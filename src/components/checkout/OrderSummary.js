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
  width: 35%;
  height: 50rem;
  padding: 1rem;
  background-color: moccasin;
  border-radius: 2rem;
`