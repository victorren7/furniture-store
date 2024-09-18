import React from 'react'
import styled from 'styled-components';


function Label({title}) {

  return (
    <LabelStyled >
      {title}
    </LabelStyled>
  )

}

const LabelStyled = styled.label`
font-size: 15px;
`

export default Label;