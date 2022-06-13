import React from 'react';
import BodyContainer from '../../source/BodyComponent/index'
import LoginComponent from '../../source/LoginComponent';
import BurgerImg from '../../source/img/burgerlogo.png'

export default function LoginPage (props) {
    return (
        <>
            <BodyContainer>
                <img src={BurgerImg} />
                <LoginComponent />
            </BodyContainer>
        </>
    )
} 
