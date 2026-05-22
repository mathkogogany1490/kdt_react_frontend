// EmployeeList.jsx

import React from 'react'
import styled from 'styled-components'

const EmployeeList = ({ empTable, dispatch }) => {
  return (
    <div>

      <Title>직원 목록</Title>

      <ListBox>

        {empTable.map(item => (

          <EmployeeButton
            key={item.id}
            onClick={() => dispatch(
                {type: "select", payload: item.id}
            )}
          >
            {item.name}
          </EmployeeButton>

        ))}

      </ListBox>

    </div>
  )
}

export default EmployeeList


const Title = styled.h2`
  margin-bottom: 16px;
`

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const EmployeeButton = styled.button`
  border: none;

  padding: 10px 16px;

  border-radius: 10px;

  background: #e2e8f0;

  cursor: pointer;

  transition: 0.2s;

  &:hover{
    background: #cbd5e1;
  }
`