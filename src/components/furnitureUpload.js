import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

export const FurnitureUpload = () => {

  const [postImage, setPostImage] = useState( { myFile : ""})

  function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const createPost = async (newImage) => {
    try{
      await axios.post('http://localhost:8000/api/v1/furniture', newImage)
    }catch(error){
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    console.log("Uploaded")
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
  }
  

  return (
    <Container>
      Add a new piece of furniture
      <Form onSubmit={handleSubmit}>
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
          <Input 
            type='file' 
            name='image' 
            accept='.jpeg, .png, .jpg'
            onChange={(e) => handleFileUpload(e)}
            />
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

