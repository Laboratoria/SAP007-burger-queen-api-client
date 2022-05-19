import React from 'react';
import AdminTemplate from './adminTemplate';
import './admin.css';

const Admin = () =>{
  return (
    <AdminTemplate>
      <h1 className="title-admin">PÁGINA DE ADMINISTRAÇÃO</h1>
      <p className="text-admin">Utilize esse espaço para gerenciar as contas criadas para seus funcionários.</p>
      <p className="text-admin">Aqui, você poderá:</p>
      <p className="text-admin">- Listar os cadastros;</p>
      <p className="text-admin">- Criar novos cadastros;</p>
      <p className="text-admin">- Alterar os cadastros;</p>
      <p className="text-admin">- Deletar os cadastros;</p>
      <p className="text-admin">Certifique-se de atualizar atentamente os dados cadastrais aqui inseridos.</p>
      <p className="text-admin">Em caso de dúvidas, falar com as pessoas desenvolvedoras desse site:</p>
      <p className="text-admin">Amanda Gusmão e Malu Santana, da SAP-007, Laboratoria - 2022.</p>
      <i className="ph-notepad"></i>
    </AdminTemplate>
  );
}

export default Admin;