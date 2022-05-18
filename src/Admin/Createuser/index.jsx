import React from 'react';
import { useState } from 'react';
import AdminTemplate from '../adminTemplate';
import Input from '../../Components/input';
import Button from '../../Components/button';
import Select from '../../Components/select';

const CreateUser = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)
  
  const onCreateUser = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError(false);
    setSuccess(false);
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const role = e.target.role.value; 
  
      try {
        const resultAPi = await fetch('https://lab-api-bq.herokuapp.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
            restaurant: 'Burger Queen',
            email: email,
            password: password,
            role: role,
            name: name,
          }),
        });
        const content = await resultAPi.json();
        setLoading(false);
  
        if ( name == '') {
          setError('Preencha o campo do nome');
        }
        else if (email == ''){
          setError('Preencha o campo de email');
        }
        else if (password == ''){
          setError('Preencha o campo da senha')
        }
        else if (role == ''){
          setError('Preencha o campo do cargo');
        }
        else if(resultAPi.status === 200){
          setSuccess('Usuário cadastrado com sucesso')
        }
        else{
          setError(content.message)
        }      
        console.log(content.message);
      } catch (e) {
        setLoading(false);
      }
    };


  
  return (
    <AdminTemplate>
      <form className="formLogin" onSubmit={onCreateUser}>
        <h1>CRIAR UM NOVO USUÁRIO</h1>
        {Boolean(loading) && (
          <i className="ph-spinner">Carregando</i>
        )}
        {Boolean(error) && (
          <h1 className="msgError">{error}</h1>
        )}
        {Boolean(success) && (
          <h1 className="msgSuccess">{success}</h1>
        )}
        <div className="infoLogin">
          <h1>Nome do Funcionário</h1>
            <Input
              type="text"
              placeholder="Nome do funcionário"
              name="name"
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