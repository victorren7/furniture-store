import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { database } from '../../utils/database';

import leftArrow from '../../assets/left-icon.png'


const Shop = () => {


  function product() {

    return database.map((product, i) =>  (
      <Product>
        <Image alt={product.name} src={product.image} />
        <ProductTitle>{product.name}</ProductTitle>
        <Price>${product.price.toLocaleString()}.00</Price>
      </Product>
    ))

  }
  

  return (
    <Container>
      <Header>
        <H1>Renderos Furniture</H1>
      </Header>
      <ProductContainer>
        <Link to='/'>
          <Icon alt='back-arrow' src={leftArrow} />
        </Link>
        <ProductMap>
          {product()}
        </ProductMap>
      </ProductContainer>
    </Container>
  )
}

export default Shop

const Container = styled.div`
  height: 100%
`

const Header = styled.div`
  display: flex;
  height: 14rem;
  align-items: center;
  justify-content: center;
  background-color: #F3F4E7;
  border-bottom: 1px solid lightgrey;
`

const H1 = styled.h1`
  font-size: 40px;
`

const ProductContainer = styled.div`
  padding: 0;
  padding-bottom: 2rem;
  background-color: #F3F4E7;

`

const ProductMap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin: 4rem 0 8rem 0;

`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 18px;
`

const Image = styled.img`
  width: 25rem;
  border-radius: .5rem;
`

const ProductTitle = styled.span`

`

const Price = styled.span`
  font-weight: bold;
`

const Icon = styled.img`
  width: 3rem;
  margin: 4rem;
`