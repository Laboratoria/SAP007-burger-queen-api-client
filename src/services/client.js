export function request(endpoint, method, body, headers) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify(body)
    }
    return fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, options)
        .then(response => response.json())
}