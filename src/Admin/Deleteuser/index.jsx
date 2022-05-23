import React, { useState } from 'react';
import AdminTemplate from '../adminTemplate';
import Input from '../../Components/input';
import Button from '../../Components/button';

const DeleteUser = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)

  const onDelete = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    const uid = e.target.uid.value;
    const token = localStorage.getItem('Token');

    try {
      const resultApi = await fetch(`https://lab-api-bq.herokuapp.com/users/${uid}`, {
        method: 'DELETE',
        headers: {
          accept: 'application/json',
          Authorization: token,
        },
      });
      const content = await resultApi.json();
      setLoading(false);

      if (resultApi.status !== 200) {
        setError(content.message);
      } else {
        if (resultApi.status === 200){
          setSuccess('Usuário deletado com sucesso!');
        }
      }
    } catch (e) {
      setLoading(false);
      setError('Erro desconhecido');
    }
  };

  return (
    <AdminTemplate>
      <form className="formLogin" onSubmit={onDelete}>
        <h1>DELETAR UM USUÁRIO</h1>
          
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
        <Button title="DELETAR" />
      </form>
    </AdminTemplate>
  );
}

export default DeleteUser;