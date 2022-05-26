import styled from "styled-components";

// modal do menu e da comanda - fundo 
export const BackgroundCard = styled.div`    
  width: 
  height: auto;
  background-color: #FFAE1A;
  border-radius: 10px;
  animation: up 1s;
  background-repeat: round;
  padding-top: 15px;
  padding-bottom: 23px;
 
`;
// style apenas do modal menu em MenuCardModal.js 
export const BackgroundCardMenuAndOrder = styled.div`    
  width: 
  height: auto;
  background-color: #F7F7FF;
  border-radius: 10px;
  animation: up 1s;
  background-repeat: round;
  padding-top: 15px;
  padding-bottom: 23px;

  p {
    color: black;
  }
  button {
    background-color: #F7F7FF;
    border: none;
    color: black;
  }
 
`;

// modal do menu e da comanda - produtos, valores e quantidades
export const DivProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8em auto;
  padding: 0.5em;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
export const DivProductKitchen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0.8em auto;
  padding: 0.5em;
`;