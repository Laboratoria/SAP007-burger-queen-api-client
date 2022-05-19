export function request (endpoint, method, body){
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, options)
    .then(response => response.json())
}