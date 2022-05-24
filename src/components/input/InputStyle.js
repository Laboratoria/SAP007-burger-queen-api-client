import styled from "styled-components";

export const Container = styled.div `
   display: inline-block;
   width: 100%;

   @media screen and (min-width: 481px) {
        width: 80%;
    }

   @media screen and (min-width: 768px) {
        width: 60%;
    }
        
    @media screen and (min-width: 1024px) {
        width: 51%;
            
    }


`
export const StyleInput = styled.input `
    color: black;
    border: 1px solid black;
    background: none;
    outline: none;
    padding: 0.8rem;
    border-radius: 0.4rem;
    transition: 0.2s;
    display: block;
    height: 2rem;
    width: 100%;

    &:focus{
    border: 1px solid var(--light-orange);
    }
`

export const Label = styled.label `
    display: block;
    width: 360px;
    line-height: 1;
    padding-bottom: 0.5rem;
    margin-top: 15px;
    text-align: left;
    color: #FFAE1A;

    @media screen and (min-width: 728px) {
    font-size: 1em;
              
  }
`

export const ClientData = styled.input `
    min-width: 260px;
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    outline: none;
    margin: 20px;
    text-align: center;
    height: 50px;
    font-size: 20px;
    color: black;
    min-width: 260px;
    border: 1px solid black;
    border-radius: 20px;

    &&::placeholder {
    font-size: 1em;
    color: black;
}
`
    





