import React, { useState } from 'react'
import styled from 'styled-components';

const initialState = {
  id: '', name: "", email: "", job: "", pay: ""
}

const Register = ({setInfos}) => {
  const [info, setInfo] = useState(initialState);
  const handleChange = (event) => {
    const {name, value} = event.target;
    setInfo(prev => (
      {...prev, [name]:value}
    ))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setInfos(prev => (
      [...prev, info]
    ))

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Title>직원 등록</Title>
      <InputGroup>
        <Label>이름</Label>
        <Input 
          type="text" 
          name="name"
          value={info.name}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>이메일</Label>
        <Input 
          type="email" 
          name="email"
          value={info.email}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>직업</Label>
        <Input 
          type="text" 
          name="job"
          value={info.job}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>급여</Label>
        <Input 
          type="number" 
          name="pay"
          value={info.pay}
          onChange={handleChange}
        />
      </InputGroup>
      <SubmitButton>제출</SubmitButton>
      
    </Form>
  )
}

export default Register;


const Form = styled.form`
  width: 50%;
  marigin-top: 24px;
  background: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
`
const Title = styled.h2`
  color: #1e293b;
  font-size: 24px;
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #475569;
`

const Input = styled.input`
  outline: none;
  height: 45px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0 14px;
  font-size: 15px;
  
  transition: 0.2s;
  &:focus{
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`

const SubmitButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 12px;
  background: #3b82f6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    background: #2563eb;
  }

`
