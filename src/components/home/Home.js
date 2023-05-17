import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import About from './About';

const Home = () => {
  return (
    <Container>
      <Header />
      <About />
    </Container>
  )
}

export default Home

const Container = styled.div`
  
`

