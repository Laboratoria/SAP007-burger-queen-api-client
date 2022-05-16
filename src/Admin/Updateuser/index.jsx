import React from 'react';
import AdminTemplate from '../adminTemplate';
import Input from '../../Components/input';
import Button from '../../Components/button';
import Select from '../../Components/select';

const UpdateUser = () =>{
  return (
    <AdminTemplate>
      <form className="formLogin">
        <h1>ATUALIZAR UM USUÁRIO (NOME E CARGO)</h1>
        <div className="infoLogin">
          <h1>ID do Funcionário</h1>
            <Input
              type="text"
              placeholder="Número de identificação do funcionário"
              name="email"
              icon={<i className="ph-circle-wavy-check"></i>}
              />
        </div>
        <div className="infoLogin">
          <h1>Nome do Funcionário</h1>
            <Input
              type="text"
              placeholder="Novo nome do funcionário"
              name="email"
              icon={<i className="ph-user"></i>}
              />
          </div>
          <Select />
          <Button title="ATUALIZAR" />
      </form>
    </AdminTemplate>
  );
}

export default UpdateUser;