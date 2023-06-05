import React from 'react'
import styled from 'styled-components';

import Hero from './Hero';
import About from './About';
import Products from './Products';
import Testimonials from './Testimonials';
import Footer from '../Footer';

const Home = () => {
  return (
    <Container>
      <section>
        <Hero />
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
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  
`

