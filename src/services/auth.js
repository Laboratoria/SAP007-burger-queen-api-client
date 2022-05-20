const authUrl = 'https://lab-api-bq.herokuapp.com/auth'
const usersUrl = 'https://lab-api-bq.herokuapp.com/users';

export const createUser = (name, email, password, role) => {

    return fetch(usersUrl, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        role: role,
        restaurant: "Burger Queen",
        }),
    });
    };

    export const loginUser = (email, password) => {
    return fetch(authUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        email: email,
        password: password,
        }),
    });
    };