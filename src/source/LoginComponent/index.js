import React, {useCallback}from "react";
import styled from 'styled-components'
// import { userLogin } from "../../Api/api";
import {useNavigate} from 'react-router-dom';

const LoginInput = styled.input`
    width: 30vh;
    margin-top: 10px;
    padding: 20px;
    border: none;
    outline: none;
`

const ButtonInput = styled.button`
    background-color: C8C9CD;
    width: 15vh;
    margin-top: 10px;
    padding: 15px;
    border: none;
    background-color: red;
    color: white;
    outline: none;
`

const CentralDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AlertText = styled.p`
  font-size: 24px;
  font-weight: bold;
`

const SigninUpButton = styled.h1`
    color: red;

`

// const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await userLogin(userEmail, userPassword);
//       if (response.status === 200) {
//         const data = await response.json();
//         console.log(data.token);
//         setToken(data.token);
//         navigate(data.role === "hall" ? "/allorders" || "/hall" : "/allorders");
//       }
//       setErrorMessage(errorCode(response));
//     } catch (error) {
//       console.log(error);
//     }
//   };

export default function LoginComponent () {

    const navigate = useNavigate()
    const handleOnClick = useCallback (() => navigate ('/Cadastro', {replace:true}), [navigate]);
    
    return (
        <>
            <CentralDiv>
                <LoginInput placeholder="Email"></LoginInput>
                <LoginInput placeholder="Password"></LoginInput>
                <ButtonInput>Login</ButtonInput>
                <AlertText>Não tem uma conta na Burger Queen?</AlertText>
                <SigninUpButton type="button" onClick={handleOnClick}>Cadastre-se </SigninUpButton>
            </CentralDiv>
        </>
    )
}