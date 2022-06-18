import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userRegister } from '../../Api/api';
import  { ErrorAlert }  from '../../Api/ErrorMsg';
import { getToken } from '../../Api/localStorage';

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
    cursor: pointer;
`

const FormStyled = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function SubmitComponent () {
    const [userName, setName] = useState ("");
    const [userEmail, setEmail] = useState ("");
    const [userPassword, setPassword]  = useState ("");
    const [userRole, setRole] = useState ("hall");
    const [errorMessage, setErrorMessage] = useState ("");

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await userRegister (userName, userEmail, userPassword, userRole);
            if(response.status === 200) {
                const data = await response.json();
                console.log(data.token);
                getToken(data.token);
                navigate("/");
            }
             setErrorMessage(errorMessage(response));
        }   catch(error) {
            console.log(error);
        }
    }

    return(
        <>
        <MainDiv>
            <CentralContainer>
            <SubmitTitle>Cadastre seus dados</SubmitTitle>
            <FormStyled onSubmit={handleSubmit}>
                <SubmitInput placeholder="Registre seu nome"
                inputType="text"
                inputValue={userName}
                inputOnChange={(event) => setName(event.target.value)} />

                <SubmitInput placeholder="Registre seu email"
                inputType="text"
                inputValue={userEmail}
                inputOnChange={(event) => setEmail(event.targe.value)} />

                <SubmitInput placeholder="Registre sua senha"
                inputType="password"
                inputValue={userPassword}
                inputOnChange={(event) => setPassword(event.target.value)} />
                <div>
                    <label>
                        <input type="radio"
                         value="hall"
                         name="role"
                         checked={userRole === "hall"}
                         onChange ={(e) => setRole (e.target.value)} />
                    </label>
                    <label>
                        <input type="radio" 
                        value="kitchen"
                        name="role"
                        checked={userRole === "kitchen"}
                        onChange={(e) => setRole(e.target.value)} />
                    </label>
                </div>
                <ButtonInput onClick={handleSubmit} type="submit">Cadastrar</ButtonInput>
                <ErrorAlert 
                disable={errorMessage ? false : true}
                message={errorMessage} />
            </FormStyled>
            </CentralContainer>
        </MainDiv>
        </>
    )
}