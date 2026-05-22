// EmployeePage.jsx

import React, { useState, useEffect, useReducer, act } from 'react'
import styled from 'styled-components'

import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'

const initialEmps = [
  { id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 500 },
  { id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600 },
  { id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 700 },
  { id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 800 },
]

const initialEmp = {
  id: "",
  name: "",
  email: "",
  job: "",
  pay: ""
}

const initialState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: "",
  selectedId: ""
}

// state(데이터)와 action(함수) 한 곳에서 관리하는 방법 : reducers
const reducer = (state, action) => {
  switch(action.type){
    case "select":
      return {
        ...state,
        selectedId: action.payload
      }
    case "set_emp":
      return{
        ...state,
        emp: action.payload
      }
      case "set_mode":
        return {
          ...state,
          mode: action.payload
        }
      case "register":
        return{
          ...state,
          empTable: [
            ...state.empTable,
            {
              ...action.payload.newEmp,
              id: action.payload.newId
            }
          ],
          selectedId: action.payload.newId,
          mode: "register"
        }
      case "update":
        return{
          ...state,
          empTable: state.empTable.map(item=>(
            item.id === action.payload.id ?
            action.payload : item
          )),
          mode: "update"
        }
      case "delete":
        return{
          ...state,
          empTable: state.empTable.filter(item=>(
            item.id !== state.selectedId
          )),
          emp: initialEmp,
          selectedId: "",
          mode: action.payload
        }
      default: 
        return;
  }
}

const EmployeePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { empTable, emp, mode, selectedId } = state;

  useEffect(() => {

    if (selectedId) {
      dispatch({
        type: "set_emp",
        payload: empTable.find(item=>item.id===selectedId)
      })
    }

  }, [selectedId, empTable]);


  return (
    <Container>

      <Title>직원 관리 시스템</Title>
      {/* {console.log("register", state.empTable)} */}

      <Card>
        <EmployeeList
          empTable={empTable}
          dispatch={dispatch}
        />
      </Card>

      <Card>
        <EmployeeTable
          emp={emp}
        />
      </Card>

      <ButtonGroup>

        <ActionButton
          onClick={() =>
            dispatch(
              {type:"set_mode", payload: "register"}
            )
          }
        >
          등록
        </ActionButton>

        <ActionButton
          onClick={() =>
            dispatch(
              {type:"set_mode", payload: "update"}
            )
          }
        >
          수정
        </ActionButton>

        <DeleteButton
          onClick={() =>
            dispatch(
              {type:"set_mode", payload: "delete"}
            )
          }
        >
          삭제
        </DeleteButton>

      </ButtonGroup>

      <Card>

        {mode === "register" ? (

          <EmployeeRegister
            dispatch={dispatch}
          />

        ) : mode === "update" ? (

          <EmployeeUpdate
            emp={emp}
            dispatch={dispatch}
          />

        ) : mode === "delete" ? (

          <DeleteBox>

            <p>위 데이터를 삭제하시겠습니까?</p>

            <DeleteButton onClick={()=>
              dispatch(
                {type: "delete", payload:"delete"})
              }
            >
              삭제하기
            </DeleteButton>

          </DeleteBox>

        ) : null}

      </Card>

    </Container>
  )
}

export default EmployeePage


const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background: #f1f5f9;
`

const Title = styled.h1`
  font-size: 32px;
  color: #1e293b;
`

const Card = styled.div`
  width: 100%;

  background: white;

  padding: 24px;

  border-radius: 20px;

  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`

const ActionButton = styled.button`
  border: none;

  padding: 12px 18px;

  border-radius: 10px;

  background: #3b82f6;
  color: white;

  cursor: pointer;

  font-size: 15px;
  font-weight: bold;

  transition: 0.2s;

  &:hover{
    opacity: 0.85;
  }
`

const DeleteButton = styled(ActionButton)`
  background: #ef4444;
`

const DeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`