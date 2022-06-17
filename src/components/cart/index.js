import trash from "../../Images/trash-icon.png";
import "./styles.modules.css";
import { useState, useCallback } from "react";

function Cart({ onClick, orderList, total, setOrder, totalPrice }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  function RemoveItem(product) {
    console.log("REMOVE ITEM");

    const productList = orderList.find((item) => {
      console.log(item);
      return item.id === product.id;
    });
    if (productList) {
      if (productList.qtd === 1) {
        orderList.splice(
          orderList.findIndex((element) => element.id === product.id),
          1
        );
        productList.qtd = 0;
      }
      if (productList.qtd > 1) {
        productList.qtd -= 1;
      }
    }
    setOrder([...orderList]);
    totalPrice();
    forceUpdate();
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="th-name">Item</th>
            <th className="th-qtd">Qtd.</th>
            <th className="th-price">Preço</th>
            <th className="th-trash"></th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((product) => (
            <tr>
              <>
                <td className="td-name">
                  {product.name}{" "}
                  {product.flavor
                    ? product.flavor[0].toUpperCase() +
                      product.flavor.substr(1)
                    : null}{" "}
                  {product.complement
                    ? product.complement[0].toUpperCase() +
                      product.complement.substr(1)
                    : null}
                </td>
                <td className="td-qtd">{product.qtd}</td>
                <td className="td-price">{product.price}</td>
              </>

              <td className="td-trash">
                <button className="trash" onClick={() => RemoveItem(product)}>
                  <img className="trash-icon" src={trash} alt="deletar"></img>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-total">
        <p>Total: {total} R$ </p>
        <button className="order-btn" onClick={onClick}>
          Finalizar
        </button>
      </div>
    </>
  );
}

export default Cart;
