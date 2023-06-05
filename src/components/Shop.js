import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import leftArrow from '../assets/left-icon.png'


const Shop = () => {

  return (
    <Container>
      <Header>
        <H1>Renderos Furniture</H1>
      </Header>
      <ProductContainer>
        <Link to='/'>
          <Icon alt='back-arrow' src={leftArrow} />
        </Link>
      </ProductContainer>
    </Container>
  )
}

export default Shop

const Container = styled.div`

`

const Header = styled.div`
  height: 8rem;
  text-align: center;
  margin-top: 2rem;
  border-bottom: 1px solid black;
`

const H1 = styled.h1`
  font-size: 40px;
`

const ProductContainer = styled.div`
  height: 100vh;
  background-color: #F3F4E7;

`

const Icon = styled.img`
  width: 3rem;
  margin: 4rem;
`