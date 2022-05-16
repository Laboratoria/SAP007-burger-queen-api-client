import React from 'react';
import AdminTemplate from '../adminTemplate';
import Input from './input';
import Select from './select';
import Button from './button';

const CreateUser = () =>{
  return (
    <AdminTemplate>
      <form className="formLogin">
        <h1>CRIAR UM NOVO USUÁRIO</h1>
        <div className="infoLogin">
          <h1>Nome do Funcionário</h1>
            <Input
              type="text"
              placeholder="Nome do funcionário"
              name="email"
              icon={<i className="ph-user"></i>}
              />
          </div>
          <div className="infoLogin">
            <h1>E-mail</h1>
              <Input
              type="email"
              placeholder="E-mail do funcionário"
              name="email"
              icon={<i className="ph-envelope"></i>}
              />
          </div>
          <div className="infoLogin">
            <h1>Senha</h1>
            <Input
              type="password"
              placeholder="Senha Geral"
              name="password"
              icon={<i className="ph-lock-key"></i>}
            />
          </div>
          <Select />
          <Button title="CADASTRAR" />
      </form>
    </AdminTemplate>
  );
}

export default CreateUser;