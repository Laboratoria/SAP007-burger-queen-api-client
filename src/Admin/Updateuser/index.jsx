import React, { useState } from 'react';
import AdminTemplate from '../adminTemplate';
import Input from '../../Components/input';
import Button from '../../Components/button';
import Select from '../../Components/select';

const UpdateUser = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)

  const onUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    const uid = e.target.uid.value;
    const name = e.target.name.value;
    const role = e.target.role.value;
    const token = localStorage.getItem('Token');

    try {
      const resultApi = await fetch(`https://lab-api-bq.herokuapp.com/users/${uid}`, {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          role: role,
        }),
      });
      const content = await resultApi.json();
      setLoading(false);

      if (resultApi.status !== 200) {
        setError(content.message);
      } else {
        if (resultApi.status === 200){
          setSuccess('Usuário atualizado com sucesso!');
        }
      }
    } catch (e) {
      setLoading(false);
      setError('Erro desconhecido');
    }
  };

  return (
    <AdminTemplate>
      <form className="formLogin" onSubmit={onUpdate}>
        <h1>ATUALIZAR UM USUÁRIO (NOME E CARGO)</h1>

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
          <h1>ID do Funcionário</h1>
            <Input
              type="text"
              placeholder="Número de identificação do funcionário"
              name="uid"
              icon={<i className="ph-circle-wavy-check"></i>}
              />
        </div>
        <div className="infoLogin">
          <h1>Nome do Funcionário</h1>
            <Input
              type="text"
              placeholder="Novo nome do funcionário"
              name="name"
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