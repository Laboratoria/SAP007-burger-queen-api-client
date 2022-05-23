import React, { useState, useEffect } from 'react';
import WaiterTemplate from '../waiterTemplate';
import Button from '../../Components/button';

const WaiterMenu = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  const getProducts = async () => {
    setLoading(true);
    setError(false);

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
          setProducts(content);
        }
      }
    } catch (e) {
      setLoading(false);
      setError('Erro desconhecido');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productsFilter = products.filter((product) => {
    if (product.sub_type === filter) {
      return true;
    } else{
      return false;
    }
  });

  return (
    <WaiterTemplate>
      <h1>CARDÁPIO</h1>
        
        {Boolean(loading) && (
          <i className="ph-spinner">Carregando</i>
        )}

        {Boolean(error) && (
          <h1 className="msgError">{error}</h1>
        )}
        
        <Button title="Café da Manhã" onClick={() => setFilter('breakfast')} />
        <Button title="Lanches" onClick={() => setFilter('hamburguer')} />
        <Button title="Acompanhamentos" onClick={() => setFilter('side')} />
        <Button title="Bebidas" onClick={() => setFilter('drinks')} />

        {productsFilter.map((product) => (
          <div>
            <h1>{product.name}</h1>
            {/* <img src={product.image}/> */}
            <p>{product.flavor}</p>
            <p>{product.complement}</p>
            <p>{product.price}</p>
          </div>
        ))}
    </WaiterTemplate>
  );
}

export default WaiterMenu;