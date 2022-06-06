import { React,} from 'react';
import styled from 'styled-components';
// import { URL } from '../Api/localStorage';

const MainDiv = styled.div`
    background-color: red;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

const CentralContainer = styled.div`
    background-color: yellow;
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
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

    return (
                <>
                <MainDiv>
                    <CentralContainer>                        
                    </CentralContainer>
                </MainDiv>
                </>
            )
         
}

    
    