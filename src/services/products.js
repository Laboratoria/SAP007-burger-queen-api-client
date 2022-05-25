const baseURL = 'https://lab-api-bq.herokuapp.com';


export const RenderAllProducts = async () => {
  const token = localStorage.getItem("token");
  return await fetch(`${baseURL}/products`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `${token}`
    },
  }).then(res => res.json())
}

export const PostOrders = async (client, table, allProducts) => {
  const token = localStorage.getItem("token");
  return await fetch(`${baseURL}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `${token}`,
    },
    body: JSON.stringify({
      client: client,
      table: table,
      products: allProducts,
    })
  })
}

export const GetOrders = async () => {
  const token = localStorage.getItem("token");
  return await fetch(`${baseURL}/orders`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `${token}`,
    },
  })
  .then(res => res.json())
}

export const OrderStatusUpdate = async (orderId, status) => {
  const token = localStorage.getItem("token");
return await fetch (`${baseURL}/orders/${orderId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  },
  body: JSON.stringify(
    {status: status}
   )
})}

  