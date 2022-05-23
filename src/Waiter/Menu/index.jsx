import React, { useState } from 'react';
import WaiterTemplate from '../waiterTemplate';
import Button from '../../Components/button';
import Item from './menu'

const WaiterMenu = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)

  const onMenu = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    const token = localStorage.getItem('Token');

    try {
      const resultApi = await fetch('https://lab-api-bq.herokuapp.com/products', {
        method: 'GET',
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
          setSuccess(JSON.stringify(content));
        }
      }

    } catch (e) {
      setLoading(false);
      setError('Erro desconhecido');
    }
  };

  return (
    <WaiterTemplate>
      <form className="formLogin" onSubmit={onMenu}>
        <h1>CARDÁPIO</h1>
          
          {Boolean(loading) && (
            <i className="ph-spinner">Carregando</i>
          )}

          {Boolean(error) && (
            <h1 className="msgError">{error}</h1>
          )}
          <Button title="OBTER PRODUTOS" />
        <Item/>
      </form>
    </WaiterTemplate>
  );
}

export default WaiterMenu;