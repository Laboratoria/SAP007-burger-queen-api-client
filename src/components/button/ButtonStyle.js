import styled from "styled-components";

// btn login and register
export const Container = styled.button`
  
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 40%;
  margin-top: 20px;
  border: none;
  background: #FF5B27;
  margin-left: 10px;
  
`;

export const ButtonsHallSeeOrders = styled.button `
  width: 14rem;
  background: #FF5B27;
  border-radius: 0.4rem;
  height: 3.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #F7F7FF;
  border: none;
  
`;


// btn finalizar pedido - was secondaryButton
export const BtnKitchenFinishOrder = styled(Container)`
  background: green;
  color:  white;
  box-shadow: none;
  border: none;

  &:hover {
    background: transparent;
    border: none;
    color: green;
    box-shadow: 0 0 30px 10px #531CB3;
  }
`;

export const CancelOrder = styled(BtnKitchenFinishOrder)`
  background: #FF5B27;
  color: var(--white);
  border: none;

  &:hover {
    box-shadow: 0 0 30px 10px #531CB3;
    border: 2px solid;
    color: #9d0505;
  }
`;

export const BtnSendOrderToKitchenAndPrepareIt = styled(BtnKitchenFinishOrder)`
  background: green;
  color: white;
  border: none;

  &:hover {
    box-shadow: 0 0 30px 10px #531CB3;
    
    color: #138b2f;
  }
`;

export const BtnReadyAndDeliveredOrders = styled(Container)`
  background: #531cb3;
  color: #f7f7ff;
  border: none;

`;

// btn "fazer login"
export const ModalOfMenuOptions = styled(Container)`
  background: #F7F7FF;
  color: #262322;
  box-shadow: none;
  border: none;
  margin-bottom: 10px;

  &:hover {
    background: var(--light-orange);
    border: none;
    color: var(--black);
    box-shadow: none;
  }
`;
