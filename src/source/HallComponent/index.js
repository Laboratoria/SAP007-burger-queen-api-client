import React,  { useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card'
import styled from 'styled-components'

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

export default function Hall (){

    const navigate = useNavigate ();
    const [info, setInfo] = useState({ client: "", table: ""});
    const [products, setProducts] = useState ([]);
    const [order, setOrder] = useState ([]);
    const [historic, setHistoric] = useState (false);
    const [error, setError] = useState ("")
    console.log(error);

    function handleLogout (){
        localStorage.removeItem("token");
        navigate("/")
    }

    return(
        <>
            <MainDiv>
                <CentralContainer>
                    <div>
                        <Card 
                        key={item.id}
                        product={item}
                        onClick={() => handleProduct(item)}/>
                    </div>
                </CentralContainer>
            </MainDiv>
        </>
    )
}