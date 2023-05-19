import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import stoneware from '../../assets/stoneware.jpeg'
import furnitureChair from '../../assets/furniture-chair.jpg'
import frame from '../../assets/frame.jpeg'


const Products = () => {

  const products = [
    {img: stoneware, title: 'Stoneware', content: 'Artisanal designs that make every day a feast'},
    {img: furnitureChair, title: 'Furniture', content: 'Casual yet sophisticated pieces for every room in the house'},
    {img: frame, title: 'Decor', content: 'Elements that give the room an elevated look'},

  ]
  return (
    <Container>
      <Flex>
        <Content>
          <H2>Perfect for <br /> your home</H2>
          <Button>VIEW PRODUCTS</Button>
        </Content>

        <ProductContainer>
          {products.map((product, i) => (
            <Product>
              <Image alt={product.title} src={product.img} />
              <Title>{product.title}</Title>
              <Span>{product.content}</Span>
            </Product >
          ))}
         
        </ProductContainer>
      </Flex>
    </Container>
  )
}

export default Products

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items:center;
  background-color: #F3F4E7;
`

const Flex = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10rem;
  // border: 1px solid black;
`

const ProductContainer = styled.div`
  display: flex;
  gap: 3rem;
`

const Content = styled.div``

const H2 = styled.h2`
  font-size: 50px;
`

const Product = styled.div`
  width: 19rem;

`

const Image = styled.img`
  width: 19rem;
  height: 28rem;
`

const Title = styled.h3`
  font-size: 20px;
`

const Span = styled.span`
  
`

const Button = styled(Link)`
  display: flex;
  width: 10rem;
  height: 2.5rem;
  background-color: #81A969;
  border-radius: .2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
`