import { getToken } from "./storage";
import { request } from "./client";

export function createOrder(client, table, order) {
  const products = order.map((item) => {
    return {
      id: item.id,
      qtd: item.qtd,
    };
  });

  const body = {
    client,
    table,
    products,
  };

  const headers = {
    Authorization: getToken(),
  };
  return request("/orders", "POST", body, headers);
}

export function getOrders() {
  return requests("/orders", "GET");
}

function requests(endpoint, method) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
          "Authorization": getToken()
      },
  }
  return fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, options)
      .then(response => response.json())
      .then(json => json)
}

export function deleteOrders(id) {
  return requests(`/orders/${id}`, "DELETE");
}