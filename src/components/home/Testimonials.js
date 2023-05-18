import React from 'react'
import styled from 'styled-components';

import sariPurdue from '../../assets/sari-purdue.jpeg'
import musaWatson from '../../assets/musa-watson.jpeg'
import freyaMoore from '../../assets/freya-moore.jpeg'


const Testimonials = () => {

  const testimonials = [
    {img: sariPurdue, title: 'Sari Purdue', content: "Meals with my family are always extra special because of the beautiful plates I got from Custom & Nooke."},
    {img: musaWatson, title: 'Musa Watson', content: "Very pleased with my new sofa--the quality is great, it's comfortable, and elevates the look of my home."},
    {img: freyaMoore, title: 'Freya Moore', content: "I love how timeless my decor are. I just need to move things around to update the look of my space."},
  ]

  return (
    <Container>
      <Content>

        <H2>Loved by <br/> humans, made by humans</H2>
        <TestimonialsContainer>
          {testimonials.map((item, i) => (
            <Testimonial>
              <Image alt={item.title} src={item.img} />
              <Name>{item.title}</Name>
              <Span>"{item.content}"</Span>
            </Testimonial>
          ))}
        </TestimonialsContainer>
      </Content>
    </Container>
  )
}

export default Testimonials

const Container = styled.div`
  display: flex;  
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #81A969;
`

const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
`

const H2 = styled.h2`
  font-size: 60px;
  font-weight: 400;
  color: #FCF8F5;
`

const TestimonialsContainer = styled.div`
  display: flex;
  gap: 3rem;
  color: #fff;
`

const Testimonial = styled.div`
  width: 27rem;
`

const Image = styled.img`
  width: 25rem;
  height: 24.5rem;
  border-radius: .5rem;
`

const Name = styled.h3`
  font-size: 20px;
`

const Span = styled.span`
`