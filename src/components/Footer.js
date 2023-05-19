import React from 'react'
import styled from 'styled-components';

import footer from '../assets/desktop-footer.jpeg'

const Footer = () => {

  const links = [
    {profile: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/victorrenderos/'},
    {profile: 'Github Profile', url: 'https://github.com/victorren7'},
    {profile: 'Email Address', url: 'renderos.victor@gmail.com'},

  ]
  return (
    <Container>
        <Image alt='Croissant Bread Beside Bowl and Mug on Table' src={footer} />
      <Content>
        <Title>Help me help you</Title>
        <LinksContent>
          {links.map((link, i) => (
            <LinkContainer>
              <H3>{link.profile}</H3>
              <Anchor href={i === 2 ? `mailto:${link.url}` : link.url} target='_blank'>{link.url}</Anchor>
            </LinkContainer>
          ))}
        </LinksContent>
      </Content>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  position: relative;
  color: #F3FADC;

`

const Image = styled.img`
  width: 100vw;
  transform: scaleX(-1);
`

const Content = styled.div`
  position: absolute;
  width: 80%;
  top: 2%;
  left: 8%;
  text-align: center;
`

const Title = styled.h2`
  font-size: 60px;
  margin-left: 3rem;
`

const LinksContent = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin-top: 10rem;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const H3 = styled.h3``

const Anchor = styled.a`
  color:  #F3FADC;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`


