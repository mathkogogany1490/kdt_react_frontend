// EmployeeTable.jsx

import React from 'react'
import styled from 'styled-components'

const EmployeeTable = ({ emp }) => {

  return (
    <div>

      <Title>직원 정보</Title>

      <StyledTable>

        <thead>
          <tr>
            {emp && Object.keys(emp).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {emp && Object.values(emp).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>

      </StyledTable>

    </div>
  )
}

export default EmployeeTable


const Title = styled.h2`
  margin-bottom: 16px;
`

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;

  th{
    background: #1e293b;
    color: white;
  }

  th, td{
    border: 1px solid #cbd5e1;
    padding: 14px;
    text-align: center;
  }

  tbody tr:hover{
    background: #f8fafc;
  }
`