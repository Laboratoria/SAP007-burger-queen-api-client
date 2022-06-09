import "./styles.modules.css";

function Order({ order, onClick }) {
//   orderList.map((order) => {
    return (
      <div className="order-card">
        <button type="button" onClick={onClick} className="status-button">
          {order.status}
        </button>
        <ul>
          <li>
            <p>{order.id}</p>
          </li>
          <li>
            <p>{order.table}</p>
          </li>
          <li>
            <p>{order.client}</p>
          </li>
          <li>
            <p>{order.createdAt}</p>
          </li>
          {order.updatedAt ? (
            <li>
              <p>{order.updatedAt}</p>
            </li>
          ) : null}
        </ul>
        {/* <ul>
        <p>Itens:</p>
        <li>
        <p>{order.products.name}</p>
        </li>
        {order.products.flavor ? (
            <li>
            <p>
            {order.products.flavor[0].toUpperCase() +
                order.products.flavor.substr(1)}
                </p>
                </li>
                ) : null}
                {order.products.complement ? (
                    <li>
                    <p>
                    {order.products.complement[0].toUpperCase() +
                        order.products.complement.substr(1)}
                        </p>
                        </li>
                        ) : null}
                        <li>{order.products.qtd}</li>
                    </ul> */}
      </div>
    );
//   });
}
export default Order;
