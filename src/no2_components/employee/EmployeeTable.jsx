import React from 'react'
import styled from 'styled-components';

const EmployeeTable = ({infos}) => {
  return (
    <Container>
        <Title>직원 목록</Title>
        <Table>
            <thead>
                <Tr>
                    {Object.keys(infos[0]).map(key => (
                        <Th>{key}</Th>
                    ))}
                </Tr>
            </thead>
            <tbody>
                {infos.map(item => (
                    <Tr>
                        {Object.values(item).map(value => (
                            <Td>{value}</Td>
                        ))}
                    </Tr>
                ))}
            </tbody>
        </Table>

    </Container>
  )
}

export default EmployeeTable;

const Container = styled.div`
    width: 100%;
    background: white;
    padding: 24px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    overflow-x: auto;
`


const Title = styled.h2`
    margin-bottom: 20px;
    color: #1e293b;
    font-size: 24px;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const Tr = styled.tr`
    transition: 0.2s;
    &:hover{
        background: #f8fafc;
    }
`


const Th = styled.th`
    background: #3b82f6;
    color: white;
    padding: 14px;
    text-align: left;
    font-size: 15px;
`

const Td = styled.td`
    padding: 14px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
`