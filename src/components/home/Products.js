import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import stoneware from '../../assets/stoneware.jpeg'
import furnitureChair from '../../assets/furniture-chair.jpg'
import frame from '../../assets/frame.jpeg'
import { screenSize } from '../../utils/screensize';


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
          <Button to='/shop'>VIEW PRODUCTS</Button>
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
  width: 100%;
  justify-content: center;
  align-items:center;
  background-color: #F3F4E7;
`

const Flex = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;
  padding-bottom: 7rem;

  @media ${screenSize.tablet} {
    margin: 10rem 4rem;
    padding-bottom: 0;
  }

  @media ${screenSize.desktop} {
    flex-direction: row;

  }
`

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media ${screenSize.desktop} {
    flex-direction: row;
    flex-flow: wrap;
  }
`

const Content = styled.div`
  align-self: center;

  @media ${screenSize.desktop} {
    align-self: flex-start;
  }
`

const H2 = styled.h2`
  font-size: 50px;
`

const Product = styled.div`
  width: 19rem;

`

const Image = styled.img`
  max-width: 100%;
  width: 22rem;
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
  border-radius: .2rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #81A969;
  text-decoration: none;
  color: #fff;

  @media ${screenSize.desktop} {
    margin: inherit;
  }
`