import React from 'react'
import styled from 'styled-components';

function CheckoutAddress() {
  return (
    <Wrapper>
      <Title>
        Address  
      </Title>
      <NameCol>
        <div>
          <label>First Name:</label>
          <input value='Place Order' />
        </div>
      </NameCol>
    </Wrapper>
  )
}

export default CheckoutAddress;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 26px;
`

const NameCol = styled.div`
  display: flex;
  flex-direction: column;
`
