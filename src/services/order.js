import { getToken } from "./storage";
import { request } from "./client";

export function createOrder(client, table, order) {
  const products = order.map((item) => {
    return {
      id: item.id,
      qtd: item.qtd
    }

  })
  
  const body = {
    client,
    table,
    products
  }

  const headers = {
    Authorization: getToken()
  }
  return request("/orders", "POST",body,  headers);
  
}

