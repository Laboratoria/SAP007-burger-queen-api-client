import React from 'react';
import ChefTemplate from './chefTemplate';
import './chef.css';

const Chef = () =>{
  return (
    <ChefTemplate>
      <h1 className="title-admin">Bem vindo(a) à página da cozinha!</h1>
      <p className="text-admin">Utilize esse espaço para gerenciar os pedidos e preparo dos alimentos.</p>
      <p className="text-admin">Aqui, você poderá:</p>
      <p className="text-admin">- Visualizar todos os pedidos;</p>
      <p className="text-admin">- Atualizar os pedidos pendentes;</p>
      <p className="text-admin">- Atualizar os pedidos em preparo;</p>
      <p className="text-admin">- Atualizar os pedidos prontos para entrega;</p>
      <p className="text-admin">- Visualizar os pedidos entregues.</p>
      <p className="text-admin">Em caso de dúvidas, falar com a administração.</p>
      <i className="ph-cooking-pot"></i>
    </ChefTemplate>
  );
}

export default Chef;