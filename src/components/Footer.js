import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import footer from '../assets/desktop-footer.jpeg'
import mobileFooter from '../assets/mobile-footer.jpeg'
import { screenSize } from '../utils/screensize';


const Footer = () => {

  const links = [
    {profile: 'Github Profile', url: 'https://github.com/victorren7'},
    {profile: 'Email Address', url: 'renderos.victor@gmail.com'},
    {profile: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/victorrenderos/'}
  ]


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
        <Image alt='Croissant Bread Beside Bowl and Mug on Table' src={isMobile ? mobileFooter : footer} />
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

  @media ${screenSize.tablet} {
    height: 100vh;
  }

  // @media ${screenSize.tablet} {

`

const Content = styled.div`
  position: absolute;
  width: 88%;
  top: 2%;
  left: 8%;
  text-align: center;

  @media ${screenSize.tablet} {
    width: 80%;
  }
`

const Title = styled.h2`
  font-size: 60px;
  
  @media ${screenSize.tablet} {
    margin-left: 3rem;
  }
`

const LinksContent = styled.div`
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 3rem;

  @media ${screenSize.tablet} {
    flex-direction: row;
    margin-top: 10rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

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


