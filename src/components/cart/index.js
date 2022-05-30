
import trash from "../../Images/trash-icon.png";
import "./styles.modules.css";

function Cart({ orderList, total }) {
  

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
           

            < tr >
              
              <><td>{product.name}</td>
              <td >{product.qtd}</td>
              <td>{product.price}</td></>

           <td>
              <button className="trash">
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
