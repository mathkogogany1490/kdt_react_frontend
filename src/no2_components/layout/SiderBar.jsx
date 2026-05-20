import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function SiderBar() {

    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <MobileTopBar>

                <MenuButton onClick={() => setOpen(!open)}>
                    ☰
                </MenuButton>

                <Title>
                    MySystem
                </Title>

            </MobileTopBar>

            <Container $open={open}>

                <Menu>

                    <MenuItem
                        to="/"
                        $active={location.pathname === "/"}
                    >
                        Home
                    </MenuItem>

                    <MenuItem
                        to="/todo"
                        $active={location.pathname === "/todo"}
                    >
                        할일
                    </MenuItem>

                    <MenuItem
                        to="/employee"
                        $active={location.pathname === "/employee"}
                    >
                        고용인 정보
                    </MenuItem>

                </Menu>

            </Container>
        </>
    )
}

export default SiderBar;


/********************************
 styled-components
 ********************************/

const MobileTopBar = styled.div`
    display: none;

    @media (max-width: 768px) {

        width: 100%;
        height: 60px;

        background: #1e293b;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 16px;

        box-sizing: border-box;

        position: fixed;
        top: 0;
        left: 0;

        z-index: 1000;
    }
`

const Title = styled.div`
    color: white;
    font-size: 18px;
    font-weight: bold;
`

const MenuButton = styled.button`
    border: none;
    background: transparent;

    color: white;

    font-size: 28px;

    cursor: pointer;
`

const Container = styled.aside`
    width: 240px;
    min-height: 100vh;

    background: #1e293b;

    display: flex;
    flex-direction: column;

    padding: 24px 16px;

    box-sizing: border-box;

    box-shadow: 2px 0 10px rgba(0,0,0,0.1);

    transition: all 0.3s ease;

    @media (max-width: 768px){

        position: fixed;

        top: 60px;

        left: ${({ $open }) => ($open ? "0" : "-100%")};

        width: 240px;

        height: calc(100vh - 60px);

        z-index: 999;

        overflow-y: auto;
    }
`;

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const MenuItem = styled(Link)`
    text-decoration: none;

    padding: 14px 18px;

    border-radius: 10px;

    font-size: 16px;
    font-weight: 500;

    white-space: nowrap;

    color: ${({ $active }) =>
    $active ? "#ffffff" : "#cbd5e1"};

    background: ${({ $active }) =>
    $active ? "#3b82f6" : "transparent"};

    transition: all 0.2s ease;

    &:hover {
        background: #334155;
        color: white;
    }
`