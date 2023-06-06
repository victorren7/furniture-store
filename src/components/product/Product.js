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
  
console.log('product', product)
  
  
  return (
    <Container>
      <ProductRow>
        <Image alt={product.name} src={product.image} />
        <Column>
          <ProductName>{product.name}</ProductName>
          <Price>${product.price.toLocaleString()}.00</Price>
          <hr />
        </Column>
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
 border: 1px solid black;
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

const Image = styled.img`
  width: 35rem;
`

const ProductName = styled.span`
  font-size: 36px;
`

const Price = styled.span`
  font-size: 20px;
`

