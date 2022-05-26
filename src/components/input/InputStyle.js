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
    color: #262322;

    @media screen and (min-width: 728px) {
    font-size: 1em;
              
  }
`
    
export const ClientData = styled.input `
    width: 14rem;
    border: none;

    background-color: #262322;
    
    margin: 15px;
    text-align: center;
    height: 3.5rem;
    font-size: 20px;
    color: #F7F7FF;
    
    
    border-radius: 0.4rem;

    &&::placeholder {
    font-size: 1em;
    color: #F7F7FF;
}

`
