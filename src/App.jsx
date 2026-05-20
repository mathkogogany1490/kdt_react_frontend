import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'
import EmployeePage from './no1_pages/EmployeePage'
import HomePage from "./no1_pages/HomePage";
import TodoPage from "./no1_pages/TodoPage";
import styled from 'styled-components'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'

const initialUsers = [
    {id: 1, username: "john", password: "1111"},
    {id: 2, username: "peter", password: "1111"},
    {id: 3, username: "susan", password: "1111"},
    {id: 4, username: "sue", password: "1111"},
]
const initialMode ={ isLogin: false, username: ""}


function App() {
    const [userTable, setUserTable] = useState(initialUsers);
    const [loginMode, setLoginMode] = useState(initialMode);
    
    return (
        <BrowserRouter>
            <HeaderBar 
                loginMode={loginMode}
                setLoginMode={setLoginMode}
            />

            <MainContainer>

                <SiderBar />

                <Content>

                    <Routes>
                        <Route path="/login" element={<LoginPage
                            userTable={userTable}
                            setLoginMode={setLoginMode}
                        />} />
                        <Route path="/register" element={<RegisterPage
                            setUserTable={setUserTable}
                        />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/todo" element={<TodoPage />} />
                        <Route path="/employee" element={<EmployeePage />} />
                    </Routes>

                </Content>

            </MainContainer>

        </BrowserRouter>
    )
}

export default App

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 70px);

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const Content = styled.main`
    flex: 1;

    padding: 32px;

    background: #f1f5f9;

    @media (max-width: 768px){
        margin-top: 60px;
        padding: 24px 16px;
    }
`