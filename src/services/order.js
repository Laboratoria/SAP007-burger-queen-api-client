export function createOrder(token, order) {
  return request("/orders", "POST", token, order);
}
function request(endpoint, method, token, order) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      client: order.client,
      table: order.table,
      products: [
        {
          id: order.id,
          qtd: order.qtd,
        },
      ],
    }),
  };
  return fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, options)
    .then((response) => response.json())
    .then((json) => json);
}
