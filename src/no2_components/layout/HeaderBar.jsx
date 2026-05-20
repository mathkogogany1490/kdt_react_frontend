import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function HeaderBar({loginMode, setLoginMode}) {

    const navigate = useNavigate();

    const handleLogout = () => {
        setLoginMode(prev => (
            {...prev, isLogin: false, username: ""}
        ));

        alert("로그아웃 되었습니다.");
        navigate("/login");
    }

    return (
        <Container>

            <Logo>
                MySystem
            </Logo>

            <Menu>
                {
                    loginMode.isLogin ?
                    <>
                        <UserButton>
                            안녕하세요! {loginMode.username} 고객님
                        </UserButton>

                        <LogoutButton
                            onClick={handleLogout}
                        >
                            로그아웃
                        </LogoutButton>
                    </>
                    :
                    <>
                        <LoginButton
                            onClick={() => navigate("/login")}
                        >
                            로그인
                        </LoginButton>

                        <RegisterButton
                            onClick={() => navigate("/register")}
                        >
                            회원가입
                        </RegisterButton>
                    </>
                }
            </Menu>

        </Container>
    )
}

export default HeaderBar;


/********************************
 styled-components
 ********************************/

const Container = styled.header`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 32px;

    background: #2c3e50;

    box-shadow: 0 2px 8px rgba(0,0,0,0.15);

    box-sizing: border-box;
`

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;

    color: #4dabf7;

    cursor: pointer;

    transition: 0.2s;

    &:hover{
        opacity: 0.8;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const BaseButton = styled.button`
    border: none;
    outline: none;

    padding: 10px 16px;

    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover{
        transform: translateY(-1px);
    }
`

const UserButton = styled(BaseButton)`
    background: #495057;
    color: white;

    &:hover{
        background: #343a40;
    }
`

const LogoutButton = styled(BaseButton)`
    background: #fa5252;
    color: white;

    &:hover{
        background: #f03e33;
    }
`

const LoginButton = styled(BaseButton)`
    background: white;
    color: #2c3e50;

    &:hover{
        background: #dee2e6;
    }
`

const RegisterButton = styled(BaseButton)`
    background: #339af0;
    color: white;

    &:hover{
        background: #228be6;
    }
`