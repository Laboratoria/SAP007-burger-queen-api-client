import "./styles.modules.css";

function Order({ order, onClick }) {
  return (
    <div className="order-card">
      <button type="button" onClick={onClick} className="status-button">
        {order.status}
      </button>
      <ul>
        <li>
          <p>Nº: {order.id}</p>
        </li>
        <li>
          <p>Mesa: {order.table}</p>
        </li>
        <li>
          <p>Cliente: {order.client_name}</p>
        </li>
        <li>
          <p>Criado: {order.createdAt}</p>
        </li>
        {order.updatedAt ? (
          <li>
            <p>Finzalizado: {order.updatedAt}</p>
          </li>
        ) : null}
      </ul>
      <p>Itens:</p>
      {order.Products.map((item) => {
        return (
          <>
            <ul>
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
              <li>
                <p>Qtd: {item.qtd}</p>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
export default Order;
