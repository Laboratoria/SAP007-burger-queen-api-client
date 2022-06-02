export function getAllProducts(token) {
    return request("/products", "GET", token);
}
function request(endpoint, method, token) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
    }
    return fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, options)
        .then(response => response.json())
        .then(json => json)
}