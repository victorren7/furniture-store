import React from 'react'
import styled from 'styled-components';

export const FurnitureUpload = () => {
  return (
    <Container>
      Add a new piece of furniture
      <Form>
        <Label>
          Name:
          <Input type='text' name='name' />
        </Label>
        <Label>
          Type:
          <Input type='text' name='type' />
        </Label>
        <Label >
          Description:
          <Input type='text' name='description' height={5}/>
        </Label>
        <Label>
          Price:
          <Input type='text' name='price' />
        </Label>
        <Label>
          Image:
          <Input type='file' name='price' />
        </Label>
        <button className="btn btn-primary" type="submit">Upload</button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  background-color: #81A969;
  width: 100vw;
  height: 100vh;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
`

const Label = styled.label`
  width: 30%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: .5rem;
  justify-content: space-between;
`

const Input = styled.input`
  width: ${props => props.width ? props.width : 17}rem;
  height: ${props => props.height ? props.height : 1.4}rem;
  border: none;
  border-radius: 0.3rem;
`

