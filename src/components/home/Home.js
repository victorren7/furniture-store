import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import About from './About';
import Products from '../Products';

const Home = () => {
  return (
    <Container>
      <Header />
      <About />
      <Products />
    </Container>
  )
}

export default Home

const Container = styled.div`
  
`

