import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { State, City }  from 'country-state-city';
import { isEmpty } from 'lodash';
import Input from '../components/Input';
function CheckoutAddress() {

  const countryStates = State.getStatesOfCountry('US')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [citiesOfState, setCitiesOfState] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')


  const getCities = (e) => {
    setState(e.target.value)
    const cityStates = City.getCitiesOfState('US', e.target.value)
    setCitiesOfState(cityStates)
  }
  
  return (
    <Wrapper>
      <Title>
        Address  
      </Title>
      <Form>
        <AddRow>
          <Label>
            First Name:
            <Input 
              value={firstName} 
              type='text' 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </Label>
          <Label>
            Last Name
            <Input 
              value={lastName} 
              type='text' 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </Label>
        </AddRow>
        <Label>
          Address:
          <Input 
            value={address} 
            type='text' 
            onChange={(e) => setAddress(e.target.value)} 
            full 
          />
        </Label>
        <AddRow>
          <Label>
            State:
            <Select id='State' onChange={(e) => getCities(e)} >
              {Object.values(countryStates).map((state) => {
                return <option value={state.isoCode} key={state.name}>{state.name}</option>
              })}
            </Select>
          </Label>
          <Label>
            City: 
            <Select name='City'>
            {Object.values(citiesOfState).map((city) => {
              return <option value={city.name} key={city.name}>{city.name}</option>
            })}
            </Select>
          </Label>
        </AddRow>
        <Label>
          Zip Code:
          <Input 
            value={zip} 
            type='text' 
            onChange={(e) => setZip(e.target.value)} 
            full
          />
        </Label>
        <Label>
          Email:
          <Input 
            value={email} 
            type='text'
            onChange={(e) => setEmail(e.target.value)} 
            full
          />
        </Label>
      </Form>
    </Wrapper>
  )
}

export default CheckoutAddress;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .7rem;
`

const Title = styled.span`
  font-size: 26px;
  margin-bottom: 1.5rem;
`

const Select = styled.select`
  width: 17rem;
  height: 3rem;
  border: .08rem lightgrey solid;
  border-radius: .5rem;
  color: grey;
  margin-top: .3rem;
  padding: .5rem;
`

const Label = styled.label`
  font-size: 15px;
`

const AddRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
