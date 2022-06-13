import { React, } from 'react';
import styled from 'styled-components';
import BurgerImg from '../img/burgerlogo.png'
import LoginComponent from '../LoginComponent/index';


const MainDiv = styled.div`
    background-color: red;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
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

// const LoginArea = styled.form`
//     width: 100px;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: space-between;
// `


export default function BodyContainer (){

    const fetchBurgerQueen = () =>{
        const url = 'https://lab-api-bq.herokuapp.com/api-docs/'

        fetch(url)
        .then((response => response.json()))
        .then( burgerqueen => {
            console.log(url)
        })
    }

    
    
        
    

    return (
                <>
                <MainDiv>
                    <CentralContainer>
                        <img src={BurgerImg} alt="BurgerLogo"/>
                        <LoginComponent />                     
                    </CentralContainer>
                </MainDiv>
                </>
            )
         
}

    
    