import React, {useState} from 'react';
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';
import styled from 'styled-components';

const initialState = [
  {id: 1, name: "John", email: "john@example.com", job: "frontend", pay: 500},
  {id: 2, name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
  {id: 3, name: "Susan", email: "susan@example.com", job: "db", pay: 700},
  {id: 4, name: "Sue", email: "sue@example.com", job: "ai", pay: 800},
]


function EmployeePage() {
  const [infos, setInfos] = useState(initialState);
  return (
    <Container> 
      <EmployeeTable
        infos={infos}
      />
      <RegisterDiv>
        <Register
          setInfos={setInfos}
        />
      </RegisterDiv>
      
      
    </Container>
  )
}

export default EmployeePage;

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  background: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const RegisterDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center
`