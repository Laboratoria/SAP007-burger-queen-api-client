const mainUrl = "lab-api-bq.herokuapp.com";
const urlUsers = `${mainUrl}/users/`;
const headers = { "Content-Type": "application/json" };

export const createUser = (user) => {
    return fetch(urlUsers, {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            restaurant: "Five Starts"
        })
    }

    )
} 
