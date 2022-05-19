import React from 'react';
import WaiterTemplate from './waiterTemplate';
import './waiter.css';

const Waiter = () =>{
  return (
    <WaiterTemplate>
      <h1 className="title-admin">Bem vindo(a) à página de atendimento!</h1>
      <p className="text-admin">Utilize esse espaço para gerenciar os pedidos e atendimento aos seus clientes.</p>
      <p className="text-admin">Aqui, você poderá:</p>
      <p className="text-admin">- Visualizar o cardápio;</p>
      <p className="text-admin">- Enviar os pedidos à cozinha;</p>
      <p className="text-admin">- Verificar os status dos pedidos;</p>
      <p className="text-admin">- Controlar o fluxo de clientes;</p>
      <p className="text-admin">Certifique-se de conferir atentamente cada pedido.</p>
      <p className="text-admin">Em caso de dúvidas, falar com a administração.</p>
      <i className="ph-hamburger"></i>
    </WaiterTemplate>
  );
}

export default Waiter;