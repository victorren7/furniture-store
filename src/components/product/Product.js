import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import { database } from '../../utils/database';
import { screenSize } from '../../utils/screensize';

import leftIcon from '../../assets/left-icon.png'
import cartIcon from '../../assets/cart-icon.png'


const Product = () => {
  const {productName} = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    for (let i = 0; i < database.length; i++) {
      const element = database[i];

      if (element.name === productName) {
       setProduct(element)
      }
      
    }
  }, [productName])
  
  return (
    <Container>
      <AddToCartNav>
        <CartButton>
          <CartImage src={cartIcon} alt='cart button' />
        </CartButton>
      </AddToCartNav>
      <BackLink to={'/shop'}>
        <ArrowImg src={leftIcon} alt='back-to-shop'/>
        <span>Back to shop</span>
      </BackLink>
      <ProductInfo>
        <Image alt={product.name} src={product.image} />
        <Content>
          <Column>
            <ProductName>{product.name}</ProductName>
            <Price>${product.price ? product.price.toLocaleString() : '000'}.00</Price>
            <Hr />
            <Description>{product.description}</Description>
          </Column>
          <Button>Add to cart</Button>
        </Content>
      </ProductInfo>
      <Carousel>

      </Carousel>
    </Container>
  )
}

export default Product

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddToCartNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid black;

  @media ${screenSize.desktop} {
    height: 6rem;
  }
`

const CartButton = styled.button`
  margin-right: 2rem;
`

const CartImage = styled.img`
  width: 2rem;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  margin: 5rem 10rem 10rem 10rem;

  @media ${screenSize.desktop} {
    gap: 5rem;

  }

  @media ${screenSize.desktop} {
    flex-direction: row;
    gap: 15rem;

  }
`

const Content = styled.div`
  display: flex;
  width: 85%;
  align-self: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${screenSize.desktop} {
    width: 37%;
    align-self: normal;

  }
`

const Carousel = styled.div`
  width: 15rem;
  height: 10rem;
  border: 1px solid red;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  color: #fff;
  border-radius: 0.5rem;
  background-color: #000;
`

const Image = styled.img`
  width: 22rem;
  align-self : center;
  border-radius: .5rem;

  @media ${screenSize.tablet} {
    width: 35rem;
  }
`

const BackLink = styled(Link)`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: .5rem;
  margin: 5rem 0 0 6rem;
  color: black;
  text-decoration: none;
`

const ProductName = styled.span`
  font-size: 36px;
  margin-bottom: 2rem;

  @media ${screenSize.desktop} {
    margin-bottom: 1rem;

  }
`

const Price = styled.span`
  font-size: 20px;
  margin-bottom: 1rem;
`

const Hr = styled.hr`
  width: 100%;
`

const Description = styled.span`
  font-size: 14px;
  margin-top: .5rem;
  margin-bottom: 5rem;


  @media ${screenSize.desktop} {
    margin-bottom: 0;
  }
`

const ArrowImg = styled.img`
  width: 1.5rem;

`

