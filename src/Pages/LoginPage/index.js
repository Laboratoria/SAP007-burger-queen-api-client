import React from 'react';
import styled from 'styled-components';
import LoginComponent from '../../source/LoginComponent'
import BurgerLogo from '../../source/img/burgerlogo.png'


const MainDiv = styled.div`
    background-color: red;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CentralContainer = styled.div`
    background-color: #e6d820;
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function LoginPage () {
    return (
        <>
            <MainDiv>
                <CentralContainer>
                    <img src={BurgerLogo} alt="BurgerLogo" />
                    <LoginComponent />
                </CentralContainer>
            </MainDiv>
        </>
    )
} 
