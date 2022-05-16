import React from 'react';
import AdminTemplate from '../adminTemplate';
import Input from '../../Components/input';
import Button from '../../Components/button';

const DeleteUser = () =>{
  return (
    <AdminTemplate>
      <form className="formLogin">
        <h1>DELETAR UM USUÁRIO</h1>
          <div className="infoLogin">
            <h1>ID do Funcionário</h1>
              <Input
                type="text"
                placeholder="Número de identificação do funcionário"
                name="email"
                icon={<i className="ph-circle-wavy-check"></i>}
                />
          </div>
        <Button title="DELETAR" />
      </form>
    </AdminTemplate>
  );
}

export default DeleteUser;