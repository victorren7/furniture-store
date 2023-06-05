import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import homeImage from '../../assets/home-marquee.jpeg'
import homeImageMobile from '../../assets/home-marquee-mobile.jpg'
import { screenSize } from '../../utils/screensize';

const Header = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 767;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <Container>
      <Image alt='Container' src={isMobile ? homeImageMobile : homeImage}/>
      <Title>Renderos <br/>Furniture</Title>
      <Content>
        <H1>
          Handmade for
          <br />
          your home
        </H1>
        <Button to='/shop'>SHOP</Button>
      </Content>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: relative;
  color: #fff;
`

const Title = styled.h2`
  position: absolute;
  font-size: 30px;
  margin-left: 3rem;
  top: 1%;
`

const Image = styled.img`
  width: 100vw;
  transform: scaleX(-1);
`

const Content = styled.div`
  position: absolute;
  top: 24%;
  margin-left: 3rem;

  @media ${screenSize.tablet} {
    top: 35%;
  }
`

const H1 = styled.h1`
  font-size: 62px;

  @media ${screenSize.tablet} {
    font-size: 100px;
    margin: 2rem 0;

  }
`

const Button = styled(Link)`
  display: flex;
  width: 7rem;
  height: 2.5rem;
  background-color: #81A969;
  border-radius: .2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
`