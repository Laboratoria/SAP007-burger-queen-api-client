import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
import burguerGif from '../images/burguer-gif.gif';

// fundo do modal "pedido eviado" - que deixa tudo preto e com transparência
export const Background = styled.div `
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
`

// modal pedido enviado com sucesso 
export const ModalWrapper = styled.div `
width: 100%;
height: 53vh;
box-shadow: 0 0px 63px #a2835f;
background-image: url(${burguerGif});
background-color: black;
background-repeat: no-repeat;
background-position: center;

display: grid;
position: relative;
z-index: 10;
border-radius: 10px;
background-color: white;

@media (max-width: 480px) {
    height: 60vh;       
  }

@media (max-width: 768px) {
    width: 80vw;       
  }

@media (min-width: 769px) {
width: 50vw;  
height: 50vh;   
}

@media (min-width: 1200px) {
width: 40vw;  
height: 55vh;      
}


`
// modal do pedido enviado para a cozinha - que será visto pelo cozinheiro
export const ModalContent = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;


    p{
        margin: 2.5rem;
        margin-top: 27px;
        color: #531CB3;
        font-size: 1em;
        text-align: center;
        
    }
`;

// para fechar o modal "pedido enviado com sucesso"
export const CloseModalOfMenuOptions = styled(MdClose) `
cursor: pointer;
background-color: #F7F7FF;
border-radius: 25px;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
color: #531CB3;
`;