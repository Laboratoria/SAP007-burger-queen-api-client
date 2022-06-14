import React from 'react';
import styled from 'styled-components';

const SubmitTitle = styled.h2`
    font-weight: bold;
    color: black;
`

const SubmitInput = styled.input`
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

// name: userName,
//       email: userEmail,
//       password: userPassword,
//       role: userRole,

export default function SubmitComponent () {
    return(
        <>
            <SubmitTitle>Cadastre seus dados</SubmitTitle>
            <SubmitInput placeholder="Registre seu email"></SubmitInput>
            <SubmitInput placeholder="Registre sua senha"></SubmitInput>
            <ButtonInput>Cadastrar</ButtonInput>
        </>
    )
}