import styled from "styled-components";

// botoes dos menus que abrem os modais com os cardápios
export const ButtonCard = styled.button `
background-color: #262322;
cursor: pointer;
padding: 0.1rem;
border-radius: 0.4rem;
border: none;
width: 100%;


&&:hover {
    background-color: #FFAE1A;
    
}

`
export const Content = styled.div `
font-size: 1.5em;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Lato', sans-serif;
`

// era o parágrafo "salão", mas resolvi tirar - nao vi necessidade
export const Title = styled.p `
color: #F7F7FF;
width: 100%;

font-family: 'Lato', sans-serif;


`