import "./styles.modules.css";

function Order({ order, onClick }) {
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
          <p>{order.client_name}</p>
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
      {order.Products.map((item) => {
        return (
          <>
            <ul>
              <p>Itens:</p>
              <li>
                <p>{item.name}</p>
              </li>
              {item.flavor ? (
                <li>
                  <p>{item.flavor[0].toUpperCase() + item.flavor.substr(1)}</p>
                </li>
              ) : null}
              {item.complement ? (
                <li>
                  <p>
                    {item.complement[0].toUpperCase() +
                      item.complement.substr(1)}
                  </p>
                </li>
              ) : null}
              <li>{item.qtd}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
export default Order;
