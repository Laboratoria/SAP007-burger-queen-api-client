import { getToken } from "./storage";

export function getAllProducts() {
    return request("/products", "GET");
}
function request(endpoint, method) {
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