// EmployeeRegister.jsx

import React, { useState } from 'react'
import styled from 'styled-components'

const initialEmp = {
  id: "",
  name: "",
  email: "",
  job: "",
  pay: ""
}

const EmployeeRegister = ({ dispatch }) => {
    
  const [newEmp, setNewEmp] = useState(initialEmp);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewEmp(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Date.now().toString();
    dispatch({type: "register", payload: {newEmp, newId}})
    setNewEmp(initialEmp);

  }

  return (
    <div>

      <Title>직원 등록</Title>

      <Form onSubmit={handleSubmit}>

        <Input
          type="text"
          name="name"
          value={newEmp.name}
          onChange={handleChange}
          placeholder='이름'
        />

        <Input
          type="email"
          name="email"
          value={newEmp.email}
          onChange={handleChange}
          placeholder='이메일'
        />

        <Input
          type="text"
          name="job"
          value={newEmp.job}
          onChange={handleChange}
          placeholder='직업'
        />

        <Input
          type="number"
          name="pay"
          value={newEmp.pay}
          onChange={handleChange}
          placeholder='급여'
        />

        <SubmitButton>
          등록
        </SubmitButton>

      </Form>

    </div>
  )
}

export default EmployeeRegister


const Title = styled.h2`
  margin-bottom: 20px;
`

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Input = styled.input`
  width: 100%;

  padding: 14px;

  border-radius: 10px;
  border: 1px solid #cbd5e1;

  outline: none;

  &:focus{
    border: 1px solid #3b82f6;
  }
`

const SubmitButton = styled.button`
  border: none;

  padding: 14px;

  border-radius: 10px;

  background: #3b82f6;
  color: white;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
`