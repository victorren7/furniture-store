import React from 'react'
import styled from 'styled-components';

import craftedChair  from '../../assets/crafted-chair.jpeg'
import { screenSize } from '../../utils/screensize';

const About = () => {
  return (
    <Container>
      <Flex>
        <Content>
          <H2>Crafted for you</H2>
          <p>Handmade and made-to-measure, each piece from Custom & Nooke is personal and unlike any other. Inspired by the clean lines, cozy feel, and monochromatic palette of a modern minimalist home, we ensure every single piece reflects the passion and craftsmanship we spent years developing and perfecting.</p>
        </Content>
        <Image alt='crafted-chair' src={craftedChair} />
      </Flex>
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

const Flex = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 4rem;
  margin: 5rem 0;
  align-items: center;

  @media ${screenSize.desktop} {
    flex-direction: row;
    gap: 8rem;
    margin: 10rem 0;
  }
`

const Content = styled.div`
  width: 90%;
  font-family: system-ui;

  @media ${screenSize.desktop} {
    width: 68%;

  }
`

const H2 = styled.h2`
  font-size: 60px;
  margin: 2rem 0;

  @media ${screenSize.desktop} {
    margin: 3rem 0;
  }
`

const Image = styled.img`
  width: 22rem;
  margin-bottom: 1rem;

  @media ${screenSize.tablet} {
    width: 40rem;
    height: 40rem;
  }


  @media ${screenSize.desktop} {
    margin-bottom: 0
  }
`