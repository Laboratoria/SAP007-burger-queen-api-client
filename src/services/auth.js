import { getToken } from './token';

const URL = 'https://lab-api-bq.herokuapp.com';

export const createUser = (name, email, password, role) => {
    return fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
            restaurant: 'burger heroes',
        })
    });
};

export const logInt = (email, password) => {
    return fetch(`${URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
};

export const getProducts = async () => {
    try {
        const response = await fetch(`${URL}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken(),
            }
        });
        return response.json()
    } catch (error) {
        return error
    }
};

export const createOrder = async (order) => {
    console.log(getToken())
    try {
        const response = await fetch(`${URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken(),
            },
            body: JSON.stringify({
                client: order.client,
                table: order.table,
                products: order.products,
            })
        })
        console.log(response)
        return response.json()
    } catch (error) {
        return error
    }
};

export const getAllOrders = async () => {
    try {
        const response = await fetch(`${URL}/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken()
            }
        })
        return response.json()
    } catch (error) {
        return error
    }
}

export const updateOrder = async (orderId, status) => {
    try {
        const response = await fetch(`${URL}/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken(),
            },
            body: JSON.stringify({
                status: status
            })
        })
        return response.json()
    } catch (error) {
        return error
    }
}  
