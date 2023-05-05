import React from 'react'
import styled from 'styled-components';
import homeImage from './home-marquee.jpeg'

const Home = () => {
  return (
    <div>
      <Header>
        <Image alt='header' src={homeImage}/>
        <h1>HEllo</h1>
      </Header>
    </div>
  )
}

export default Home

const Header = styled.div`
 
`

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  transform: scaleX(-1);
`