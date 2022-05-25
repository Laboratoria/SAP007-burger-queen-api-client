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


  