import React from "react";
import styled from 'styled-components'
import FirstPage from "../source/BodyComponent";

const ProductContainer = styled.div`
    width: 70vw;
    height: 70vw;
    border: 1px solid black;
`




export default function ProductList () {
    return(
        <>
        <FirstPage>
            <ProductContainer>
                <div></div>
            </ProductContainer>
        </FirstPage>
        </>
    )
}