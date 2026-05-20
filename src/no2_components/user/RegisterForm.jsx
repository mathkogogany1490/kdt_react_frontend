import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const initialUser = { 
    id: "",
    username: '', 
    password: '',
    confirmPassword: ""
}

const RegisterForm = ({setUserTable}) => {

    const [user, setUser] = useState(initialUser);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser(prev => (
            {...prev, [name]: value}
        ));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!user.username){
            alert("사용자 이름을 입력하세요.");
            return;
        }

        if(!user.password){
            alert("비밀번호를 입력하세요.");
            return;
        }

        if(user.password !== user.confirmPassword){
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        setUserTable(prev => (
            [
                ...prev,
                {
                    id: Date.now(),
                    username: user.username,
                    password: user.password
                }
            ]
        ));

        alert("회원가입 성공");

        navigate("/login");
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit}>

                <Title>회원가입</Title>

                <InputGroup>
                    <Label>사용자 이름</Label>

                    <Input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="사용자 이름"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>비밀번호</Label>

                    <Input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>비밀번호 확인</Label>

                    <Input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="비밀번호 확인"
                    />
                </InputGroup>

                <ButtonGroup>

                    <RegisterButton>
                        회원가입
                    </RegisterButton>

                    <LoginButton
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        이미 회원이신가요? 로그인
                    </LoginButton>

                </ButtonGroup>

            </Form>

        </Container>
    )
}

export default RegisterForm;


/********************************
 styled-components
 ********************************/

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f1f5f9;
`

const Form = styled.form`
    width: 100%;
    max-width: 400px;

    background: white;

    padding: 40px;

    border-radius: 16px;

    box-shadow: 0 4px 20px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;

    gap: 20px;
`

const Title = styled.h2`
    text-align: center;

    color: #2c3e50;

    font-size: 28px;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`

const Label = styled.label`
    font-size: 14px;
    font-weight: 600;

    color: #495057;
`

const Input = styled.input`
    padding: 12px 14px;

    border: 1px solid #ced4da;
    border-radius: 8px;

    font-size: 14px;

    outline: none;

    transition: 0.2s;

    &:focus{
        border-color: #339af0;
        box-shadow: 0 0 0 3px rgba(51,154,240,0.2);
    }
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;
`

const BaseButton = styled.button`
    border: none;
    outline: none;

    padding: 12px;

    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;

    &:hover{
        transform: translateY(-1px);
    }
`

const RegisterButton = styled(BaseButton)`
    background: #339af0;
    color: white;

    &:hover{
        background: #228be6;
    }
`

const LoginButton = styled(BaseButton)`
    background: #e9ecef;
    color: #495057;

    &:hover{
        background: #dee2e6;
    }
`