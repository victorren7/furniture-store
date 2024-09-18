import React from 'react'
import styled from 'styled-components';


function Input({value, onChange, full}) {

  return (
    <InputStyled 
      value={value} 
      onChange={onChange} 
      full={full} 
    />
  )

}

const InputStyled = styled.input`
  width: ${props => props.full ? '35rem' : '16rem'};
  height: 2rem;
  border: .08rem lightgrey solid;
  border-radius: .5rem;
  color: grey;
  margin-top: .3rem;
  padding: .5rem;
`

export default Input;