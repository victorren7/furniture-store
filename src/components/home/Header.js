import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import homeImage from '../../assets/home-marquee.jpeg'

const Header = () => {
  return (
    <Container>
      <Image alt='Container' src={homeImage}/>
      <Title>Renderos <br/>Furniture</Title>
      <Content>
        <H1>
          Handmade for
          <br />
          your home
        </H1>
        <Button>SHOP</Button>
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
  font-fam
  font-size: 30px;
  margin-left: 3rem;
  top: 1%;
`

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  transform: scaleX(-1);
`

const Content = styled.div`
  position: absolute;
  top: 35%;
  margin-left: 3rem;
`

const H1 = styled.h1`
  font-size: 100px;
  margin: 2rem 0;
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