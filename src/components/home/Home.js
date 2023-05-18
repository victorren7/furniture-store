import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import About from './About';
import Products from '../Products';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <Container>
      <section>
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Testimonials />
      </section>
    </Container>
  )
}

export default Home

const Container = styled.div`
  
`

