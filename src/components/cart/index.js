import trash from "../../Images/trash-icon.png";
import "./styles.modules.css";
import { useState, useCallback } from "react";

function Cart({ orderList, total, setOrder, totalPrice }) {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  function RemoveItem(product) {
    console.log("REMOVE ITEM")

    const productList = orderList.find((item) => {
      console.log(item);
      return item.id === product.id;
    });
    if (productList) {

      if (productList.qtd === 1) {
        orderList.splice(orderList.findIndex((element) => element.id === product.id), 1);
        productList.qtd = 0;
      }
      if (productList.qtd > 1) {
        productList.qtd -= 1;
      }
    }
    console.log(orderList);
    setOrder([...orderList]);
    totalPrice()
    forceUpdate();
  }


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qtd.</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((product) => (
            <tr>
              <>
                <td>{product.name}</td>
                <td>{product.qtd}</td>
                <td>{product.price}</td>
              </>

              <td>
                <button className="trash" onClick={() => RemoveItem(product)}>
                  <img className="trash-icon" src={trash} alt="deletar"></img>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total: {total} R$</td>
            <td>
              <button>Finalizar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;
