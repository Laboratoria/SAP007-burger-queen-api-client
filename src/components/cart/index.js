import trash from "../../Images/trash-icon.png";
import "./styles.modules.css";

function Cart() {
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
          <tr>
            <td>Hambúrguer</td>
            <td>2</td>
            <td>$8</td>
            <td>
              <button className="trash">
                <img className="trash-icon" src={trash} alt="deletar"></img>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;
