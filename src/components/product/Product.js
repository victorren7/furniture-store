import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { database } from '../../utils/database';


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
      <ProductRow>
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
      </ProductRow>
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

const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
  width: 90%;
  margin: 10rem;
`

const Content = styled.div`
  display: flex;
  width: 37%;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 20rem;
  height: 3rem;
  color: #fff;
  background-color: #000;
`

const Image = styled.img`
  width: 35rem;
  border-radius: .5rem;
`

const ProductName = styled.span`
  font-size: 36px;
  margin-bottom: 1rem;
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
`

