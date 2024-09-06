import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShoppingCart from './ShoppingCart';

import { database } from '../../utils/database';
import { screenSize } from '../../utils/screensize';

import leftIcon from '../../assets/left-icon.png'
import { addItem } from '../../features/cartSlice';


const Product = () => {
  const {productName} = useParams()
  const dispatch = useDispatch();
  const { inShoppingCart } = useSelector((store) => store.cart) 

  const [product, setProduct] = useState({})
  const [randomFive, setRandomFive] = useState([])

  useEffect(() => {
    for (let i = 0; i < database.length; i++) {
      const element = database[i];

      if (element.name === productName) {
       setProduct(element)
      }
      
    }
  }, [productName])

  useEffect(() => {
    const generator = [...database].sort(() => .5 - Math.random())

    setRandomFive(generator.slice(0, 6))
  }, [])

  const showButton = () => {
    return inShoppingCart.filter((prod) => prod.name === product.name)
  }

  async function mightLikeProducts(randomFive) {

      return randomFive.map((product, i) =>  (
        <MightLike key={i}>
        <MightLikeImage alt={product.name} src={product.image} />
        <MightLikeLink to={`/shop/${product.name}`}>
          <MightLikeTitle>{product.name}</MightLikeTitle>
        </MightLikeLink>
        <Price>${product.price.toLocaleString()}.00</Price>
      </MightLike>
    ))
  // }

  }
  
  return (
    <Container>
      <AddToCartNav>
        <ShoppingCart product={inShoppingCart} />
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
          <Button onClick={() => dispatch(addItem({product}))} >
             Add to cart
          </Button>
        </Content>
      </ProductInfo>
      <CarouselWrapper>
        <Span>You might also like</Span>
        <Carousel
          additionalTransfrom={0}
          // arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {randomFive?.map((product, i) =>  (
            <MightLike key={i}>
            <MightLikeImage alt={product.name} src={product.image} />
            <MightLikeLink to={`/shop/${product.name}`}>
            <MightLikeTitle>{product.name}</MightLikeTitle>
            </MightLikeLink>
            <Price>${product.price.toLocaleString()}.00</Price>
            </MightLike>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  )
}

export default Product

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
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

const CarouselWrapper = styled.div`
  width: 80%;
`

const Span = styled.span`
  font-size: 20px;
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

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
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

const MightLike = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 18px;
`

const MightLikeImage = styled.img`
  width: 16rem;
  border-radius: .5rem;

  @media ${screenSize.desktop} {
    width: 12rem;
  }
`

const MightLikeLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const MightLikeTitle = styled.span`
  width: 16rem;

  @media ${screenSize.desktop} {
    width: 25rem;
  }

`

