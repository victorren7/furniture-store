import React from 'react'
import styled from 'styled-components';

import craftedChair  from '../../assets/crafted-chair.jpeg'

const About = () => {
  return (
    <Container>
      <Grid>
        <Content>
          <H1>Crafted for you</H1>
          <p>Handmade and made-to-measure, each piece from Custom & Nooke is personal and unlike any other. Inspired by the clean lines, cozy feel, and monochromatic palette of a modern minimalist home, we ensure every single piece reflects the passion and craftsmanship we spent years developing and perfecting.</p>
        </Content>
        <Image alt='crafted-chair' src={craftedChair} />
      </Grid>
    </Container>

  )
}

export default About

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: #F3FADC;
`

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 70%;
  height: 70%;
  margin: 4rem 0;
  align-items: center;
`

const Content = styled.div`
  width: 80%;
  font-family: system-ui;
`

const H1 = styled.h1`
  font-size: 60px;
`

const Image = styled.img`
  width: 36rem;
  height: 36rem;
`